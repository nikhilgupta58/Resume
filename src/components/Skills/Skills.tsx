import {
    Box,
    Button,
    Text,
    HStack,
    VStack,
    Input,
}
    from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import { IoMdRemoveCircle } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Preview from '../Preview';
import { Rating } from 'react-simple-star-rating'


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
                    <Star />
                    <Star />
                    <Star />
                    <Star />
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

const Star = () => {
    const [rating, setRating] = React.useState(0)
    const handleRating = (rate: number) => {
        setRating(rate)
    }
    return (
        <HStack m={'25px 100px'} width={'28vw'} spacing={5} alignItems={'center'}>
            <Box
                color='#3983fa'
                cursor={'pointer'}
                _hover={{ color: 'blue.700' }}
                onClick={() => handleRating(0)}
            >
                <IoMdRemoveCircle size={'25px'} />
            </Box>
            <Rating
                fillColor='#3983fa'
                onClick={handleRating}
                ratingValue={rating}
                transition
                emptyColor='#666'
                size={25}
            />
            <Input type={'text'} />
            <Box
                cursor={'pointer'}
                color={'gray.700'}
                _hover={{ color: 'gray.900' }}

            >
                <RiDeleteBin6Line size={'25px'} />
            </Box>
        </HStack>
    )
}