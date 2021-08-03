import { mdiDatabaseSearch, mdiDataMatrix, mdiPen } from "@mdi/js";

import { GenericObject } from "components/Types";
import mdGetData from "assets/data/websocket/get-data.md";
import mdReceivingData from "assets/data/websocket/receiving-data.md";
import mdRegisterListener from "assets/data/websocket/register-listener.md";

export interface WebsocketDescription {
  title: string;
  icon: string;
  docs: string;
}

export const websocketData: GenericObject<WebsocketDescription> = {
  registerListener: {
    title: "Registering as a Listener",
    icon: mdiPen,
    docs: mdRegisterListener,
  },
  getData: {
    title: "Requesting Data",
    icon: mdiDatabaseSearch,
    docs: mdGetData,
  },
  receivingData: {
    title: "Receiving Data",
    icon: mdiDataMatrix,
    docs: mdReceivingData,
  },
};
