## DELETE

Stops any active media players.

### Example

#### Request

`DELETE /audio`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

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

## POST

Plays an audio file from a path or URL in a player.

### Example: Play Path

Plays a track that is stored locally on the device.

#### Request

`POST /audio`

```json
{
    "path": "I:\\Music\\My Amazing Track.flac",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "path": "I:\\Music\\My Amazing Track.flac",
    "volume": 20,
    "type": "audio",
    "url": "/audio-7fd27c0b-ab95-4faa-9141-368d366b56d9"
}
```

### Example: Play SFX from URL

This plays a sound effect from a URL, but hides the player. This is ideal for
playing a notification sound to the device.

#### Request

`POST /audio`

```json
{
    "url": "https://example.com/sfx/doorbell.mp3",
    "hidden": true,
    "volume": 30
}
```

#### Response

`201 Created`

```json
{
    "url": "/audio-2a388eaf-2f6a-4bd9-911e-88b76a4cfe38",
    "hidden": true,
    "volume": 30,
    "path": "/tmp/audio-2a388eaf-2f6a-4bd9-911e-88b76a4cfe38",
    "type": "audio"
}
```

## PUT

Control player playback and system volume.

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
