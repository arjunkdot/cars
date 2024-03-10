import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "./../store";
export default function CarForm() {
  const dispatch = useDispatch();

  // Causes "Selector unknown returned a different result when called with the same parameters." warning.
  // const { name, cost } = useSelector((state) => {
  //   return {
  //     name: state.form.name,
  //     cost: state.form.cost,
  //   };
  // });

  // To resolve "Selector unknown returned a different result when called with the same parameters." warning.
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              className="input is-expanded"
              id="name"
              value={name}
              onChange={handleNameChange}></input>
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              className="input is-expanded"
              type="number"
              id="cost"
              value={cost || ""}
              onChange={handleCostChange}></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
