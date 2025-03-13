import * as React from "react";
import { cn } from "src/lib/utils";

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
};

export const Toast = ({ message, type = "info" }: ToastProps) => {
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
      {message}
    </div>
  );
};
