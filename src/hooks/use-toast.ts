import { useReducer, useCallback } from "react";
import { v4 as genId } from "uuid"; // Importing the genId function from uuid

export type Toast = {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export type ToasterToast = Omit<Toast, "id">;

type ToastAction =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "REMOVE_TOAST"; id: string }
  | { type: "UPDATE_TOAST"; id: string; toast: Partial<Toast> };

const toastReducer = (state: Toast[], action: ToastAction): Toast[] => {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, { ...action.toast, id: genId() }];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.id);
    case "UPDATE_TOAST":
      return state.map((toast) =>
        toast.id === action.id ? { ...toast, ...action.toast } : toast
      );
    default:
      return state;
  }
};

export const useToast = () => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const addToast = useCallback((toast: ToasterToast) => {
    dispatch({ type: "ADD_TOAST", toast });
  }, []);

  const removeToast = useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", id });
  }, []);

  const updateToast = useCallback((id: string, toast: Partial<Toast>) => {
    dispatch({ type: "UPDATE_TOAST", id, toast });
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    updateToast,
  };
};
