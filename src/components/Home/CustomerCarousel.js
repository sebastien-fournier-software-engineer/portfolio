import React from "react";
import geHealthcare from "../../Assets/Customers/ge-healthcare.png";
import echosens from "../../Assets/Customers/echosens.png";
import navya from "../../Assets/Customers/navya.png";
import tdk from "../../Assets/Customers/tdk-corporation.png";
import macnica from "../../Assets/Customers/macnica.png";

const CUSTOMERS = [
  { name: "GE Healthcare", logo: geHealthcare },
  { name: "Echosens", logo: echosens },
  { name: "Navya", logo: navya },
  { name: "TDK", logo: tdk },
  { name: "Macnica", logo: macnica },
];

function LogoSet() {
  return (
    <div className="customer-carousel-set">
      {CUSTOMERS.map((customer, index) => (
        <div key={index} className="customer-carousel-item">
          <img
            src={customer.logo}
            alt={customer.name}
            title={customer.name}
          />
        </div>
      ))}
    </div>
  );
}

function CustomerCarousel() {
  return (
    <div className="customer-carousel">
      <div className="customer-carousel-track">
        <LogoSet />
        <LogoSet />
        <LogoSet />
        <LogoSet />
      </div>
    </div>
  );
}

export default CustomerCarousel;
