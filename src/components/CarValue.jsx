import React from "react";
import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { searchTerm, data } }) =>
    data
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((sum, item) => sum + item.cost, 0)
  );
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}
