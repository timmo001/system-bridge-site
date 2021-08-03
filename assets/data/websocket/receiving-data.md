## Receiving Data

Once
[registered](https://system-bridge.timmo.dev/docs/websocket?id=registerListener),
the server will send messages when data changes. Data can come
from either the observer or by requesting it from the server.

> The frequncy the observer checks for updates can be configured
> in the application's settings.

Here is an example of one of the messages sent by the server:

```json
{
    "event": "events",
    "data": {
        "name": "data-information",
        "data": {
            "address": "http://bridge-hostname:9170",
            "apiPort": 9170,
            "fqdn": "bridge-hostname",
            "host": "bridge-hostname",
            "ip": "192.168.1.100",
            "mac": "aa:bb:cc:dd:ee:ff",
            "updates": {
                "available": false,
                "newer": false,
                "url": "https://github.com/timmo001/system-bridge/releases/tag/v2.4.0",
                "version": {
                    "current": "2.4.0",
                    "new": "2.4.0"
                }
            },
            "uuid": "e91bf575-56f3-4c83-8f42-70ac17adcd33",
            "version": "2.4.0",
            "websocketAddress": "ws://bridge-hostname:9172",
            "websocketPort": 9172
        }
    }
}
```

Each message will have a `name` property that is structured
as `data-endpoint` and a `data` property with the same payload
as the API endpoint.
