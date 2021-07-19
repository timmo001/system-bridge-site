## GET

Gets audio and device information.

### Example

#### Request

`GET /audio`

#### Response

`200 OK`

```json
{
    "current": {
        "muted": false,
        "volume": 100
    },
    "devices": [
        {
            "id": "HDAUDIO\\FUNC_01",
            "name": "Realtek High Definition Audio",
            "manufacturer": "Realtek",
            "revision": null,
            "driver": null,
            "default": null,
            "channel": null,
            "type": "",
            "in": null,
            "out": null,
            "status": "3"
        }
    ]
}
```

## PUT

Control system audio.

### Mute

Mutes your system audio.

#### Request

`PUT /audio/mute`

```json
{
    "value": true
}
```

#### Response

`200 OK`

```json
{
    "current": {
        "muted": true,
        "volume": 100
    },
    "devices": [
        ...
    ]
}
```

### Volume

Sets the system volume to a percentage. Applicable range for value: `0-100`.

#### Request

`PUT /audio/volume`

```json
{
    "value": 60
}
```

#### Response

`200 OK`

```json
{
    "current": {
        "muted": false,
        "volume": 60
    },
    "devices": [
        ...
    ]
}
```

### Volume Down

Lowers the system volume by a percentage. Applicable range for value: `0-100`.

#### Request

`PUT /audio/volumedown`

```json
{
    "value": 10
}
```

#### Response

`200 OK`

```json
{
    "current": {
        "muted": false,
        "volume": 40
    },
    "devices": [
        ...
    ]
}
```

### Volume Up

Raises the system volume by a percentage. Applicable range for value: `0-100`.

#### Request

`PUT /audio/volumeup`

```json
{
    "value": 10
}
```

#### Response

`200 OK`

```json
{
    "current": {
        "muted": false,
        "volume": 50
    },
    "devices": [
        ...
    ]
}
```
