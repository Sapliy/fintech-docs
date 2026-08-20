# Payments API

Create, fetch, and confirm **payment intents**. Money is always expressed in **int64 cents** — never floats.

## Create a payment intent

```bash
curl -X POST https://api.sapliy.io/v1/payments/intents \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"amount": 1000, "currency": "USD", "description": "Order #123"}'
```

Response: a `PaymentIntent` object with `id`, `status`, `amount`, `currency`.

## Confirm a payment intent

```bash
curl -X POST https://api.sapliy.io/v1/payments/intents/pi_123/confirm \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"payment_method_id": "pm_card_visa"}'
```

## Get a payment intent

```bash
curl https://api.sapliy.io/v1/payments/pi_123 \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1"
```

## Notes

- Confirming a payment never mutates balances directly — ledger entries are created for auditability.
- Failed payments (`payment.failed`) feed the **Revenue Recovery & Dunning** playbook.

## SDKs

- [Node.js](/sdks/node) · [Python](/sdks/python) · [Go](/sdks/go)