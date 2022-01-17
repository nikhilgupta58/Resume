import { HStack, Button } from '@chakra-ui/react';
import * as React from 'react'
import { stepStore } from "../store";

export default function Finalize() {
    const { setStep } = stepStore();

    return (
        <>
            <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                <Button
                    color={"blue"}
                    fontWeight={"400"}
                    bgColor={"white"}
                    border={"1px solid blue"}
                    onClick={() => {
                        setStep(4)
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

                    }}
                    px="40px"
                    _active={{ border: 'none' }}
                    _focus={{ border: 'none' }}
                >
                    Next
                </Button>

            </HStack>
        </>
    )
}