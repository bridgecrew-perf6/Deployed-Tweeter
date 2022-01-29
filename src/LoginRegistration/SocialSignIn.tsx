import React from "react"
import { Button, Flex } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

const SocialSignIn = () => {
    return (
        <Flex direction="column" width="80%">
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
            </Button>
            <Button colorScheme="linkedin" leftIcon={<FaGithub />}>
                GitHub
            </Button>
        </Flex>
    )
}

export default SocialSignIn
