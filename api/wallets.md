# Wallets API

Wallets are a high-level logic layer over the **ledger**. Balances are derived from immutable ledger entries — never updated directly.

## Get a wallet

```bash
curl https://api.sapliy.io/v1/wallets/user_123 \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1"
```

## Top up a wallet

```bash
curl -X POST https://api.sapliy.io/v1/wallets/topup \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"amount": 1000, "currency": "USD", "reference_id": "topup_001"}'
```

Returns a ledger `transaction_id`.

## Transfer between wallets

```bash
curl -X POST https://api.sapliy.io/v1/wallets/transfer \
  -H "Authorization: Bearer sk_test_..." \
  -H "X-Zone-ID: zone_test_1" \
  -H "Content-Type: application/json" \
  -d '{"to_user_id": "user_456", "amount": 500, "currency": "USD", "reference_id": "transfer_001"}'
```

## Notes

- All amounts are **int64 cents**.
- Every mutation produces a double-entry ledger transaction for full auditability.

## SDKs

- [Node.js](/sdks/node) · [Python](/sdks/python) · [Go](/sdks/go)