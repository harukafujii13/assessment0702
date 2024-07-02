import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../custom-bootstrap.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export function BlueButton({ title, onClick }: ButtonProps) {
  return (
    <div className="d-flex justify-content-center w-100 mt-4">
      <Button
        className="blue-button btn rounded-pill w-100"
        onClick={onClick}>
        {title}
      </Button>
    </div>
  );
}
