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
import mdBattery from "assets/data/modules/items/battery.md";
import mdBridge from "assets/data/modules/items/bridge.md";
import mdCPU from "assets/data/modules/items/cpu.md";
import mdDisk from "assets/data/modules/items/disk.md";
import mdDisplay from "assets/data/modules/items/display.md";
import mdGPU from "assets/data/modules/items/gpu.md";
import mdMemory from "assets/data/modules/items/memory.md";
import mdNetwork from "assets/data/modules/items/network.md";
import mdSensor from "assets/data/modules/items/sensor.md";
import mdSystem from "assets/data/modules/items/system.md";

export interface ModuleDescription {
  title: string;
  icon: string;
  docs: string;
}

export const moduleItems: GenericObject<ModuleDescription> = {
  battery: {
    title: "Battery",
    icon: mdiBatteryCharging,
    docs: mdBattery,
  },
  bridge: {
    title: "Bridges",
    icon: mdiBatteryCharging,
    docs: mdBridge,
  },
  cpu: {
    title: "CPU",
    icon: mdiCpu64Bit,
    docs: mdCPU,
  },
  disk: {
    title: "Disks",
    icon: mdiHarddisk,
    docs: mdDisk,
  },
  display: {
    title: "Display",
    icon: mdiMonitor,
    docs: mdDisplay,
  },
  gpu: {
    title: "GPU",
    icon: mdiExpansionCard,
    docs: mdGPU,
  },
  memory: {
    title: "Memory",
    icon: mdiMemory,
    docs: mdMemory,
  },
  network: {
    title: "Network",
    icon: mdiNetworkOutline,
    docs: mdNetwork,
  },
  sensor: {
    title: "Sensors",
    icon: mdiDesktopTower,
    docs: mdSensor,
  },
  system: {
    title: "System",
    icon: mdiDesktopTower,
    docs: mdSystem,
  },
};
