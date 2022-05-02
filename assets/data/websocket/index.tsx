import { mdiDatabaseSearch, mdiDataMatrix, mdiPen } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdDataGet from "assets/data/websocket/items/data-get.md";
import mdDataReceive from "assets/data/websocket/items/data-receive.md";
import mdDataRegisterListener from "assets/data/websocket/items/data-register-listener.md";

export interface WebsocketDescription {
  title: string;
  icon: string;
  docs: string;
}

export const websocketItems: GenericObject<WebsocketDescription> = {
  registerListener: {
    title: "Registering as a Listener",
    icon: mdiPen,
    docs: mdDataRegisterListener,
  },
  getData: {
    title: "Requesting Data",
    icon: mdiDatabaseSearch,
    docs: mdDataGet,
  },
  receivingData: {
    title: "Receiving Data",
    icon: mdiDataMatrix,
    docs: mdDataReceive,
  },
};
