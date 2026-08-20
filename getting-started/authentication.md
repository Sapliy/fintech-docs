# Authentication

Sapliy authenticates API requests with API keys via Bearer auth:

```bash
curl https://api.sapliy.io/v1/zones \
  -H "Authorization: Bearer sk_test_..."
```

## Key types

| Key | Prefix | Use |
|-----|--------|-----|
| **Secret key** | `sk_test_...` / `sk_live_...` | Server-side, full access |
| **Publishable key** | `pk_test_...` / `pk_live_...` | Client-side, safe for browsers |

## Creating keys

1. Register and log in to get a JWT.
2. Create an API key scoped to a zone and environment.
3. Send it as `Authorization: Bearer sk_...` on every request.

Keys are scoped per zone, so test and live traffic never mix. Never expose secret keys in client-side code.

## Related

- [Quick Start](/getting-started/quickstart)
- [Test vs Live Mode](/getting-started/test-vs-live)
- [Security & PBAC](/concepts/security)