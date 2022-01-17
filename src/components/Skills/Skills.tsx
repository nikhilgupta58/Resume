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
import { AddIcon } from '@chakra-ui/icons';

interface Skill {
    id: number,
    name: string,
    rating: number
}

export default function Skills() {
    const { setStep, step } = stepStore();
    const { skill, setSkill, removeSkill } = userStore();
    function order(a: Skill, b: Skill): number {
        return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
    }
    function highestSkillId() {
        let id = -1
        skill?.map((e) => {
            if (id < e?.id)
                id = e?.id
        })
        return id
    }
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

                    {window.innerWidth >= 1100 ?
                        <Preview /> : null
                    }
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    {/* {skill?.length === 0 ? <Star id={-1} data={null} />
                        : null

                    } */}
                    {skill.sort(order).map((e, id) => (
                        <Star key={id} id={e?.id} data={e} />
                    ))}
                    <HStack
                        color='#3983fa'
                        spacing={2}
                        justifyContent={'flex-end'}
                        mr={'100px'}
                        cursor={'pointer'}
                        onClick={() => {
                            console.log(skill?.length);
                            setSkill({ id: highestSkillId() + 1, name: '', rating: 0 })
                        }}
                    >
                        <AddIcon />
                        <Text
                            lineHeight={'1.5'}
                            m='0'
                            p='0'
                            fontWeight={'400'}
                        >
                            Add another skill
                        </Text>
                    </HStack>
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
                            borderRadius={'0'}
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
                            borderRadius={'0'}
                        >
                            Next: Summary
                        </Button>

                    </HStack>

                </Box>
            </Box>
        </>
    )
}

const Star = ({ id, data }: { id: number, data: Skill }) => {
    const [rating, setRating] = React.useState(0)
    const { skill, setSkill, removeSkill } = userStore();
    React.useEffect(() => {
        setSkill({
            id: id,
            name: data?.name,
            rating: rating
        })
    }, [rating])
    const handleRating = (rate: number) => {
        setRating(rate)
        console.log(id);
    }
    return (
        <HStack m={{ lg: '25px 100px', md: '25px 30px', sm: '25px 10px' }} width={{ lg: '28vw' }} spacing={5} alignItems={'center'}>
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
            <Input width={'400px'} type={'text'} value={data?.name} onChange={(e) => setSkill({ id: id, name: e.target.value, rating: data?.rating })} />
            <Box
                cursor={'pointer'}
                color={'gray.700'}
                _hover={{ color: 'gray.900' }}
                onClick={() => {
                    removeSkill(id)
                }}

            >
                <RiDeleteBin6Line size={'25px'} />
            </Box>
        </HStack>
    )
}