# Rate Limits

Sapliy applies rate limits per **organization** and per **zone** at the API gateway.

## Default limits

| Scope | Default |
|-------|---------|
| Per organization | 1,000 requests / minute |
| Per zone | 300 requests / minute |
| Webhook delivery | 10 retries with exponential backoff |

## Response headers

Every response includes the standard rate-limit headers:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 299
X-RateLimit-Reset: 1700000000
```

## Handling `429`

When the limit is exceeded, the gateway returns `429 Too Many Requests`. Retry with exponential backoff and respect the `X-RateLimit-Reset` header.

> Limits are configurable per organization. Contact your account team to raise them.

## Related

- [API Overview](/api/overview)
- [Error Codes](/reference/errors)