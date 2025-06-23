// components/AlertMessage.tsx
import { Alert } from "flowbite-react";
import { Check, Info, TriangleAlert } from "lucide-react";

type AlertType = "success" | "error" | "info";

interface AlertMessageProps {
  type?: AlertType;
  message: string;
  onClose?: () => void;
}

export function AlertMessage({
  type = "info",
  message,
  onClose,
}: AlertMessageProps) {
  const icons = {
    success: <Check className="h-5 w-5" />,
    error: <TriangleAlert className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
  };

  const alertColor = {
    success: "success",
    error: "failure",
    info: "info",
  }[type];

  return (
    <div className="fixed top-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 transform">
      <Alert color={alertColor} icon={() => icons[type]} onDismiss={onClose}>
        <span className="font-medium">{message}</span>
      </Alert>
    </div>
  );
}
