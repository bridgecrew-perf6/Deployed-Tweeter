import { IconType } from "react-icons/lib";

type LinkItemProps = {
    name: string,
    icon: IconType
}

type LinkItems = Array<LinkItemProps>;
export type { LinkItemProps, LinkItems};
