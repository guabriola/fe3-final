import React from "react";
import Card from "../Components/Card";
import { useDocStates } from "../Components/utils/global.context";

const Favs = () => {
  const {state} = useDocStates();

  return (

    <div className="card-grid">
      <h1>Favorite Dentists</h1>
        {state.favs.map(item => <Card item={item} key={item.id}/>)}
    </div>

  );

};

export default Favs;
