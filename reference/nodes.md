# Automation Nodes Reference

Sapliy's Flow Builder uses modular nodes to define automation logic. Every node belongs to one of three categories: **Triggers**, **Logic**, or **Actions**.

## Triggers

### Event Trigger
The entry point for most flows.
- **Config**: `eventType` (e.g., `payment.succeeded`).
- **Data**: The entire event payload is available to downstream nodes.

### Schedule Trigger
Runs flows on a periodic basis.
- **Config**: Cron expression (e.g., `0 0 * * *`).

## Logic Nodes

### Condition Node
Branch the flow based on data values.
- **Operators**: `equals`, `not_equals`, `greater_than`, `less_than`, `contains`, `regex`.
::: v-pre
- **Expression**: `{{ event.data.amount }} > 1000`
:::


### Filter Node
Stops the flow execution if criteria aren't met.
- **Use Case**: Only process events for specific currencies or regions.

### Approval Node
Pauses the flow and waits for manual intervention from the Sapliy Dashboard.
- **Config**: `assignees`, `timeout` (e.g., `48h`), `notification_channel`.
- **Result**: Flow resumes with `approved` or `rejected` status.

### AI Analysis Node
Uses localized LLMs to analyze event data and make a decision.
- **Use Case**: Detecting suspicious patterns in unstructured checkout data.

### Wait / Timeout Node
Pauses execution for a specified duration or until a deadline.
- **Config**: `duration` (e.g., `10m`, `1h`).

### Rate Limit Node
Prevents a flow from executing too frequently for the same user or entity.
- **Config**: `limit`, `window` (e.g., 5 requests per minute).

## Action Nodes

### Webhook Node
Send a signed HTTP request to an external system.
- **Security**: Includes `X-Sapliy-Signature` for verification.
- **Config**: URL, Method, Headers, Body (supports templates).

### Notification Node
Send alerts via pre-configured channels.
- **Channels**: Email (SendGrid), Slack, Twilio (SMS), PagerDuty.

### Ledger Node
Records a transaction or audit entry in the internal ledger.
- **Fields**: `debit`, `credit`, `description`, `reference_id`.

### Debugger Node
Logs the current flow state and variables to the Sapliy CLI for real-time monitoring.
