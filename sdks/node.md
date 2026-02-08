# Node.js SDK

The official Node.js SDK for Sapliy Fintech.

## Installation

```bash
npm install @sapliyio/fintech
```

## Quick Start

```js
import Sapliy from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

// Create a payment intent
const intent = await sapliy.paymentIntents.create({
  amount: 2000,
  currency: "usd",
});

console.log(intent.clientSecret);
```

## Configuration

```js
const sapliy = new Sapliy("sk_test_xxx", {
  apiVersion: "2024-01-01",
  timeout: 30000,
  maxRetries: 3,
  baseUrl: "https://api.sapliy.io", // Override for self-hosted
});
```

## API Reference

### Payments

#### Create Payment Intent

```js
const intent = await sapliy.paymentIntents.create({
  amount: 5000, // Amount in cents
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
