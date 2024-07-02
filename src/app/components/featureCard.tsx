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
    <div className="card">
      <div className="card-body d-flex align-items-center gap-3">
        <Image
          src={iconSrc}
          width={40}
          height={40}
          alt={title}
          className="card-icon"
        />
        <div className="card-description">
          <div className="card-title">{title}</div>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
