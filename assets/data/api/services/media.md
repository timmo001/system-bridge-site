## DELETE

Stops any active media players.

### Example

#### Request

`DELETE /media`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

## GET

Gets media player information.

### All

Get current status of the media player and source information. This will return nothing if nothing is loaded.

#### Request

`GET /media`

#### Response

`200 OK`

```json
{
    "muted": false,
    "playing": false,
    "source": {
        "type": "audio",
        "source": "/tmp/media-61c0eee6-d7ba-4f4b-9bfe-1510fc863d80",
        "album": "YouTube Audio Library",
        "artist": "An artist",
        "title": "Track title",
        "volumeInitial": 0.2
    },
    "volume": 0.2,
    "duration": 132.205714,
    "position": 3.842592
}
```

### Cover

This will return a base64 representation of the image.

#### Request

`GET /media/cover`

#### Response

`200 OK`

```
data...
```

### Source

Return the source of the current media.

#### Request

`GET /media`

#### Response

`200 OK`

```json
{
    "type": "audio",
    "source": "/tmp/media-61c0eee6-d7ba-4f4b-9bfe-1510fc863d80",
    "album": "YouTube Audio Library",
    "artist": "An artist",
    "title": "Track title",
    "volumeInitial": 0.2
}
```

## POST

Plays media from a path or URL in the media player.

### Example: Play Path

Plays a track that is stored locally on the device.

#### Request

`POST /media`

```json
{
    "type": "audio",
    "path": "I:\\Music\\My Amazing Track.flac",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "type": "audio",
    "path": "I:\\Music\\My Amazing Track.flac",
    "volume": 20,
    "url": "/media-7fd27c0b-ab95-4faa-9141-368d366b56d9"
}
```

### Example: Play SFX from URL

This plays a sound effect from a URL, but hides the player. This is ideal for
playing a notification sound to the device.

#### Request

`POST /media`

```json
{
    "type": "audio",
    "url": "https://example.com/sfx/doorbell.mp3",
    "hidden": true,
    "volume": 30
}
```

#### Response

`201 Created`

```json
{
    "type": "audio",
    "url": "/media-2a388eaf-2f6a-4bd9-911e-88b76a4cfe38",
    "hidden": true,
    "volume": 30,
    "path": "/tmp/media-2a388eaf-2f6a-4bd9-911e-88b76a4cfe38",
}
```

### Example: Play Path

Plays a file that is stored locally on the device.

#### Request

`POST /media`

```json
{
    "type": "video",
    "path": "I:\\Videos\\My Amazing Video.mp4",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "type": "video",
    "path": "I:\\Videos\\My Amazing Video.mp4",
    "volume": 20,
    "url": "/media-7fd27c0b-ab95-4faa-9141-368d366b56d9"
}
```

### Example: Play a YouTube Video

Rick rolls the device. Plays as an embedded youtube video player.

#### Request

`POST /media`

```json
{
    "type": "video",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "type": "video",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "volume": 20
}
```

## PUT

Control media player playback.

### Pause

Pauses the active player.

#### Request

`PUT /media/pause`

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

`PUT /media/play`

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

`PUT /media/playpause`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

### Stop

Stops and closes the active player. Same as `DELETE /media`.

#### Request

`PUT /media/stop`

#### Response

`200 OK`

```json
{
    "successful": true
}
```
