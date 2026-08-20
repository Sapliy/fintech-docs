# Ledger API

The ledger is the **single source of truth** for all financial state — a double-entry accounting system with accounts, entries, and balances. Money is always **int64 cents**.

## Create an account

```bash
curl -X POST https://api.sapliy.io/v1/ledger/accounts \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"name": "Merchant main", "type": "liability", "currency": "USD"}'
```

## Record a transaction

Double-entry: every transaction posts at least two balanced entries.

```bash
curl -X POST https://api.sapliy.io/v1/ledger/transactions \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"reference_id": "ref_456", "description": "Payment received", "entries": [...]}'
```

## Get accounts and transactions

```bash
curl https://api.sapliy.io/v1/ledger/accounts/acc_123 -H "Authorization: Bearer sk_test_..." -H "X-Zone-ID: zone_test_1"
curl https://api.sapliy.io/v1/ledger/transactions/txn_123 -H "Authorization: Bearer sk_test_..." -H "X-Zone-ID: zone_test_1"
```

## Notes

- Balances are **never updated directly** — every movement is a ledger transaction.
- You can replay the entire history of any account to reconcile state or pass audits.

## SDKs

- [Node.js](/sdks/node) · [Python](/sdks/python) · [Go](/sdks/go)