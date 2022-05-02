import {
  mdiDatabase,
  mdiDataMatrix,
  mdiFileStarOutline,
  mdiKeyboardVariant,
  mdiNotificationClearAll,
} from "@mdi/js";

import { GenericObject } from "components/Types";
import mdData from "assets/data/api/items/data.md";
import mdDataKey from "assets/data/api/items/data-key.md";
import mdKeyboard from "assets/data/api/items/keyboard.md";
import mdNotification from "assets/data/api/items/notification.md";
import mdOpen from "assets/data/api/items/open.md";

export interface APIDescription {
  title: string;
  icon: string;
  docs: string;
}

export const apiItems: GenericObject<APIDescription> = {
  data: {
    title: "Data",
    icon: mdiDatabase,
    docs: mdData,
  },
  dataByKey: {
    title: "Data by key",
    icon: mdiDataMatrix,
    docs: mdDataKey,
  },
  keyboard: {
    title: "Keyboard",
    icon: mdiKeyboardVariant,
    docs: mdKeyboard,
  },
  // TODO: media
  notification: {
    title: "Notification",
    icon: mdiNotificationClearAll,
    docs: mdNotification,
  },
  open: {
    title: "Open",
    icon: mdiFileStarOutline,
    docs: mdOpen,
  },
};
