import React from "react";
import Card from "../Components/Card";
import { useDocStates } from "../Components/utils/global.context";

const Favs = () => {
  const {state} = useDocStates();

  return (
    <div>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.map(item => <Card item={item} key={item.id}/>)}
      </div>
    </div>

  );

};

export default Favs;
