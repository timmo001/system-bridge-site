## Application

To run the application for the first time, use the following command:

```bash
python -m systembridgebackend
```

After the first run, you can exit the application via the system tray icon.

You should now find a shortcut in your start menu / applications called `System Bridge`.

### Autostart

To enable autostart, open settings via the system tray icon, enable autostart and click the save icon. The application will now be added to startup.

### No GUI

If you want to run the application without a GUI, you can use the following command:

```bash
python -m systembridgebackend --no-gui
```

## CLI

To run the CLI, you can use the following command:

```bash
python -m systembridgecli --help
```

This command will show you all available commands. For more details, read the [CLI](https://system-bridge.timmo.dev/docs/cli) page.

### API Key

To get the `api-key` for use in the API/WebSocket, you can use the following command:

```bash
python -m systembridgecli api-key
```

To reset your `api-key`, run this command:

```bash
python -m systembridgecli api-key --reset
```
