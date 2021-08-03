## Receiving Data

First connect to your MQTT broker.

> You can setup MQTT in the Application settings.

Listen to the topic you want to receive data from. The topic
is structured as so:

```text
systembridge/DEVICEUUID/data/ENDPOINT
```

For example:

```text
systembridge/DEVICEUUID/data/information
```

The data will the the same structure as the API endpoint response.
