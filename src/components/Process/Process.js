import React from 'react'
import "./process.scss"

const NAV = [
    {
      number: 1,
      label: "Select Candidate",
    },
    {
      number: 2,
      label: "Select Company",
    },
    {
      number: 3,
      label: "Fill Report Details",
    },
  ];

const Process = ({ step }) => {
  return (
    <div className="processContainer">
    {NAV.map((navItem, i) => {
        return (
          <div key={i} className={step === navItem.number? "item activeItem" : "item"}>
            <div key={i}>{navItem.number}</div>
            {navItem.label}
          </div>
        );
    })}
    </div>
  )
}

export default Process