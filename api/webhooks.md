# Webhooks API

Listen for events on your account so your integration can automatically trigger reactions.

## Event Object

Webhooks deliver an Event object to your endpoint:

```json
{
  "id": "evt_123",
  "type": "payment.succeeded",
  "data": { ... }
}
```

## Verifying Signatures

Verify the `X-Sapliy-Signature` header to ensure the request came from us.
