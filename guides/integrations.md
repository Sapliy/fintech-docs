# Third-Party Integrations

Sapliy acts as a central nervous system for your fintech stack. We offer first-class support for major payment providers and services.

## Why Integrate via Sapliy?

1.  **Unified Event Model**: normalize `stripe.charge.succeeded` and `paypal.payment.captured` into a single `payment.success` event if you choose.
2.  **Orchestration**: Trigger workflows *after* the payment, not just within the payment callback.
3.  **Resilience**: Sapliy handles retries and failures so you don't lose webhooks.

## Official Connectors

Sapliy includes pre-built connectors for the most common services. These connectors handle authentication, signature verification, and data normalization.

### Payment Gateways
- **Stripe**: Full lifecycle support from intent to refund.
- **PayPal**: Billing agreements and subscription tracking.
- **Square**: Retail and e-commerce payment integration.
- **Paymob**: MENA-focused mobile wallet and kiosk payments.

### Communication & Alerts
- **Slack**: Channel notifications and interactive buttons.
- **Twilio**: SMS and WhatsApp delivery.
- **SendGrid**: Transactional email templates.
- **PagerDuty**: Critical incident escalation from financial anomalies.

### Monitoring
- **Datadog**: Trace flow performance and error rates.


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
