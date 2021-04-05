## POST

Runs a command.

### Example: Open Spotify

#### Request

`POST /command`

```json
{
    "command": "C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe",
    "arguments": []
}
```

#### Response

`201 Created`

```json
{
    "command": "C:\\Users\\username\\AppData\\Roaming\\Spotify\\Spotify.exe",
    "arguments": []
}
```

### Example: Open File in VS Code

#### Request

`POST /command`

```json
{
    "command": "code",
    "arguments": [
        "/home/username/file.txt"
    ]
}
```

#### Response

`201 Created`

```json
{
    "command": "code",
    "arguments": [
        "/home/username/file.txt"
    ]
}
```
