import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom-bootstrap.scss";

export function StatusBar() {
  return (
    <div className="status-bar d-flex justify-content-between align-items-center p-2">
      <span className="time">8:00</span>
      <div className="status-icons d-flex align-items-center">
        <Image
          src="/icons/Cellular Connection.png"
          width={16}
          height={16}
          alt="Signal Icon"
          className="me-2"
        />
        <Image
          src="/icons/Wifi.png"
          width={16}
          height={16}
          alt="WiFi Icon"
          className="me-2"
        />
        <Image
          src="/icons/Capacity.png"
          width={16}
          height={16}
          alt="Battery Icon"
        />
      </div>
    </div>
  );
}
