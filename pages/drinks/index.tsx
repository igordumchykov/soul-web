import { BaseMenu } from "../../components/baseMenu/BaseMenu";
import React, { useState } from "react";

export default function Drinks() {
  const [drinkMenu, setDrinkMenu] = useState({} as any)

  function fetchDrinkMenuHandler() {
    fetch("http://localhost:8080/api/v1/drinks")
        .then((response) => response.json())
        .then((data) => {
          setDrinkMenu(data)
        })
  }

  return <React.Fragment>
    <section>
      <button onClick={fetchDrinkMenuHandler}>Get Drinks Menu</button>
    </section>
    <section>
      <BaseMenu id={drinkMenu.id}
                name={drinkMenu.name}
                description={drinkMenu.description}
                imageUrl={drinkMenu.imageUrl}
                groups={drinkMenu.groups}>Drinks
      </BaseMenu>
    </section>
  </React.Fragment>

}
