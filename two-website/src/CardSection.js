import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="LearnCodeOnline" buttonText="MyLcoApp"/>
          </div>
          <div className="col-4">
            <Card title="CodeWithHarry" buttonText="CodeWithHarryApp"/>
          </div>
          <div className="col-4">
            <Card title="TechnicalThapa" buttonText="CodeWithThapa"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
