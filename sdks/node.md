# Node.js SDK

The official Node.js SDK for Sapliy Fintech.

## Installation

```bash
npm install @sapliyio/fintech
```

## Quick Start

```js
import { SapliyClient } from "@sapliyio/fintech";

// Initialize with your secret key and endpoint (optional, defaults to localhost:8080)
const sapliy = new SapliyClient("sk_test_xxx", "https://api.sapliy.io");

// Emit a business event
await sapliy.events.emit("checkout.completed", {
  orderId: "order_123",
  amount: 9900,
  currency: "USD",
});
```

## Configuration

The `SapliyClient` provides access to all sub-services:
- `sapliy.auth` - User and session management
- `sapliy.payments` - Payment intents and charges
- `sapliy.wallets` - Virtual wallet management
- `sapliy.ledger` - Double-entry accounting
- `sapliy.flows` - Automation flow management
- `sapliy.zones` - Logical zone isolation
- `sapliy.notifications` - Email, SMS, Slack delivery

```js
const sapliy = new SapliyClient("sk_test_xxx", "https://api.sapliy.io");
```

## API Reference

### Payments

#### Create Payment Intent
```js
const intent = await sapliy.payments.createPaymentIntent({
  amount: 5000,
  currency: "usd",
  metadata: { orderId: "order_123" },
});
```

#### Confirm Payment Intent

```js
const confirmed = await sapliy.paymentIntents.confirm(intent.id, {
  paymentMethod: "pm_card_visa",
});
```

### Zones

#### Create Zone

```js
const zone = await sapliy.zones.create({
  name: "Production",
  mode: "live",
});
```

#### List Zones

```js
const zones = await sapliy.zones.list({ limit: 10 });
```

### Events

#### Emit Event

```js
await sapliy.events.emit("checkout.completed", {
  orderId: "order_123",
  amount: 9900,
});
```

#### Stream Events

```js
const stream = sapliy.events.stream({ zone: "zone_abc" });

stream.on("event", (event) => {
  console.log("Event:", event.type, event.data);
});

stream.on("error", (err) => {
  console.error("Stream error:", err);
});
```

### Webhooks

#### Verify Signature

```js
import { verifyWebhookSignature } from "@sapliyio/fintech";

const isValid = verifyWebhookSignature(
  req.body,
  req.headers["x-sapliy-signature"],
  "whsec_xxx",
);
```

## Error Handling

```js
try {
  const intent = await sapliy.paymentIntents.create({ ... });
} catch (err) {
  if (err instanceof Sapliy.errors.InvalidRequestError) {
    console.error('Invalid request:', err.message);
  } else if (err instanceof Sapliy.errors.AuthenticationError) {
    console.error('Invalid API key');
  } else if (err instanceof Sapliy.errors.RateLimitError) {
    console.error('Rate limited, retry after:', err.retryAfter);
  }
}
```

## TypeScript Support

The SDK includes full TypeScript definitions:

```ts
import Sapliy, { PaymentIntent, Zone } from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

const intent: PaymentIntent = await sapliy.paymentIntents.create({
  amount: 1000,
  currency: "usd",
});
```

## Idempotency

Use idempotency keys to safely retry requests:

```js
const intent = await sapliy.paymentIntents.create(
  { amount: 1000, currency: "usd" },
  { idempotencyKey: "unique-request-id-123" },
);
```

## Related

- [Python SDK](/sdks/python)
- [Go SDK](/sdks/go)
- [API Reference](/api/overview)
