## Requesting Data

To request on demand data from the server, first
[register as a listener](/docs/websocket?id=registerListener),
then send a message with an array of each endpoint you want to
receive data from.

```json
{
    "event": "events",
    "data": {
        "api-key": "APIKEY",
        "data": {
            "name": "get-data",
            "data": [
                "audio",
                "battery",
                "bluetooth",
                "cpu",
                "display",
                "filesystem",
                "graphics",
                "information",
                "memory",
                "network",
                "os",
                "processes",
                "system",
                "usb"
            ]
        }
    }
}
```

The server will then respond with this message to confirm:

```json
{
    "event": "events",
    "data": {
        "name": "getting-data"
    }
}
```

The server will then query each individual endpoint for data
then send the responses via via the WebSocket. These messages
will contain the same message as the observer's data.
