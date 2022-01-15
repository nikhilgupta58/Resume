import {
    Box,
    Button,
    Text,
    HStack,
    VStack,
}
    from '@chakra-ui/react';
import * as React from 'react'
import { stepStore } from '../store';
import { CgNotes } from 'react-icons/cg'

export default function Skills() {
    const { setStep, step } = stepStore();

    return (
        <Box width={'50vw'}>
            <VStack spacing={10} textAlign={'center'}>
                <Text
                    color={'#3983fa'}
                    fontSize={'25px'}
                    lineHeight={'1.5'}
                    fontWeight={'100'}
                >
                    How do you want to start?
                </Text>
                <Box
                    border={'1px solid #3983fa'}
                    width={'315px'}
                    p={'40px 45px'}
                    height={'213px'}
                    bgColor={'white'}
                    textAlign={'center'}
                    boxShadow={'0 0 6px rgb(88 88 95 / 11%)'}
                    color={'yellow.500'}
                >
                    <CgNotes fontSize={'50px'} />
                    <Text
                        fontSize={'18px'}
                        marginTop={'12px'}
                        color={'#58585f'}
                    >
                        CREATE A NEW RESUME
                    </Text>
                    <Text
                        color={'#919191'}
                        lineHeight={'18px'}
                        mt={'15px'}
                        fontSize={'15px'}
                    >
                        We will help you create a resume step-by-step
                    </Text>
                </Box>
            </VStack>
            <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                <Button
                    color={"blue"}
                    fontWeight={"400"}
                    bgColor={"white"}
                    border={"1px solid blue"}
                    isDisabled={true}
                    px="40px"
                    _active={{ border: '1px solid blue' }}
                    _focus={{ border: '1px solid blue' }}
                >
                    Back
                </Button>

                <Button
                    colorScheme='red'
                    type='submit'
                    onClick={() => setStep(0)}
                    px="40px"
                    _active={{ border: 'none' }}
                    _focus={{ border: 'none' }}
                >
                    Next
                </Button>

            </HStack>
        </Box>
    )
}