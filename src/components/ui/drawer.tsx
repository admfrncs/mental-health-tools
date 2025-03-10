import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "@mui/material";
import { cn } from "@/lib/utils";

// Drawer Component (Radix Dialog acting as a side drawer)
const Drawer = ({ ...props }: React.ComponentProps<typeof Dialog>) => (
  <Dialog {...props}>
    <DialogTrigger asChild>
      <Button>Open Drawer</Button>
    </DialogTrigger>

    <DrawerOverlay />
    <DrawerContent>
      <DrawerTitle>Your Title</DrawerTitle>
      <DrawerDescription>Content goes here.</DrawerDescription>
      <DialogClose asChild>
        <Button>Close</Button>
      </DialogClose>
    </DrawerContent>
  </Dialog>
);
Drawer.displayName = "Drawer";

// Drawer Overlay (optional, for a darker background)
const DrawerOverlay = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => (
  <div className={cn("fixed inset-0 z-50 bg-black/50", className)} {...props} />
);

// Drawer Content (side drawer effect)
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ className, children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    {...props}
    className={cn(
      "fixed right-0 top-0 z-50 h-full w-[350px] overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0",
      className
    )}
  >
    <div className="p-4">{children}</div>
  </DialogContent>
));
DrawerContent.displayName = "DrawerContent";

// Drawer Footer
const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

// Drawer Title
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogTitle>,
  React.ComponentPropsWithoutRef<typeof DialogTitle>
>(({ className, ...props }, ref) => (
  <DialogTitle ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
DrawerTitle.displayName = "DrawerTitle";

// Drawer Description
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, ...props }, ref) => (
  <DialogDescription ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = "DrawerDescription";

// Default export for Drawer component
export default Drawer;

// Named exports for individual drawer components
export {
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
