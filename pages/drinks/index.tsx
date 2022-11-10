import { BaseMenu } from "../../components/baseMenu/BaseMenu";
import React, { useState } from "react";


export default function Drinks() {
  const host = process.env.CORE_BASE_URL
  console.log(`Host url: ${host}`)
  const [drinkMenu, setDrinkMenu] = useState({} as any)
  const [error, setError] = useState(null)

  async function fetchDrinkMenuHandler() {
    try {
      const response = await fetch(`${host}:8080/api/v1/drinks`)
      // const response = await fetch(`http://54.93.177.148:8080/api/v1/drinks`)

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      setDrinkMenu(data)
      setError(null)
    } catch (err: any) {
      console.log(err)
      setError(err.message)
    }
  }

  return <React.Fragment>
    <section>
      <button onClick={fetchDrinkMenuHandler}>Drinks Menu</button>
    </section>
    <section>
      { !error && <BaseMenu id={drinkMenu.id}
        name={drinkMenu.name}
        description={drinkMenu.description}
        imageUrl={drinkMenu.imageUrl}
        groups={drinkMenu.groups}>Drinks
        </BaseMenu>
      }
      {error && <p>{error}</p>}
    </section>
  </React.Fragment>

}
