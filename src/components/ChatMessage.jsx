import React from "react";

export default function ChatMessage({ text, logo, email, user }) {
  return (
    <div className={`d-flex ${email === user.email && "justify-content-end"}`}>
      {user.email === email ? (
        <>
        <span className="message-name">{name}</span>
        <span className="message-right">
          <span className="message-text">{text}</span>

        </span>
        </>
      ) : (
        <span className="message-left">

          <span className="message-text">{text}</span>
        </span>
      )}
    </div>
  );
}
