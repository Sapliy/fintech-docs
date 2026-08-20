# Audit Decision Log

The **Audit Decision Log** is what makes Sapliy *auditable*, not just automated. Every decision the platform makes — every retry scheduled, every refund approved, every reminder sent — is appended to an **immutable, cryptographically hash-chained log** that records not just *what* happened but **why**.

## What is recorded

Each decision entry stores:

| Field | Meaning |
|-------|---------|
| `playbookId` | Which Operational Playbook made the decision |
| `event` | The triggering event (`payment.failed`, `refund.requested`, `invoice.overdue`) |
| `action` | What was decided (`schedule_retry`, `request_approval`, `send_reminder`, `escalate`) |
| `reason` | The deterministic policy reason |
| `policyApplied` | Which policy rule ran (`dunning-policy`, `refund-approval-policy`) |
| `aiReasoning` | Human-readable explanation of the AI reasoning |
| `confidence` | Confidence gradient (0–1) |
| `actor` | Who/what acted (`engine`, a user, a system) |
| `prevHash` | Link to the previous entry |
| `hash` | SHA-256 of `prevHash` + canonical entry JSON |

## Immutability & tamper-evidence

The log is **append-only**. Each entry's hash is computed over the previous entry's hash plus the canonical JSON of the entry:

```
SHA-256(prevHash + canonical(entry))  →  entry.Hash
```

Because every hash depends on the previous one, changing any historical entry breaks every subsequent link. A `Verify` pass replays the chain and fails on the first mismatch — making tampering **detectable by construction**.

## Why an action was taken

The `aiReasoning` field is the key differentiator. For example, a retry decision reads:

```
Dunning policy scheduled next retry for pay_123 at 2026-08-20T13:00:00Z (attempt=1, last_outcome=insufficient_funds).
```

A refund approval decision reads:

```
Refund approval policy routed refund of 120000 USD to finance_manager: amount 120000 exceeds require-approval threshold of 100000 cents.
```

Every decision in the platform can be answered with "why was this done?" — no more hunting through dashboards.

## Viewing the log

The Audit Decision Log is available in the **Console** (sapliy-automation) and can be streamed via the CLI. It is designed to be compliance-ready out of the box.

## Related

- [Operational Playbooks](/playbooks/index)
- [Revenue Recovery & Dunning](/playbooks/revenue-recovery)
- [Refund Approval Orchestration](/playbooks/refund-approval)
- [Policy-as-Code](/guides/policy-as-code)