import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../custom-bootstrap.scss";

interface ButtonProps {
  title: string;
}

export function BlueButton({ title }: ButtonProps) {
  return (
    <div className="d-flex justify-content-center">
      <Button className="blue-button btn rounded-pill">{title}</Button>
    </div>
  );
}
