import { useRouter } from "next/router";
import React from "react";
import { Item } from "../../components/item/Item";
import { LANG_ENG } from "../../components/constants";

export default function MenuGroup(props: any) {
  const router = useRouter()
  console.log(`router: ${router.query.subId}`)
  return <React.Fragment>
    <section>
      <Item id={props.subId}
                name={props.name?.[LANG_ENG]}
                description={props.description?.[LANG_ENG]}
                imageUrl={props.imageUrl?.[LANG_ENG]}
                ingredients={props.ingredients}
                extra={props.extra}>Drinks
      </Item>
    </section>
  </React.Fragment>
}
