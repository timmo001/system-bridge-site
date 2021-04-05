{% authentication_all %}

## DELETE

Stops any active media players.

#### Request

`DELETE /video`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

## POST

Plays a video file from a path or URL in a player.

### Example: Play Path

Plays a file that is stored locally on the device.

#### Request

`POST /video`

```json
{
    "path": "I:\\Videos\\My Amazing Video.mp4",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "path": "I:\\Videos\\My Amazing Video.mp4",
    "volume": 20,
    "type": "video",
    "url": "/video-7fd27c0b-ab95-4faa-9141-368d366b56d9"
}
```

### Example: Play a YouTube Video

Rick rolls the device. Plays as an embedded youtube video player.

#### Request

`POST /video`

```json
{
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "volume": 20
}
```

#### Response

`201 Created`

```json
{
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "volume": 20
}
```

## PUT

Control player playback.

### Pause

Pauses the active player.

#### Request

`PUT /video/pause`

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

`PUT /video/play`

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

`PUT /video/playpause`

#### Response

`200 OK`

```json
{
    "successful": true
}
```

### Stop

Stops and closes the active player. Same as `DELETE /video`.

#### Request

`PUT /video/stop`

#### Response

`200 OK`

```json
{
    "successful": true
}
```
