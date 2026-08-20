```
███████╗ █████╗ ██████╗ ██╗     ██╗   ██╗ ██╗   ██╗
██╔════╝██╔══██╗██╔══██╗██║     ██║   ██║ ╚██╗ ██╔╝
███████╗███████║██████╔╝██║     ██║   ██║  ╚████╔╝
╚════██║██╔══██║██╔══██╗██║     ██║   ██║   ╚██╔╝
███████║██║  ██║██║  ██║███████╗╚██████╔╝    ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝     ╚═╝
```

# Sapliy Documentation

Official documentation site for the Sapliy AI-Native Financial Operations Platform.

> **Sapliy is an AI-native Financial Operations Intelligence Layer that turns business goals into reliable, explainable, auditable financial outcomes — by orchestrating the systems companies already run (Stripe, PayPal, Paddle, HubSpot, Xero), not replacing them.**

| Badge | |
|---|---|
| Site | [![Docs](https://img.shields.io/badge/docs-docs.sapliy.io-blue)](https://docs.sapliy.io) |
| Version | `1.0.0` |
| License | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) |
| Generator | VitePress `^1.6.4` |

---

## What is this?

The **canonical documentation hub** for the Sapliy platform. It covers everything from the platform's AI-native positioning and core concepts to the MVP Operational Playbooks, SDK guides, and the full REST API reference.

## What's inside

| Section | Contents |
|---|---|
| **Getting Started** | Quickstart, authentication, test vs. live mode |
| **Operational Playbooks** | Overview + the three MVP playbooks: Revenue Recovery & Dunning, Refund Approval Orchestration, Audit Decision Log |
| **Core Concepts** | Why Sapliy (vs n8n/Zapier), architecture, features, organizations, zones, events, flows, security & PBAC |
| **Guides** | Integration guides, configuring PBAC, building your first flow, Model Context Protocol (MCP), policy-as-code |
| **SDKs** | Node.js (`@sapliyio/fintech`), Python (`sapliyio-fintech`), Go (`github.com/sapliy/sapliy-sdk-go`) |
| **API Reference** | Overview, payments, wallets, ledger, webhooks |
| **Reference** | CLI reference, nodes reference, error codes, rate limits |
| **Automation** | Flow builder, actions, triggers |

## Project structure

```
.
├── index.md                  # Home page
├── getting-started/
│   ├── quickstart.md
│   ├── authentication.md
│   └── test-vs-live.md
├── playbooks/
│   ├── index.md              # Operational Playbooks overview
│   ├── revenue-recovery.md   # Dunning & revenue recovery
│   ├── refund-approval.md    # Policy-gated refunds
│   └── audit-decision-log.md # Immutable decision log
├── concepts/
│   ├── architecture.md
│   ├── comparison.md         # Sapliy vs n8n / Zapier
│   ├── features.md
│   ├── security.md
│   ├── organizations.md
│   ├── zones.md
│   ├── events.md
│   └── flows.md
├── guides/
│   ├── integrations.md
│   ├── pbac-config.md        # OPA/JSON policies
│   ├── first-flow.md
│   ├── mcp.md                # Model Context Protocol
│   └── policy-as-code.md
├── sdks/
│   ├── node.md
│   ├── python.md
│   └── go.md
├── api/
│   ├── overview.md
│   ├── payments.md
│   ├── wallets.md
│   ├── ledger.md
│   └── webhooks.md
├── reference/
│   ├── cli.md
│   ├── nodes.md
│   ├── errors.md
│   └── rate-limits.md
└── automation/
    ├── flow-builder.md
    ├── actions.md
    └── triggers.md
```

## Development

```bash
# Install dependencies
npm install

# Start the dev server (with hot reload)
npm run docs:dev

# Build for production
npm run docs:build

# Preview a production build
npm run docs:preview
```

## Architecture

Sapliy is built as a high-performance event-driven ecosystem with a deterministic policy engine and an immutable audit decision log.

- **Concepts**: [Architecture Overview](/concepts/architecture)
- **Playbooks**: [Operational Playbooks](/playbooks/index)
- **Deep dive**: [`ARCHITECTURE.md`](https://github.com/Sapliy/sapliy-ecosystem/blob/main/ARCHITECTURE.md)

## Contributing

Documentation contributions are welcome. See [CONTRIBUTING.md](https://github.com/Sapliy/sapliy-ecosystem/blob/main/CONTRIBUTING.md).

## Part of the Sapliy platform

- [`sapliy-ecosystem`](https://github.com/Sapliy/sapliy-ecosystem) — core backend, playbook engine, policy & audit engines
- [`sapliy-sdk-node`](https://github.com/Sapliy/sapliy-sdk-node) — Node.js SDK (`@sapliyio/fintech`)
- [`sapliy-sdk-python`](https://github.com/Sapliy/sapliy-sdk-python) — Python SDK (`sapliyio-fintech`)
- [`sapliy-sdk-go`](https://github.com/Sapliy/sapliy-sdk-go) — Go SDK
- [`sapliy-automation`](https://github.com/Sapliy/sapliy-automation) — Sapliy console
- [`sapliy-examples`](https://github.com/Sapliy/sapliy-examples) — sample apps per language

## License

MIT © [Sapliy](https://github.com/sapliy)