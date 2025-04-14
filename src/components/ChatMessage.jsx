import React from "react";

export default function ChatMessage({ text, logo, email, user }) {
  return (
    <div className={`d-flex ${email === user.email && "justify-content-end"}`}>
      {user.email === email ? (
        <span className="message-right">
          <span className="message-text">{text}</span>
          <img src={logo} alt="logo" className="logo-icon" />
        </span>
      ) : (
        <span className="message-left">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="message-text">{text}</span>
        </span>
      )}
    </div>
  );
}
