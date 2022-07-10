import React, { useState, useEffect } from "react";

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://api.open-notify.org/astros.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        id="password"
        value={formData.password}
        onChange={handleCharge}
      />
    </form>
  );
}
