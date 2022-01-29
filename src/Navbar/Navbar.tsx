import React, { useContext } from "react";
import Link from "./Link";

import { IoMdHome } from "react-icons/io"
import { MdFavorite } from "react-icons/md"
import { FaUser } from "react-icons/fa"

import { RiUserFollowFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai"
import { LinkItems } from "../Types/sidebar";

import { v4 as uuidv4 } from 'uuid';
import { Box, Flex } from "@chakra-ui/layout";
import LoggedOut from "./LoggedOut";
import { UserContext } from "../App";

let links: LinkItems = [
    {name: "Home", icon: IoMdHome},
    {name: "Settings", icon: AiFillSetting},
]

const f = {name: "Following", icon: RiUserFollowFill}



const Navbar = () => {

    const {user, setUser} = useContext(UserContext)
    let ans = []
    if(user !== null) {
        ans = [...links, f]
    }
    else {
        ans = links
    }

    const renderLinks = ans.map((link) => <Link key={uuidv4()} name={link.name} icon={link.icon}></Link>)

    return (
        <Flex direction="column" justify="space-between" height="100vh"  maxWidth="25vw" marginRight={"10px"} borderRight={"1px"} borderColor={"gray.200"} textAlign={"center"}>
            <Box padding={"10px"}> 
                {renderLinks}
            </Box>
            <LoggedOut></LoggedOut>
        </Flex>
    )
}

export default Navbar
