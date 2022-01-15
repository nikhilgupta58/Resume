import { VStack, Box, Text, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { userStore } from '../store'

export default function Resume() {
    const { heading } = userStore()
    return (
        <VStack
            alignItems={'flex-start'}
        >
            <Box
                w="100%"
            >
                <Text
                    color={"#002e58 !important"}
                    fontSize={"60px"}
                    lineHeight={"60px"}
                    fontWeight={"bold"}
                    m="10px 0 0 0"
                >
                    {heading.firstname} {heading.lastname}
                </Text>
                <Text
                    fontSize={"25px"}
                    lineHeight={"21px"}
                    color={"#002e58 !important"}
                    m="10px 0 0 0"
                >
                    {heading.profession}
                </Text>
                <HStack
                    m={"30px 0 0 0"}
                    justifyContent={'space-between'}
                >
                    {heading.city != '' ?
                        <Text m={"0"}>
                            <strong>Address</strong> {heading.city}, {heading.state}, {heading.pincode}
                        </Text>
                        : null}
                    {heading.linkdin != '' ?
                        <Text m={"0"}>
                            <strong>Linkdin</strong> {heading.linkdin}
                        </Text>
                        : null}
                </HStack>
                {heading.phone != '' ?
                    <Text m={"10px 0 0 0"}>
                        <strong>Phone</strong> {heading.phone}
                    </Text>
                    : null}
                <HStack
                    m={"10px 0 0 0"}
                    justifyContent={'space-between'}
                >
                    <Text m={"0"}>
                        <strong>E-mail</strong> {heading.email}
                    </Text>
                    {heading.github != '' ?
                        <Text m={"0"}>
                            <strong>Github</strong> {heading.github}
                        </Text>
                        : null}
                </HStack>
            </Box>
        </VStack>
    )
}