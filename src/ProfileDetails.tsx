import { Avatar, Box, Heading, Flex } from "@chakra-ui/react"
import React from "react"

// @ts-ignore
const ProfileDetails = ({userDetails}) => {
    return (
        <Box borderBottom={"1px"} borderColor={"gray.200"} height={"30vh"}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Box>
                    <Avatar size='xl' name={userDetails.username} src={userDetails.image_url} />
                </Box>
                <Box>
                    <Heading>{userDetails.first || "JOHN"} {userDetails.last || "DOE"}</Heading>
                    <Heading size="md">@{userDetails.username}</Heading>
                    <Heading size="md">Bio: {userDetails.bio}</Heading>
                    <Heading size="xs">Joined on {userDetails.doj}</Heading>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProfileDetails
