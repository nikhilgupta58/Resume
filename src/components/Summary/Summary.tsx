import {
    Box,
    Button,
    Text,
    HStack,
    VStack,
    Input,
    Textarea,
}
    from '@chakra-ui/react';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import Preview from '../Preview';


export default function Summary() {
    const { setStep, step } = stepStore();

    return (
        <>
            <Box m={'15px'} width={{ lg: '50vw', md: '70vw', sm: '70vw' }}>
                <HStack justifyContent={"space-between"}>
                    <Box
                        pr={"100px"}
                    >
                        <Text
                            fontSize={{ lg: "25px" }}
                            color={"#3983fa"}
                            m={'10px 0 5px 0'}
                        >
                            Briefly tell us about your background
                        </Text>
                    </Box>
                    <Preview />
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                        <Button
                            color={"blue"}
                            fontWeight={"400"}
                            bgColor={"white"}
                            border={"1px solid blue"}
                            onClick={() => {
                                setStep(2)
                            }}
                            px="40px"
                            _active={{ border: '1px solid blue' }}
                            _focus={{ border: '1px solid blue' }}
                        >
                            Back
                        </Button>

                        <Button
                            colorScheme='red'
                            type='submit'
                            onClick={() => {
                                setStep(4)
                            }}
                            px="40px"
                            _active={{ border: 'none' }}
                            _focus={{ border: 'none' }}
                        >
                            Next: Extra Sections
                        </Button>

                    </HStack>

                </Box>
            </Box>
        </>
    )
}