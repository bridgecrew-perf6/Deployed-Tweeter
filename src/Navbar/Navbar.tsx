import React from "react";
import Link from "./Link";

import { IoMdHome } from "react-icons/io"
import { MdFavorite } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { LinkItems } from "../Types/sidebar";

import { v4 as uuidv4 } from 'uuid';
import { Box, Flex } from "@chakra-ui/layout";
import LoggedOut from "./LoggedOut";

const links: LinkItems = [
    {name: "Home", icon: IoMdHome},
    {name: "Favorite", icon: MdFavorite},
    {name: "Profile", icon: FaUser},
    {name: "Settings", icon: AiFillSetting},
]



const Navbar = () => {

    const renderLinks = links.map((link) => <Link key={uuidv4()} name={link.name} icon={link.icon}></Link>)

    return (
        <Flex direction="column" backgroundColor={"red"} justify="space-between" height="100vh"  maxWidth="25vw" marginRight={"10px"} borderRight={"1px"} borderColor={"gray.200"} textAlign={"center"}>
            <Box padding={"10px"}> 
                {renderLinks}
            </Box>
            <LoggedOut></LoggedOut>
        </Flex>
    )
}

export default Navbar
