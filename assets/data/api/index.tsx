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
  mdiFilmstrip,
  mdiHarddisk,
  mdiMemory,
  mdiMonitor,
  mdiNetworkOutline,
  mdiSpeakerMultiple,
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
import mdMedia from "assets/data/api/services/media.md";
import mdMemory from "assets/data/api/services/memory.md";
import mdNetwork from "assets/data/api/services/network.md";
import mdNotification from "assets/data/api/services/notification.md";
import mdOpen from "assets/data/api/services/open.md";
import mdOs from "assets/data/api/services/os.md";
import mdProcesses from "assets/data/api/services/processes.md";
import mdSystem from "assets/data/api/services/system.md";

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
    description: "Play audio, change volume, and get information.",
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
    description: "Bluetooth configuratoin and devices.",
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
    description: "Display information and brightness control.",
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
  media: {
    title: "Media",
    icon: mdiFilmstrip,
    description: "Play media files and control playback.",
    docs: mdMedia,
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
    description: "Show proccess information.",
    docs: mdProcesses,
  },
  system: {
    title: "System",
    icon: mdiDesktopTower,
    description: "Get system informaiton.",
    docs: mdSystem,
  },
};
