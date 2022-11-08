import { LANG_ENG } from "../constants";

export function PriceAndVolume(props: any) {
    return (
        <div>
            <div>{props.volume}</div>
            <div>{props.price}</div>
            <div>{props.description?.[LANG_ENG]}</div>
        </div>
    );
}
