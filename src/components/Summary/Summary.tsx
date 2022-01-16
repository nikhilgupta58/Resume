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
    const { summary, setSummary } = userStore();
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
                    <Box>
                        <Textarea
                            value={summary}
                            height={"300px"}
                            id='desc'
                            resize={'none'}
                            placeholder='Write your summary here'
                            p={'20px'}
                            onChange={(e) => setSummary(e.target.value)}
                            sx={{
                                '&::-webkit-scrollbar': {
                                    width: '7px',
                                    borderRadius: '10px',
                                    backgroundColor: `rgba(0, 0, 0, 0.08)`,
                                    boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                                    padding: '1px'
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: `rgba(0, 0, 0, 0.08)`,
                                    padding: '1px',
                                    boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                                },
                            }}
                            _active={{ bgColor: 'white', border: 'gray.200' }}
                            _focus={{ bgColor: 'white', border: 'gray.200' }}
                            overflowX={'hidden'}
                            fontSize={'12px'}
                            borderRadius={'0px'}
                        />
                    </Box>
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