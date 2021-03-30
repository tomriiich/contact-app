import React from "react";
import Contact from "./Contact.css";

const name = "Tom";
const avatar =
  "https://avatars.githubusercontent.com/u/74631449?s=400&u=2f28d974bc0ebc125f7da41555a34aa92c3fe328&v=4";
const online = true;

function ContactContent() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar-img" />
      <p>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <div className="status-text">{online ? "online" : "offline"}</div>
        </div>
      </p>
    </div>
  );
}

export default ContactContent;