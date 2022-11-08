import { PriceAndVolume } from "../priceAndVolume/PriceAndVolume";
import { Ingredient } from "../ingredients/Ingredient";
import { LANG_ENG } from "../constants";

export function Item(props: any) {
    return (
        <div>
            <div>{props.name?.[LANG_ENG]}</div>
            <div>{props.description?.[LANG_ENG]}</div>
            <div>{props.imageUrl}</div>
            <div>{props.priceUnit?.[LANG_ENG]}</div>
            <div>{props.volumeUnit?.[LANG_ENG]}</div>
            <div>{props.prices?.map((i: any) => <PriceAndVolume key={i.price} {...i}></PriceAndVolume>)}</div>
            <div>{props.ingredients?.map((i: any) => <Ingredient key={i.subId} {...i}></Ingredient>)}</div>
            <div>{props.extra?.map((i: any) => <Ingredient key={i.subId} {...i}></Ingredient>)}</div>
        </div>
    );
}
