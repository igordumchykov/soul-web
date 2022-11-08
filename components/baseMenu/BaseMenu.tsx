import { MenuGroup } from "../menuGroup/MenuGroup";
import { LANG_ENG } from "../constants";

export function BaseMenu(props: any) {
    return (
        <div>
            <div>{props.name?.[LANG_ENG]}</div>
            <div>{props.description?.[LANG_ENG]}</div>
            <div>{props.imageUrl}</div>
            <div>{props.groups?.map((i: any) => <MenuGroup key={i.subId} {...i}></MenuGroup>)}</div>
        </div>
    );
}
