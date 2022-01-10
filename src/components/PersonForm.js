import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "statuses";
const PersonForm = () => {
  const [mesage, setMessage] = useState("loading...");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Message from the backend: {message}</h2>
    </div>
  );
};

export default PersonForm;
