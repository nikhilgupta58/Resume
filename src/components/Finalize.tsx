import { HStack, Button, Box, Text } from '@chakra-ui/react';
import * as React from 'react'
import { stepStore } from "../store";
import Preview from './Preview';
import Resume from './Resume';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
 // @ts-ignore 
import Pdf from "react-to-pdf";

export default function Finalize() {
    const { setStep } = stepStore();
    const ref = React.createRef();

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
                            Finalize your resume
                        </Text>
                    </Box>
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    <Box>
                        <HStack spacing={5} mt={"50px"} justifyContent={'space-around'} >
                            <Pdf targetRef={ref} filename="Resume.pdf">
                                {
                                     // @ts-ignore 
                                    ({ toPdf }) => <Box
                                        alignSelf={'flex-start'}
                                        onClick={toPdf}
                                        color={'#58585f'}
                                        fontSize={'18px'}
                                        lineHeight={'18px'}
                                        border={'2px solid #dee2e6'}
                                        marginTop={'12px'}
                                        padding={'18px'}
                                        fontWeight={'800'}
                                        bgColor={'gray.300'}
                                        cursor={'pointer'}
                                        _hover={{ bgColor: 'gray.400' }}
                                    >
                                        <HStack>
                                            <HiOutlineDocumentDownload />
                                            <Text
                                            >Download</Text>
                                        </HStack>
                                    </Box>
                                }
                            </Pdf>

                            <Box minW={'610px'} minH={'893px'} border={'1px solid'}>
                                 {/* @ts-ignore  */}
                                <Box ref={ref}>
                                    <Resume />
                                </Box>
                            </Box>
                        </HStack>
                    </Box>
                    <HStack spacing={5} mt={"50px"} >

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
                            borderRadius={'0'}
                        >
                            Back
                        </Button>

                    </HStack>

                </Box>
            </Box>
        </>


    )
}