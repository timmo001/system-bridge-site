import {
  mdiApplicationCog,
  mdiBatteryCharging,
  mdiBell,
  mdiBluetoothConnect,
  mdiCogs,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiDesktopTowerMonitor,
  mdiExpansionCard,
  mdiFileDocument,
  mdiHarddisk,
  mdiKeyboard,
  mdiMemory,
  mdiMonitor,
  mdiNetworkOutline,
  mdiSpeakerMultiple,
  mdiUsb,
} from "@mdi/js";

import { GenericObject } from "components/Types";
import mdAudio from "assets/data/api/services/audio.md";
import mdBattery from "assets/data/api/services/battery.md";
import mdBluetooth from "assets/data/api/services/bluetooth.md";
import mdCommand from "assets/data/api/services/command.md";
import mdCpu from "assets/data/api/services/cpu.md";
import mdDisplay from "assets/data/api/services/display.md";
import mdFilesystem from "assets/data/api/services/filesystem.md";
import mdGraphics from "assets/data/api/services/graphics.md";
import mdKeyboard from "assets/data/api/services/keyboard.md";
import mdMemory from "assets/data/api/services/memory.md";
import mdNetwork from "assets/data/api/services/network.md";
import mdNotification from "assets/data/api/services/notification.md";
import mdOpen from "assets/data/api/services/open.md";
import mdOs from "assets/data/api/services/os.md";
import mdProcesses from "assets/data/api/services/processes.md";
import mdSystem from "assets/data/api/services/system.md";
import mdUsb from "assets/data/api/services/usb.md";

export interface APIServiceDescription {
  title: string;
  icon: string;
  description: string;
  docs: string;
}

export const apiServices: GenericObject<APIServiceDescription> = {
  audio: {
    title: "Audio",
    icon: mdiSpeakerMultiple,
    description: "Change volume, and get information.",
    docs: mdAudio,
  },
  battery: {
    title: "Battery",
    icon: mdiBatteryCharging,
    description: "Battery level, capacity and configuration.",
    docs: mdBattery,
  },
  bluetooth: {
    title: "Bluetooth",
    icon: mdiBluetoothConnect,
    description: "Bluetooth configuration and devices.",
    docs: mdBluetooth,
  },
  command: {
    title: "Command",
    icon: mdiCogs,
    description: "Run a command.",
    docs: mdCommand,
  },
  cpu: {
    title: "CPU",
    icon: mdiCpu64Bit,
    description: "CPU usage, clock speed, and configuration.",
    docs: mdCpu,
  },
  display: {
    title: "Display",
    icon: mdiMonitor,
    description: "Display information.",
    docs: mdDisplay,
  },
  filesystem: {
    title: "Filesystem",
    icon: mdiHarddisk,
    description: "Filesystems and Disk information.",
    docs: mdFilesystem,
  },
  graphics: {
    title: "Graphics",
    icon: mdiExpansionCard,
    description: "Graphics card usage and configuration.",
    docs: mdGraphics,
  },
  keyboard: {
    title: "Keyboard",
    icon: mdiKeyboard,
    description: "Sends keyboard key presses.",
    docs: mdKeyboard,
  },
  memory: {
    title: "Memory",
    icon: mdiMemory,
    description: "Memory usage and configuration.",
    docs: mdMemory,
  },
  network: {
    title: "Network",
    icon: mdiNetworkOutline,
    description: "Networking information.",
    docs: mdNetwork,
  },
  notification: {
    title: "Notification",
    icon: mdiBell,
    description: "Create a system notification.",
    docs: mdNotification,
  },
  open: {
    title: "Open",
    icon: mdiFileDocument,
    description: "Open a URL or file using the default application.",
    docs: mdOpen,
  },
  os: {
    title: "Operating System",
    icon: mdiDesktopTowerMonitor,
    description: "Get OS information.",
    docs: mdOs,
  },
  processes: {
    title: "Processes",
    icon: mdiApplicationCog,
    description: "Show process information.",
    docs: mdProcesses,
  },
  system: {
    title: "System",
    icon: mdiDesktopTower,
    description: "Get system information.",
    docs: mdSystem,
  },
  usb: {
    title: "USB",
    icon: mdiUsb,
    description: "Get USB information.",
    docs: mdUsb,
  },
};
