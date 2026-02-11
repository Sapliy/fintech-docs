# Core Features

Sapliy provides a robust set of features designed for building scalable, secure fintech applications.

## 1. Zone Management (Test / Live)

Every project starts with a **Zone**. Zones are isolated environments that contain their own:
- **Events**
- **Flows**
- **Logs**
- **API Keys**

### Test Mode vs Live Mode
- **Test Mode**: verification and development. Keys start with `sk_test_`. No real money should move here.
- **Live Mode**: Production. Keys start with `sk_live_`.

## 2. SDK Integration & Event Handling

Sapliy is **SDK-first**. You integrate it directly into your backend code.

### Emitting Events
Instead of hardcoding logic, emit events:

```javascript
import { Sapliy } from '@sapliyio/fintech';
const sapliy = new Sapliy('sk_test_...');

// Something happened!
await sapliy.emit('user.registered', { 
  userId: 'u_123',
  plan: 'pro' 
});
```

### Listening for Events
Your flows listen for these events. But you can also listen programmatically using the SDK or CLI for debugging:

```bash
# Listen to all events in the zone
sapliy listen --zone=test
```

## 3. Automation Flows

The **Flow Builder** is where logic lives.
- **Trigger**: The event name (e.g., `user.registered`).
- **Nodes**:
    - **Logic**: If/Else, Switch.
    - **Action**: HTTP Request, Email, Slack.
    - **Approval**: Pause for human intervention.
    - **Code**: Run custom JS/Python (sandboxed).

## 4. Policy Based Access Control (PBAC)

Security is paramount. Sapliy uses a policy engine to determine **who** can do **what**.
- **Role-Based**: Admins, Developers, Viewers.
- **Attribute-Based**: "User X can only refund transactions < $50".
- **Granular Scopes**: API keys are scoped (e.g., `events:emit` only).

## 5. Admin Dashboard & CRUD

The Sapliy Dashboard gives Administrators full control:
- **User Management**: Invite team members, revoke access.
- **Node Management**: Configure standard nodes available in the Flow Builder.
- **Audit Logs**: View a timeline of every action taken in the Organization.

## 6. CLI & Developer Experience

The `sapliy` CLI is your best friend.
- **Login**: `sapliy login` connects your terminal to your account.
- **Forward**: `sapliy listen --forward-to localhost:3000/webhook` sends cloud events to your local machine.
- **Trigger**: Manually trigger flows for testing.
