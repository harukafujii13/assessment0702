import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../custom-bootstrap.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

/**
 *
 * By implementing an onClick event in the BlueButton component, it has been made possible to reuse the button in various places in the future.
 * This allows for better code reuse and consistency across the application.
 *
 */
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
