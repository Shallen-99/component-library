import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        borderRadius: 8,
        maxWidth: 300
      }}
    >
      <img
        src={user.avatarUrl || "https://via.placeholder.com/80"}
        alt={user.name}
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />

      <h3>{user.name}</h3>

      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}

      {children && <div style={{ marginTop: 10 }}>{children}</div>}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          style={{ marginTop: 12 }}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
