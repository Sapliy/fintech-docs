# Error Codes

Sapliy uses conventional HTTP status codes and a consistent error envelope:

```json
{
  "error": {
    "type": "invalid_request_error",
    "message": "Amount must be a positive integer in cents",
    "code": "invalid_amount"
  }
}
```

## HTTP status codes

| Code | Meaning |
|------|---------|
| `400` | Invalid request — malformed body or validation failure |
| `401` | Missing or invalid API key |
| `403` | Policy denied — the action violates an OPA/Rego policy gate |
| `404` | Resource not found |
| `409` | Conflict — idempotency key already used with a different payload |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

## Common error codes

| Code | Description |
|------|-------------|
| `invalid_amount` | Amount missing, non-integer, or <= 0 (money is int64 cents) |
| `invalid_currency` | Unsupported currency |
| `policy_denied` | Deterministic policy gate rejected the action |
| `approval_required` | Action exceeds an approval threshold (e.g. refund > $1,000) |
| `zone_mismatch` | Request scoped to a zone that does not match the key |

## Related

- [API Overview](/api/overview)
- [Rate Limits](/reference/rate-limits)
- [Policy-as-Code](/guides/policy-as-code)