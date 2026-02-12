# Automation Nodes Reference

Sapliy's Flow Builder uses modular nodes to define automation logic. Every node belongs to one of four categories: **Triggers**, **Logic**, **Actions**, or **Utilities**.

## Triggers

### Event Trigger (`eventTrigger`)
Starts the flow when a specific system or external event occurs.
- **Configuration**:
  - `source`: The origin of the event (Internal, Stripe, PayPal, etc.)
  - `eventType`: The exact event string to match (e.g., `payment.succeeded`)
  - `isActive`: Boolean to enable/disable the trigger.
- **Data**: Exposes the `lastEvent` payload to downstream nodes.

### Date & Time (`dateTime`)
Executes flows based on a specific schedule or time of day.
- **Configuration**:
  - `time`: HH:mm format for execution.
  - `date`: Specific YYYY-MM-DD for one-time triggers.
  - `repeat`: Boolean for recurring execution.
  - `activeDays`: Array of numbers (0-6) for weekly schedules.
  - `isActive`: Enable or disable the schedule.
- **Insights**: Indicates `isDaytime` vs `Nighttime` and shows `Next Trigger` time.

## Logic Nodes

### Condition (`condition`)
Branch the flow using logical expressions.
- **Operators**: `==`, `!=`, `>=`, `<=`, `>`, `<`, `contains`, `regex`, `starts_with`.
- **Logic**: Routes to `outputTruePath` or `outputFalsePath`.

### Filter (`filter`)
Stops execution if the event data doesn't meet specific criteria.
- **Field**: `filterValue` vs `valueType` (text/number).

### Timeout (`timeout`)
Pauses execution for a specified duration.
- **Configuration**: `duration` (number of minutes/hours), `remainingTime` display.

### Approval (`approval`)
Requires human intervention before proceeding.
- **Configuration**:
  - `approverRole`: `admin`, `finance`, `manager`, or `any`.
  - `timeoutHours`: Time before the approval expires (defaults to `pending`).
  - `message`: Context shown to the approver.
- **Status**: Tracks `idle` → `pending` → `approved`/`rejected`.

### Rate Limit (`rateLimit`)
Prevents automation abuse or excessive API calls.
- **Configuration**:
  - `limit`: Max executions allowed.
  - `timeWindow`: Duration of the limit.
  - `timeUnit`: `second`, `minute`, `hour`, `day`.
  - `burstAllowance`: Overflow capacity.

## Action Nodes

### Webhook (`webhook`)
Sends an HTTP request to an external endpoint.
- **Configuration**:
  - `url`: Destination endpoint.
  - `method`: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
  - `headers`: Key-value pairs for authentication/metadata.
  - `body`: JSON payload (supports template interpolation).
- **Audit**: Stores `lastResponse` (status code and body).

### Notification (`notification`)
Sends alerts through first-party integrations.
- **Channels**: `whatsapp`, `email`, `slack`, `discord`, `sms`.
- **Field**: `recipient` and `template` identifier.

### Audit Log (`auditLog`)
Records an immutable entry in the Sapliy ledger.
- **Fields**:
  - `action`: Unique name for the audit point.
  - `severity`: `info`, `warning`, `error`, `critical`.
  - `description`: Human-readable summary (supports templates).
  - `metadata`: Key-value pairs indexed for search.

## Utilities

### AI Analysis (`ai-analysis`)
Analyzes event data using AI models to make contextual decisions.
- **Field**: `instruction` (prompt) and `result` (output).

### Debugger (`debugger`)
Logs flow state and variable values for real-time monitoring.
- **Configuration**: `logLevel` (info, warning, error), `autoScroll`.
- **View**: Real-time log stream within the node.
