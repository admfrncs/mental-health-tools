import * as React from "react";
import { cn } from "src/lib/utils";

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
};

// Define the ToastActionElement type
export type ToastActionElement = React.ReactNode;

export const Toast = ({
  message,
  type = "info",
  children,
}: ToastProps & { children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 p-4 rounded shadow-lg text-white",
        {
          "bg-green-500": type === "success",
          "bg-red-500": type === "error",
          "bg-blue-500": type === "info",
        }
      )}
    >
      {children || message}
    </div>
  );
};

// Define other components (ToastClose, ToastTitle, etc.)

export const ToastClose = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className="absolute top-2 right-2 text-white">
    X
  </button>
);

export const ToastTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-bold text-lg">{children}</h4>
);

export const ToastDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm">{children}</p>
);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => (
  <div className="toast-provider">{children}</div>
);

export const ToastViewport = () => (
  <div className="toast-viewport"></div>
);
