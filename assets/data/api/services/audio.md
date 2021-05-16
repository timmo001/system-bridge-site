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

### Pause

Pauses the active player.

#### Request

`PUT /audio/pause`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

### Play

Plays the active player.

#### Request

`PUT /audio/play`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

### Play/Pause

Toggles the play state the active player.

#### Request

`PUT /audio/playpause`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

### Stop

Stops and closes the active player. Same as `DELETE /audio`.

#### Request

`PUT /audio/stop`

#### Response

`200 OK`

```json
{
    "successful": true
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

`PUT /audio/volume`

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

`PUT /audio/volume`

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
