import React from "react";
import Button from "./Button";
import "./styles.css";
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Namastey India !</h1>
      <Button props="Punjabi Songs"/>
      <Button props="Sad Songs"/>
      <Button />
    </div>
  );
};

export default App;
