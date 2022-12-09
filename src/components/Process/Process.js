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

const Process = (props) => {
  return (
    <>
    <div className="processContainer">
    {NAV.map((navItem) => {
        return (
            <div className={props.step === navItem.number && "activeItem"}>
            <div>{navItem.number}</div>
            {navItem.label}
          </div>
        );
    })}
    </div>
    </>
  )
}

export default Process