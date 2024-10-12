import { useState } from "react";
import mitt from "mitt";
/**
 * useToast Hook
 * @param {Object} initialState - The initial state for the hook.
 * @returns {[state, setState]} - The current state and a function to update the state.
 */
const useToast = () => {
  const emitToast = mitt;

  const toast = () => {};
  const success = () => {};
  const message = () => {};
  const info = () => {};
  const warning = () => {};
  const error = () => {};
  return {
    toast,
    success,
    message,
    info,
    warning,
    error,
  };
};

export default useToast;
