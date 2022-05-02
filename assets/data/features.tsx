import {
  mdiAndroid,
  mdiBell,
  mdiCogs,
  mdiDesktopTowerMonitor,
  mdiHomeAssistant,
  mdiInformationOutline,
} from "@mdi/js";
import { apiServices } from "./api";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const userFeatures: Array<Feature> = [
  {
    title: "System Information",
    description:
      "Access your system's information via the data modules using the API/WebSocket.",
    icon: mdiInformationOutline,
  },
  {
    title: "Open files and URLs",
    description:
      "Automate your system by opening a URL/path via the API/WebSocket.",
    icon: mdiCogs,
  },
  {
    title: "Send Notifications",
    description: "Send system notifications via the API/WebSocket.",
    icon: mdiBell,
  },
  {
    title: "Cross-Platform",
    description: "Compatible with Windows and Linux.",
    icon: mdiDesktopTowerMonitor,
  },
  {
    title: "Integrated with Home Assistant",
    description:
      "Interact with your Bridges using [Home Assistant](https://www.home-assistant.io/integrations/system_bridge).",
    icon: mdiHomeAssistant,
  },
  {
    title: "Android Companion App",
    description:
      "You can find the Android companion app on the [Play Store](https://play.google.com/store/apps/details?id=dev.timmo.systembridge). The source for this app can be found on [GitHub](https://github.com/timmo001/system-bridge-android-companion).",
    icon: mdiAndroid,
  },
];

export const apiFeatures: Array<Feature> = Object.values(apiServices);
export const apiFeaturesKeys: Array<string> = Object.keys(apiServices);
