import React from "react";
import type { AlertBoxProps } from "../../types/index";

const colors = {
  success: "#d4edda",
  error: "#f8d7da",
  warning: "#fff3cd",
  info: "#d1ecf1"
};

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "6px",
        backgroundColor: colors[type],
        position: "relative",
      }}
    >
      <strong>{type.toUpperCase()}:</strong> {message}

      {children && <div style={{ marginTop: 8 }}>{children}</div>}

      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};
