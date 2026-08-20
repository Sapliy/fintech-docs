# Operational Playbooks

**Operational Playbooks** are the heart of the Sapliy AI-Native Autonomation Platform. Instead of wiring nodes in a workflow canvas, you describe a **business outcome** — "recover failed subscription payments" — and Sapliy plans it into a governed, auditable execution playbook.

> Sapliy is an AI-native Financial Operations Intelligence Layer that turns business goals into reliable, explainable, auditable financial outcomes across Stripe, PayPal, Paddle, and the systems you already run.

## How a playbook works

```
User intent ("recover failed payments")
        │
        ▼
Intent Preview + Confidence Gradient   ← you approve before anything runs
        │
        ▼
Policy Engine (deterministic gates)    ← OPA/Rego validates every proposed action
        │
        ▼
Execution Engine (durable, idempotent) ← retries, timeouts, safe recovery
        │
        ▼
Audit Decision Log (append-only)       ← action + reason + policy + AI reasoning
```

Every playbook is:

- **Intent-based** — you state the goal, not the technical steps.
- **Governed** — a deterministic policy engine gates every action *before* execution (approvals, thresholds, risk).
- **Auditable** — each decision is recorded in an immutable, hash-chained decision log with the *reason why*.
- **Explainable** — every AI recommendation carries a Confidence Gradient and an Intent Preview.

## The three MVP Operational Playbooks

| Playbook | Outcome | Mechanism |
|----------|---------|-----------|
| [Revenue Recovery & Dunning](/playbooks/revenue-recovery) | Recover 20–40% of involuntary churn | 3-layer stack: CAU prevention → smart AI retries (4–6h, then days 3/5/7) → multi-channel magic-link dunning |
| [Refund Approval Orchestration](/playbooks/refund-approval) | Policy-based routing of financial adjustments | Policy Engine gates: auto-approve < $1,000, manager approval > $1,000, 90-day window |
| [Audit Decision Log](/playbooks/audit-decision-log) | 100% explainability, audit-ready | Append-only signed decision log storing action + reason + policy + AI reasoning |

## Configuring a playbook

Playbooks are configured declaratively (JSON). Example dunning configuration:

```json
{
  "maxRetries": 4,
  "firstRetryDelay": "5h",
  "retryStepDelay": "48h",
  "finalRetryDelay": "96h",
  "channels": ["email"],
  "magicLink": true
}
```

And refund approval:

```json
{
  "autoApproveUnderCents": 100000,
  "requireApprovalOverCents": 100000,
  "maxRefundDays": 90,
  "notifyChannels": ["email", "slack"]
}
```

## Related

- [Revenue Recovery & Dunning](/playbooks/revenue-recovery)
- [Refund Approval Orchestration](/playbooks/refund-approval)
- [Audit Decision Log](/playbooks/audit-decision-log)
- [Policy-as-Code](/guides/policy-as-code)
- [Architecture](/concepts/architecture)