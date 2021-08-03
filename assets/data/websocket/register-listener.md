## Registering as an event listener

To get data from the server, you need to register as an event
listener. To do this send this message as a websocket message:

```json
{
    "event": "register-listener",
    "data": {
        "api-key": "APIKEY"
    }
}
```

After this, the server will respond with this message:

```json
{
    "event": "registered-listener",
    "data": true
}
```
