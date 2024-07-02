"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";
import { BlueButton } from "./blueButton";
import { FeatureCard } from "./featureCard";
import { DeliveryCard } from "./deliveryCard";
import { DeliveryDetailsCard } from "./deliveryDetailsCard";

const features = [
  {
    iconSrc: "/icons/Register.png",
    title: "Residential Unit Registration",
    description:
      "Register your unit with BlueBox to enable delivery by unit feature.",
  },
  {
    iconSrc: "/icons/Edit.png",
    title: "Create a support ticket",
    description: "Submit a support ticket form to us.",
  },
];

export function MainPage() {
  return (
    <div className="main-screen">
      <div className="main-container">
        <Image
          src="/icons/chevron-left.png"
          width={12}
          height={12}
          alt="chevron-left"
          className="chevron-left"
        />
        <DeliveryCard
          deliveryNumber="487303"
          status="Pending"
          adText="Ad Space"
        />
        <hr className="my-4" />
        <DeliveryDetailsCard
          deliveryTime="2023-10-17 17:05:54"
          deliveryFrom="Delivery from Fedex"
          location="Bluebits Office Metrotown"
          address="4289 Kingsway, Burnaby, BC, Canada, V6B0C8"
          pickUpCode="288-234-123"
          compartment="104"
          logoSrc={"/icons/Fedex.png"}
        />
        <BlueButton title={"Unlock Compartment"} />
        <Container>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}
