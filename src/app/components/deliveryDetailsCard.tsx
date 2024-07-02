import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom-bootstrap.scss";

interface DeliveryDetailsCardProps {
  deliveryTime: string;
  deliveryFrom: string;
  location: string;
  address: string;
  pickUpCode: string;
  compartment: string;
  logoSrc: string;
}

export function DeliveryDetailsCard({
  deliveryTime,
  deliveryFrom,
  location,
  address,
  pickUpCode,
  compartment,
  logoSrc,
}: DeliveryDetailsCardProps) {
  return (
    <div className="delivery-card p-3 mb-4">
      <div className="card-title">Delivery Details</div>
      <p className="card-text">Delivery time: {deliveryTime}</p>
      <div className="d-flex align-items-center mb-3 gap-3">
        <Image
          src={logoSrc}
          width={50}
          height={50}
          alt="Delivery Logo"
          className="delivery-logo"
        />
        <div className="d-flex flex-column">
          <div className="delivery-form">{deliveryFrom}</div>
          <div className="delivery-place">{location}</div>
          <div className="delivery-place">{address}</div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="delivery-pickup">Pick-up Code</div>
          <div className="d-flex align-items-center gap-3">
            <div className="delivery-pickupCode">{pickUpCode}</div>
            <Image
              src="/icons/Copy.png"
              width={24}
              height={24}
              alt="Copy Icon"
              className="card-icon"
            />
          </div>
        </div>
        <div>
          <div className="delivery-pickup">Compartment</div>
          <div className="delivery-pickupCode">{compartment}</div>
        </div>
      </div>
    </div>
  );
}
