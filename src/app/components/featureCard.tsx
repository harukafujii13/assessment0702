import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom-bootstrap.scss";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({ iconSrc, title, description }: FeatureCardProps) {
  return (
    <div className="card w-100">
      <div className="card-body d-flex align-items-center gap-3 w-100">
        <Image
          src={iconSrc}
          width={40}
          height={40}
          alt={title}
          className="card-icon"
        />
        <div className="card-description d-flex flex-column justify-content-center">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
        </div>
      </div>
    </div>
  );
}
