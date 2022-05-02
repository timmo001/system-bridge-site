import {
  mdiBatteryCharging,
  mdiCpu64Bit,
  mdiDesktopTower,
  mdiExpansionCard,
  mdiHarddisk,
  mdiMemory,
  mdiMonitor,
  mdiNetworkOutline,
} from "@mdi/js";

import { GenericObject } from "components/Types";
import { mdPlaceholder } from "assets/data/modules/items/placeholder.md";

export interface ModuleDescription {
  title: string;
  icon: string;
  description: string;
  docs: string;
}

export const moduleItems: GenericObject<ModuleDescription> = {
  battery: {
    title: "Battery",
    icon: mdiBatteryCharging,
    description: "Battery level, capacity and configuration.",
    docs: mdPlaceholder,
  },
  bridge: {
    title: "Bridges",
    icon: mdiBatteryCharging,
    description: "Placeholder.",
    docs: mdPlaceholder,
  },
  cpu: {
    title: "CPU",
    icon: mdiCpu64Bit,
    description: "CPU usage, clock speed, and configuration.",
    docs: mdPlaceholder,
  },
  disk: {
    title: "Disks",
    icon: mdiHarddisk,
    description: "Disk information.",
    docs: mdPlaceholder,
  },
  display: {
    title: "Display",
    icon: mdiMonitor,
    description: "Display information.",
    docs: mdPlaceholder,
  },
  gpu: {
    title: "GPU",
    icon: mdiExpansionCard,
    description: "Graphics card usage and configuration.",
    docs: mdPlaceholder,
  },
  memory: {
    title: "Memory",
    icon: mdiMemory,
    description: "Memory usage and configuration.",
    docs: mdPlaceholder,
  },
  network: {
    title: "Network",
    icon: mdiNetworkOutline,
    description: "Networking information.",
    docs: mdPlaceholder,
  },
  sensor: {
    title: "Sensors",
    icon: mdiDesktopTower,
    description: "Get sensor data.",
    docs: mdPlaceholder,
  },
  system: {
    title: "System",
    icon: mdiDesktopTower,
    description: "Get system information.",
    docs: mdPlaceholder,
  },
};
