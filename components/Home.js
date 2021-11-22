import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online Touchless delivery"
        backgroundimg="model-s.jpg"
        leftbtn="Custom-Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online Touchless delivery"
        backgroundimg="model-y.jpg"
        leftbtn="Custom-Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online Touchless delivery"
        backgroundimg="model-3.jpg"
        leftbtn="Custom-Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online Touchless delivery"
        backgroundimg="model-x.jpg"
        leftbtn="Custom-Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title=" Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        backgroundimg="solar-panel.jpg"
        leftbtn="Order Now"
        rightbtn="Learn More"
      />
      <Section
        title=" Solar Roof"
        description="Produce Clean Energy from Your Roof"
        backgroundimg="solar-roof.jpg"
        leftbtn="Order Now"
        rightbtn="Learn More"
      />
      <Section
        title=" Accessories"
        backgroundimg="accessories.jpg"
        leftbtn="Shop Now "
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
