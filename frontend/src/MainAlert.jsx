import React, { useState, useEffect } from "react";
import { Alert } from "flowbite-react";

export default function MainAlert({ color, msg }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (msg !== "") {
      setShowAlert(true);
    }
  }, [msg]);

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <Alert
      color={color}
      onDismiss={handleAlertDismiss}
      className={showAlert ? "block" : "hidden"}
    >
      {msg}
    </Alert>
  );
}
