import { PriceAndVolume } from "../priceAndVolume/PriceAndVolume";
import { LANG_ENG } from "../constants";

export function Ingredient(props: any) {
return (
    <div>
        <div>{props.name?.[LANG_ENG]}</div>
        <div>{props.description?.[LANG_ENG]}</div>
        <div>{props.imageUrl}</div>
        <div>{props.priceUnit?.[LANG_ENG]}</div>
        <div>{props.volumeUnit?.[LANG_ENG]}</div>
        <div>{props.prices?.map((i: any) => <PriceAndVolume key={i.price} {...i}></PriceAndVolume>)}</div>
    </div>
);
}
