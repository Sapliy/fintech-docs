---
layout: home

hero:
  name: Sapliy
  text: AI-Native Financial Operations Intelligence Layer
  tagline: Turn business goals into reliable, explainable, auditable financial outcomes across Stripe, PayPal, Paddle, and the systems you already run.
  image:
    src: /hero.svg
    alt: Sapliy
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/quickstart
    - theme: alt
      text: View Operational Playbooks
      link: /playbooks/index
    - theme: alt
      text: View on GitHub
      link: https://github.com/Sapliy/sapliy-ecosystem

features:
  - icon: 🎯
    title: Intent-Based Orchestration
    details: Describe the outcome ("recover failed subscription payments") — not technical nodes. Sapliy plans your goal into an Operational Playbook.
  - icon: 🛡️
    title: Deterministic Policy Engine
    details: OPA/Rego policies gate every proposed action before execution. AI recommends; the policy engine decides.
  - icon: 📜
    title: Immutable Audit Decision Log
    details: Every decision is recorded with its action, reason, policy applied, and AI reasoning in an append-only, hash-chained log.
  - icon: 🧭
    title: Confidence Gradient & Intent Preview
    details: Every AI recommendation carries a confidence gradient and an intent preview, so humans stay in control before anything runs.
  - icon: 🔌
    title: Orchestrates, Never Replaces
    details: We are not a workflow builder or a Stripe clone. Sapliy orchestrates the systems you already run — Stripe, PayPal, Paddle, HubSpot, Xero.
  - icon: 💻
    title: Developer-First Experience
    details: Use the unified CLI to bridge cloud events to your local server. SDKs for Node, Go, and Python included.
---

## Quick Example

Emit a financial event — Sapliy's Operational Playbooks and flows decide what to do:

```js
import Sapliy from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

// Emit an event
await sapliy.events.emit("payment.failed", {
  amount: 9900,
  currency: "USD",
  customerId: "cus_123",
});

// The Revenue Recovery & Dunning playbook evaluates this failure,
// schedules a smart retry (4–6h, then days 3/5/7), and logs every
// decision with its reason in the Audit Decision Log.
```

## The three MVP Operational Playbooks

| Playbook | Outcome | Mechanism |
|----------|---------|-----------|
| [Revenue Recovery & Dunning](/playbooks/revenue-recovery) | Recover 20–40% of involuntary churn | 3-layer stack: CAU prevention → smart AI retries (4–6h, days 3/5/7) → multi-channel magic-link dunning |
| [Refund Approval Orchestration](/playbooks/refund-approval) | Policy-based routing of financial adjustments | Policy Engine gates: auto-approve < $1,000, manager approval > $1,000, 90-day window |
| [Audit Decision Log](/playbooks/audit-decision-log) | 100% explainability, audit-ready | Append-only signed decision log storing action + reason + policy + AI reasoning |

## Architecture

```
User intent ("recover failed payments")
        │
        ▼
Intent Preview + Confidence Gradient  →  Policy Engine (OPA/Rego)  →  Execution Engine  →  Audit Decision Log
```

| Concept          | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Organization** | Owns everything, has users/teams/policies      |
| **Zone**         | Isolated automation space with test/live modes |
| **Playbook**     | Governed, auditable operational outcome        |
| **Event**        | The universal trigger (SDK, UI, providers)     |
| **Decision Log** | Immutable record of every action + reason      |

[View System Architecture](https://github.com/Sapliy/sapliy-ecosystem/blob/main/ARCHITECTURE.md)

<div class="tip custom-block">

Ready to build? Read [Why Sapliy?](/concepts/comparison) to see how we differ from n8n/Zapier, then follow the [Quick Start Guide](/getting-started/quickstart) to create your first zone.

</div>