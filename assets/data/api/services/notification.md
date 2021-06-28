## POST

Sends a notification.

### Example

#### Request

`POST /notification`

```json
{
    "title": "Test",
    "message": "This is a message",
    "icon": "I:\\Pictures\\someicon.png"
}
```

#### Response

`201 Created`

```json
{
    "status": true
}
```
