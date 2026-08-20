# Policy-as-Code

Sapliy governs every action with a **deterministic Policy Engine** before anything executes. Policies are written as code — Open Policy Agent (OPA) / Rego — so your approval rules are versioned, testable, and auditable, just like the rest of your infrastructure.

> Deterministic gates are a hard requirement: AI *recommends*, the policy engine *decides*. No model output can move money on its own.

## Why policy-as-code?

- **Deterministic** — the same inputs always produce the same decision. No model variance.
- **Versioned** — policies live in git, reviewed and rolled back like code.
- **Testable** — Rego policies can be unit-tested (`opa test`).
- **Auditable** — the policy rule that fired is recorded in the Audit Decision Log.
- **Safe** — every proposed action (refund, retry, reminder) is validated *before* execution.

## How it works

```
AI / agent proposes an action
        │
        ▼
┌─────────────────────────────┐
│  Policy Engine (OPA/Rego)   │
│  input: roles, action,      │
│  resource, context, amount  │
│  ─────────────────────────  │
│  data.sapliy.authz.allow ?  │
└─────────────────────────────┘
   │ allow                     │ deny
   ▼                           ▼
Execute                  Deny + reason → Audit Log
```

The engine evaluates a prepared Rego query (`data.sapliy.authz.allow`) against a structured input. Sapliy ships a hardcoded fallback engine as well, so policy evaluation works even when no Rego file is configured.

## Example: refund approval gate

```rego
package sapliy.authz

import future.keywords.in

default allow := false

# Refunds above the manager threshold require approval
allow if {
    input.action == "refund.request"
    input.amount_cents > input.policy.require_approval_over_cents
    input.roles[_] == "finance_manager"
}

# Refunds within the auto-approve threshold are allowed
allow if {
    input.action == "refund.request"
    input.amount_cents <= input.policy.auto_approve_under_cents
    input.days_since_charge <= input.policy.max_refund_days
}
```

## Input shape

The engine receives a normalized `PolicyContext`:

```json
{
  "action": "refund.request",
  "resource": "pay_123",
  "amount_cents": 120000,
  "currency": "USD",
  "days_since_charge": 45,
  "roles": ["support_agent"],
  "enterprise": false
}
```

## Playbook policy gates

Each MVP Operational Playbook maps to a policy rule:

| Playbook | Policy rule | Gate |
|----------|-------------|------|
| Revenue Recovery & Dunning | `dunning-policy` | terminal outcomes → escalate; otherwise schedule retry (4–6h, days 3/5/7) |
| Refund Approval | `refund-approval-policy` | > $1,000 → manager approval; > 90 days → reject; else auto-approve |
| Invoice Reminders | `invoice-reminder-policy` | overdue invoice → send reminder per cadence |

## Testing policies

```bash
opa test ./policies
```

## Status

- **Implemented** — the Policy Engine (`internal/policy`) in `sapliy-ecosystem` supports OPA/Rego with a hardcoded fallback and ships with tests (`opa_test.go`, `json_test.go`).
- **Roadmap** — richer policy input (customer tier, risk scores, event context) and policy versioning via the management API.

## Related

- [Refund Approval Orchestration](/playbooks/refund-approval)
- [Revenue Recovery & Dunning](/playbooks/revenue-recovery)
- [Audit Decision Log](/playbooks/audit-decision-log)
- [MCP](/guides/mcp)