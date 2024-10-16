import { useState } from "react";
import { emitter } from "../utils/events";
import { ToastEvent } from "../components/toast";
/**
 * useToast Hook
 * @param {Object} initialState - The initial state for the hook.
 * @returns {[state, setState]} - The current state and a function to update the state.
 */
const useToast = () => {
  const [toasts, setToasts] = useState<ToastEvent[]>([]);

  const handleAddToast = (toast: ToastEvent) => {
    setToasts((prev) => [...prev, toast]);
  };

  const subscribe = () => emitter.on("toast.add", handleAddToast);
  const unsubscribe = () => emitter.off("toast.add", handleAddToast);

  const toast = (props: ToastEvent) => {
    emitter.emit("toast.add", props);
  };

  return {
    toasts,
    toast,
    subscribe,
    unsubscribe,
  };
};

export default useToast;
