import { Avatar, Box, Heading, Flex } from "@chakra-ui/react"
import React, { useContext } from "react"
import { MdVerifiedUser } from "react-icons/md"
import { Icon, Button } from "@chakra-ui/react"
import { TokenContext, UserContext } from "./App"
import { baseUrl } from "./settings"
import { useNavigate } from "react-router-dom"

// @ts-ignore
const ProfileDetails = ({userDetails}) => {

    const {user, setUser} = useContext(UserContext)
    const {token, setToken} = useContext(TokenContext)
    let navigate = useNavigate()

    const handleFollow = () => {
        fetch(`${baseUrl}/tweeter/${userDetails.username}/`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({"follow": userDetails.username})
        })
        .then(response => {
            if(response.status === 401) {
                alert('You need to login to follow')
                navigate(`${baseUrl}/login`)
            }
            return response.json
        })
        .then(data => alert("Follow Successful"))
        .catch(err => alert(err))
        
    }


    return (
        <Box borderBottom={"1px"} borderColor={"gray.200"} height={"30vh"}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Box>
                    <Avatar size='xl' name={userDetails.username} src={userDetails.image_url} />
                </Box>
                <Box>
                    <Heading size="md">{userDetails.first || "JOHN"} {userDetails.last || "DOE"}</Heading>
                    <Heading size="md" display={"inline"}>@{userDetails.username}</Heading>
                    {userDetails.is_verified ? <Icon display={"inline"} as={MdVerifiedUser}></Icon> : <p style={{display: "inline"}}>Please Verify Email Id to get Blue Tick</p>}
                    <Heading size="md">Bio: {userDetails.bio}</Heading>
                    <Box>
                        <Heading size="xs" display={"inline"}>Joined on {userDetails.doj}</Heading>
                    </Box>
                    <Button disabled={token===""} onClick={handleFollow}>Follow</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProfileDetails
