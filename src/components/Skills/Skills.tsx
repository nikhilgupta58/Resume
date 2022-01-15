import {
    Box,
    Button,
    Text,
    HStack,
    VStack,
}
    from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import * as yup from 'yup';
import Preview from '../Preview';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function Skills() {
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
                            What skills would you like to highlight?
                        </Text>
                    </Box>
                    <Preview />
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    <VStack>

                    </VStack>
                    <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                        <Button
                            color={"blue"}
                            fontWeight={"400"}
                            bgColor={"white"}
                            border={"1px solid blue"}
                            onClick={() => setStep(2)}
                            px="40px"
                            _active={{ border: '1px solid blue' }}
                            _focus={{ border: '1px solid blue' }}
                        >
                            Back
                        </Button>

                        <Button
                            colorScheme='red'
                            type='submit'
                            onClick={() => setStep(4)}
                            px="40px"
                            _active={{ border: 'none' }}
                            _focus={{ border: 'none' }}
                        >
                            Next: Summary
                        </Button>

                    </HStack>

                </Box>
            </Box>
        </>
    )
}