import mitt from "mitt";
import type { ToastEvent } from "../components/toast";
/*========================================================================================================================*/

type Events = {
  "toast.add": ToastEvent;
};

export const emitter = mitt<Events>();
