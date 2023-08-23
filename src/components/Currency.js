import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success">
    {" "}
      
      {
        <select
          class="list-group-item list-group-item-action"
          name="Currency"
          id="Currency"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option href="#" class="list-group-item list-group-item-action list-group-item-success" defaultValue>Currency (£ Pound)    </option>

          <option href="#" class="list-group-item list-group-item-action list-group-item-success" value="$">$ Dollar</option>
          <option href="#" class="list-group-item list-group-item-action list-group-item-success" value="£">£ Pound</option>
          <option href="#" class="list-group-item list-group-item-action list-group-item-success" value="€">€ Euro</option>
          <option href="#" class="list-group-item list-group-item-action list-group-item-success" value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;