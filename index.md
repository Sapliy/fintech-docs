---
layout: home

hero:
  name: Sapliy Fintech
  text: Event-Driven Automation Platform
  tagline: Build powerful payment flows and business automation with zones, events, and visual workflows
  image:
    src: /hero.svg
    alt: Sapliy
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/quickstart
    - theme: alt
      text: View on GitHub
      link: https://github.com/sapliy/fintech-ecosystem

features:
  - icon: 🧩
    title: Zone-Based Isolation
    details: Separate test and live environments with dedicated API keys, logs, and flows. Experiment safely without affecting production.

  - icon: ⚡
    title: Event-Driven Architecture
    details: Everything is an event. Trigger flows from SDKs, webhooks, schedules, or external providers like Stripe and PayPal.

  - icon: 🔄
    title: Visual Flow Builder
    details: Build automation flows with drag-and-drop. Connect events to conditions, approvals, and actions without writing code.

  - icon: 🔐
    title: Policy Engine
    details: Define who can do what with flexible policies. From simple role-based rules to complex conditional logic.

  - icon: 💳
    title: Payment Processing
    details: Accept payments, manage wallets, and track transactions with a built-in ledger. Multi-currency support included.

  - icon: 📊
    title: Real-Time Observability
    details: Monitor flows, debug events, and replay webhooks. Full visibility into every automation execution.
---

## Quick Example

```js
import Sapliy from "@sapliyio/fintech";

const sapliy = new Sapliy("sk_test_xxx");

// Emit an event
await sapliy.events.emit("checkout.completed", {
  orderId: "order_123",
  amount: 9900,
  currency: "USD",
});

// This event can trigger flows in the visual builder!
```

## Architecture

```
Organization → Zone → Event → Flow → Action
```

| Concept          | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Organization** | Owns everything, has users/teams/policies      |
| **Zone**         | Isolated automation space with test/live modes |
| **Event**        | The universal trigger (SDK, UI, providers)     |
| **Flow**         | Automation logic connecting events to actions  |

[View System Architecture](https://github.com/sapliy/fintech-ecosystem/blob/main/ARCHITECTURE.md)

<div class="tip custom-block">

Ready to build? Follow the [Quick Start Guide](/getting-started/quickstart) to create your first zone and trigger events in minutes.

</div>
