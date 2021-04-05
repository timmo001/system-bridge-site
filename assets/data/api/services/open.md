## POST

Opens a file or URL.

### Example: Open a Picture

Opens a picture in the default application for a PNG.

#### Request

`POST /open`

```json
{
    "path": "I:\\Pictures\\Untitled2.png"
}
```

#### Response

`201 Created`

```json
{
    "path": "I:\\Pictures\\Untitled2.png"
}
```
### Example: Open a URL

Opens a URL in the default browser.

#### Request

`POST /open`

```json
{
    "path": "https://timmo.dev"
}
```

#### Response

`201 Created`

```json
{
    "path": "https://timmo.dev"
}
```

### Example: Launch a Steam game

Opens a Steam game using it's link.

#### Request

`POST /open`

```json
{
    "path": "steam://rungameid/1151640"
}
```

#### Response

`201 Created`

```json
{
    "path": "steam://rungameid/1151640"
}
```
