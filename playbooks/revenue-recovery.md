# Revenue Recovery & Dunning

The **Revenue Recovery & Dunning** playbook turns involuntary churn into recovered revenue. It is the flagship MVP playbook and uses a **3-layer stack** to recover 20–40% of failed-subscription revenue.

## The 3-layer stack

```
Layer 1: CAU prevention      card-account-updater → reduce the failures that happen
Layer 2: Smart retries       first retry 4–6h, then days 3/5/7
Layer 3: Magic-link dunning  multi-channel (email/SMS) with one-tap payment
```

### 1. CAU (Card Account Updater) prevention

Before any retry is scheduled, the playbook checks whether the customer's card details can be silently updated via the Card Account Updater (e.g. Stripe's). If the account number or expiry can be refreshed, the next payment attempt succeeds without any customer interaction — eliminating a large share of failures at the source.

### 2. Smart retries (4–6h, then days 3/5/7)

The retry schedule is **research-driven**. Industry data shows that a large fraction of recoverable failures are transient (insufficient funds, bank downtime, card network hiccups) and succeed within hours.

| Metric | Value |
|--------|-------|
| First retry window | **4–6 hours** after failure |
| First retry recovery | **~22%** of failed payments |
| Cumulative recovery via automation | **~58%** |
| Best-in-class (full stack, incl. dunning) | **70–85%** |
| Subsequent attempts | Day **3**, day **5**, day **7** |

The default engine schedule matches this: a first retry at ~5h, then stepping by 48h (days 3/5/7) up to 4 total attempts.

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

### 3. Magic-link dunning

When retries exhaust their recoverable window, the playbook escalates to **multi-channel dunning**: an email or SMS containing a **magic link** that lets the customer update their payment method in one tap and complete the payment — no portal login, no friction.

## Decision flow

1. `payment.failed` arrives (normalized from Stripe `invoice.payment_failed` or PayPal `PAYMENT.SALE.DENIED`).
2. The Policy Engine applies the dunning policy deterministically.
3. If the failure is terminal (`hard_decline`, `fraud_block`) or retries are exhausted → **escalate**.
4. Otherwise → **schedule_retry** at the next slot (4–6h, then day 3/5/7).
5. Every decision is appended to the [Audit Decision Log](/playbooks/audit-decision-log) with the action, reason, policy applied, and AI reasoning.

## Estimated impact

- Recover **20–40%** of involuntary churn.
- First retry alone recovers **~22%** of failed payments.
- Cumulative automation recovery **~58%**, best-in-class up to **85%** when combined with CAU and magic-link dunning.

## Related

- [Operational Playbooks](/playbooks/index)
- [Audit Decision Log](/playbooks/audit-decision-log)
- [Policy-as-Code](/guides/policy-as-code)