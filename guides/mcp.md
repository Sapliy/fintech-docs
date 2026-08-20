# Model Context Protocol (MCP)

Sapliy exposes its financial tools to AI agents through the **Model Context Protocol (MCP)** — the open standard for connecting AI assistants to tools. This lets any MCP-compatible agent (Claude, OpenAI-compatible hosts, custom agents) discover and invoke Sapliy's tools with full policy governance and auditing.

> Sapliy is vendor-agnostic by design: the same MCP tool layer works with OpenAI, Anthropic, Gemini, or any agent runtime that speaks MCP.

## Why MCP?

Instead of hard-coding each agent to a bespoke REST API, Sapliy publishes **tools** over MCP so agents can:

- **Discover** what Sapliy can do (`list_tools`) without any SDK install.
- **Call** governed tools with structured JSON-RPC requests.
- **Stay audited** — every tool call becomes an entry in the [Audit Decision Log](/playbooks/audit-decision-log).

## How Sapliy exposes tools via MCP

Sapliy's SDK-first design registers capabilities as tools using `@tool` / `@agent` annotations:

```
@tool "createPaymentIntent"
  description: Create a payment intent (amount in int64 cents)
  input: { amount, currency, description, metadata }

@agent "refundAgent"
  tools: [createPaymentIntent, evaluateRefundPolicy, scheduleDunningRetry]
  policies: [refund-approval-policy, dunning-policy]
```

The MCP bridge translates these registrations into MCP tool definitions. An agent's request arrives over JSON-RPC:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "createPaymentIntent",
    "arguments": { "amount": 2000, "currency": "USD", "description": "Order #1234" }
  }
}
```

## Governance & auditability

The key difference from a raw agent-to-API call: **every MCP tool call passes through the Policy Engine first**. The request is checked against company rules (thresholds, roles, risk) *before* execution, and the outcome — including the AI reasoning and confidence — is written to the Audit Decision Log.

```
Agent (MCP client) → JSON-RPC → Sapliy MCP server
                                      │
                                      ▼
                              Policy Engine gate  ── deny → reason recorded
                                      │ allow
                                      ▼
                              Execution Engine → Audit Decision Log
```

## Running the MCP server

```bash
# Point an MCP-capable agent at the Sapliy MCP endpoint
sapliy mcp serve --config ./mcp.config.json
```

The MCP server connects to the Sapliy gateway and registers the platform's `@tool` / `@agent` capabilities. Configuration controls which tools are exposed and which policy gates apply.

## SDK registration pattern

From the Go SDK, tool registration mirrors the annotation model:

```go
client.Tools.Register("createPaymentIntent", createIntentHandler).
    WithPolicy("refund-approval-policy").
    WithDescription("Create a payment intent (amount in int64 cents)")
```

## Status

- **Planned** — MCP server and tool registration are part of the roadmap. The `@tool` / `@agent` registration convention and JSON-RPC surface are specified here so the SDKs, console, and integrations can adopt the same contract.

## Related

- [Operational Playbooks](/playbooks/index)
- [Policy-as-Code](/guides/policy-as-code)
- [Audit Decision Log](/playbooks/audit-decision-log)
- [Architecture](/concepts/architecture)