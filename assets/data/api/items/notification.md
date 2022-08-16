_Send notifications to the desktop._

## Request

```http
POST /api/notification
```

```json
{
    "title": "Title",
    "message": "Message",
    "icon": "icon.png"
}
```

## Response

```json
{
    "message": "Notification sent"
}
```
