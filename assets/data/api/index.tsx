import { mdiDatabase, mdiDataMatrix, mdiKeyboardVariant } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdData from "assets/data/api/items/data.md";
import mdDataKey from "assets/data/api/items/data-key.md";
import mdKeyboard from "assets/data/api/items/keyboard.md";

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
};
