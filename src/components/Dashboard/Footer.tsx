import {
    Box,
    Stack,
    VStack,
    Text,
}
    from '@chakra-ui/react';
import * as React from 'react'
import { MdBolt } from 'react-icons/md';


export default function Footer() {
    return (
        <Box
            width={"100%"}
            pt={"100px"}
        >
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    color={"gray.200"}
                    border={"1px solid"}
                    h={"1px"}
                    w={"40%"}
                />
                <MdBolt color='lightgreen' size={"60px"} />
                <Text
                    color={"gray.200"}
                    border={"1px solid"}
                    h={"1px"}
                    w={"40%"}
                />
            </Stack>
            <Text
                color={"gray.500"}
                textAlign={"center"}
                p={"15px"}
            >Made on the Internet by Nikhil Kumar Gupta</Text>
        </Box>
    )
}