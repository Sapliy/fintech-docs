# Third-Party Integrations

Sapliy acts as a central nervous system for your fintech stack. We offer first-class support for major payment providers and services.

## Why Integrate via Sapliy?

1.  **Unified Event Model**: normalize `stripe.charge.succeeded` and `paypal.payment.captured` into a single `payment.success` event if you choose.
2.  **Orchestration**: Trigger workflows *after* the payment, not just within the payment callback.
3.  **Resilience**: Sapliy handles retries and failures so you don't lose webhooks.

## Payment Providers

### Stripe
- **Webhook Handling**: We verify Stripe signatures automatically.
- **Actions**:
    - Create Customer
    - Create PaymentIntent
    - Capture Charge
    - Issue Refund

### PayPal
- **Integration**: Link your PayPal business account.
- **Flows**: Listen for `BILLING.SUBSCRIPTION.ACTIVATED`.

### Paymob
- **Regional Support**: Deep integration for MENA region payments.
- **Kiosk/Wallet**: Support for mobile wallet triggers.

## Service Integration Pattern

You can integrate *any* service using our standard HTTP nodes or generic SDKs, but "Official Integrations" offer:
- **Pre-built Authentication**: Securely store API keys (encrypted).
- **Typed Actions**: "Refund" node implies specific parameters, validated before execution.

### Offering Your Own Services
Organizations can define **Service Offerings**.
1.  Define the Service (e.g., "KYC Provider").
2.  Define Capabilities (e.g., "Verify ID").
3.  Publish to your Organization's catalog.
4.  Use in any Flow.
