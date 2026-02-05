# Test vs Live Mode

Sapliy uses separate environments for testing and production.

## Test Mode
- **Key prefix:** `pk_test_`, `sk_test_`
- **Data:** Safe to create/delete
- **Payments:** Mocked, no real money moves

## Live Mode
- **Key prefix:** `pk_live_`, `sk_live_`
- **Data:** Real production data
- **Payments:** Real transactions

## Switching
Use the toggle in the dashboard or configure your SDK with the appropriate key.
