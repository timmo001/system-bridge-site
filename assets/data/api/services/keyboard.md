## POST

Sends keyboard key presses.

[Supported Keys](http://robotjs.io/docs/syntax#keys)

### Example: Press "a"

Presses the "a" key.

#### Request

`POST /keyboard`

```json
{
    "key": "a"
}
```

#### Response

`201 Created`

```json
{
    "key": "a"
}
```

### Example: Pause audio player

Pauses the current audio/video player. This is a good alternative for pausing
other media players that aren't the internal one. EG. Spotify, Twitch, YouTube
etc.

#### Request

`POST /keyboard`

```json
{
    "key": "audio_pause"
}
```

#### Response

`201 Created`

```json
{
    "key": "audio_pause"
}
```

### Example: Open a new window using keyboard modifiers

Opens a new private window, if your current window is a browser. This is an example of using modifiers see [here](http://robotjs.io/docs/syntax#keytapkey-modifier) for more info on what modifiers are available.

#### Request

`POST /keyboard`

```json
{
    "key": "n",
    "modifiers": ["control", "shift"]
}
```

#### Response

`201 Created`

```json
{
    "key": "n",
    "modifiers": [
        "control",
        "shift"
    ]
}
```
