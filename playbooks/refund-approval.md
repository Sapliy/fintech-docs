# Refund Approval Orchestration

The **Refund Approval Orchestration** playbook routes every refund through a **deterministic policy engine** before any money moves. It turns "who can approve what" into company policy instead of tribal knowledge — and records every decision with the reason it was made.

## Policy gates (deterministic, in order)

When a `refund.requested` event arrives, the Policy Engine evaluates it in this order:

| Gate | Condition | Outcome |
|------|-----------|---------|
| 1. High-value | `amount > $1,000.00` | **Manager approval required** (`finance_manager`) |
| 2. Mid-value | `amount > $100.00` auto-approve ceiling | **Team-lead approval required** |
| 3. Age | `days_since_charge > 90` | **Rejected** (outside the refund window) |
| 4. Default | otherwise | **Auto-approved** |

```json
{
  "autoApproveUnderCents": 100000,
  "requireApprovalOverCents": 100000,
  "maxRefundDays": 90,
  "notifyChannels": ["email", "slack"]
}
```

All amounts are **int64 cents** — thresholds are exact, never floating-point approximations.

## Decision flow

1. `refund.requested` arrives.
2. The policy engine evaluates amount, charge age, and customer tier deterministically.
3. Approved refunds are **auto-approved** and executed with an idempotency key.
4. Refunds over a threshold are routed to the **approver role** via email/Slack (e.g. `SendApprovalRequest`).
5. Out-of-window refunds are **rejected** with the reason.
6. Every outcome — auto-approve, require approval, or reject — is appended to the [Audit Decision Log](/playbooks/audit-decision-log).

## What the console shows

The console surfaces each approval request with:

- The **reason** the policy routed it to an approver (e.g. `amount 120000 exceeds require-approval threshold of 100000 cents`)
- The **approver role** assigned (`finance_manager`, `team_lead`)
- The **evidence** evaluated (`amount_cents=120000`, `policy=require_approval_over_cents`)
- The **AI reasoning** generated for the decision

## Related

- [Operational Playbooks](/playbooks/index)
- [Audit Decision Log](/playbooks/audit-decision-log)
- [Policy-as-Code](/guides/policy-as-code)