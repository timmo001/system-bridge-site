import {
  mdiApplicationCog,
  mdiBatteryCharging,
  mdiBluetoothConnect,
  mdiCogs,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiDesktopTowerMonitor,
  mdiExpansionCard,
  mdiFileDocument,
  mdiInformationOutline,
  mdiMemory,
  mdiNetwork,
  mdiSpeakerMultiple,
} from "@mdi/js";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const userFeatures: Array<Feature> = [
  {
    title: "System Information",
    description:
      "Access your system's Audio, Battery, Bluetooth, CPU, Filesystems, Graphics, Memory, Networking, OS, and Process information via the API.",
    icon: mdiInformationOutline,
  },
  {
    title: "Send Commands",
    description:
      "Automate your system by sending a command or opening a URL or path via the API.",
    icon: mdiCogs,
  },
  {
    title: "Cross-Platform",
    description: "Compatible with Windows, Mac and Linux.",
    icon: mdiDesktopTowerMonitor,
  },
];

export const apiFeatures: Array<Feature> = [
  {
    title: "Audio",
    description: "Audio devices and configuration.",
    icon: mdiSpeakerMultiple,
  },
  {
    title: "Battery",
    description: "Battery level, capacity and configuration.",
    icon: mdiBatteryCharging,
  },
  {
    title: "Bluetooth",
    description: "BLuetooth configuratoin and devices.",
    icon: mdiBluetoothConnect,
  },
  {
    title: "Command",
    description: "Run a command.",
    icon: mdiCogs,
  },
  {
    title: "CPU",
    description: "CPU usage, clock speed, and configuration.",
    icon: mdiCpu64Bit,
  },
  {
    title: "Filesystem",
    description: "Filesystems and Disk information.",
    icon: mdiHarddisk,
  },
  {
    title: "Graphics",
    description: "Graphics card usage and configuration.",
    icon: mdiExpansionCard,
  },
  {
    title: "Memory",
    description: "Memory usage and configuration.",
    icon: mdiMemory,
  },
  {
    title: "Network",
    description: "Networking information.",
    icon: mdiNetwork,
  },
  {
    title: "Open",
    description: "Open a URL or file using the default application.",
    icon: mdiFileDocument,
  },
  {
    title: "Processes",
    description: "Show proccess information.",
    icon: mdiApplicationCog,
  },
  {
    title: "System",
    description: "Get system informaiton.",
    icon: mdiDesktopTower,
  },
];
