import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom-bootstrap.scss";

interface DeliveryCardProps {
  deliveryNumber: string;
  status: string;
  adText: string;
}

export function DeliveryCard({
  deliveryNumber,
  status,
  adText,
}: DeliveryCardProps) {
  //Style the card and dynamically assigns a class to the status badge based on the status prop.
  const statusClass =
    status === "Pending" ? "status-badge" : "badge bg-success";

  return (
    <div className="delivery-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className="delivery-number">Delivery# {deliveryNumber}</div>
        <div className={`${statusClass} rounded-pill`}>{status}</div>
      </div>
      <div className="ad-space d-flex justify-content-center align-items-center">
        {adText}
      </div>
    </div>
  );
}
