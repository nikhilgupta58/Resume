import {
    Box,
    Button,
    Input,
    Stack,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    HStack,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
}
    from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import * as yup from 'yup';
import Preview from '../Preview';
import WorkHistory from './WorkHistory';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function WorkCard({ id, title, subtitle }: { id: number, title: string, subtitle: string }) {
    const { setStep, step } = stepStore();
    const { setWork, work, removeWork } = userStore();

    type fieldFromType = {
        field: any;
        form: any;
    }

    interface Work {
        id: number,
        jobTitle: string,
        employer: string,
        startDate: string,
        city: string,
        state: string,
        endDate: string,
        currentWork: boolean,
        desc: string[]
    }

    const schema = yup.object().shape({
        jobTitle: yup.string(),
        employer: yup.string(),
        startDate: yup.date(),
        city: yup.string(),
        state: yup.string(),
        endDate: yup.date(),
        currentWork: yup.boolean(),
    });
    const initWork = {
        jobTitle: work[id]?.jobTitle ? work[id]?.jobTitle : '',
        id: id,
        city: work[id]?.city ? work[id]?.city : '',
        state: work[id]?.state ? work[id]?.state : '',
        startDate: work[id]?.startDate ? work[id]?.startDate : '',
        endDate: work[id]?.endDate ? work[id]?.endDate : '',
        currentWork: work[id]?.currentWork ? work[id]?.currentWork : false,
        desc: work[id]?.desc ? work[id]?.desc : [],
        employer: work[id]?.employer ? work[id]?.employer : '',
    }
    const [init, setInit] = React.useState<Work>(initWork)
    React.useEffect(() => {
        setInit({
            jobTitle: work[id]?.jobTitle ? work[id]?.jobTitle : '',
            id: id,
            city: work[id]?.city ? work[id]?.city : '',
            state: work[id]?.state ? work[id]?.state : '',
            startDate: work[id]?.startDate ? work[id]?.startDate : '',
            endDate: work[id]?.endDate ? work[id]?.endDate : '',
            currentWork: work[id]?.currentWork ? work[id]?.currentWork : false,
            desc: work[id]?.desc ? work[id]?.desc : [],
            employer: work[id]?.employer ? work[id]?.employer : '',
        })
    }, [work[id]])

    const [showHistory, setShowHistory] = React.useState(false)
    const [desciption, setDesciption] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const descformat = () => {
        if (work[id]?.desc) {
            return work[id]?.desc.reduce((acc, curr) => {
                return acc += curr + '\n'
            }, '');
        }
        return ''
    }
    console.log("eidt - " + id);

    if (showHistory)
        return (
            <WorkHistory />
        )
    else
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
                                {title}
                            </Text>
                            <Text
                                fontSize={"18px"}
                                color={"#666"}
                                my={'0px'}
                            >
                                {subtitle}
                            </Text>
                        </Box>
                        <Preview />
                    </HStack>
                    <Box
                        p="40px 10px 0 0"
                    >
                        <Formik
                            initialValues={
                                {
                                    id: id,
                                    jobTitle: work[id]?.jobTitle,
                                    employer: work[id]?.employer,
                                    startDate: work[id]?.startDate,
                                    city: work[id]?.city,
                                    state: work[id]?.state,
                                    endDate: work[id]?.endDate,
                                    currentWork: work[id]?.currentWork,
                                    desc: descformat(),
                                }
                            }
                            validationSchema={schema}
                            onSubmit={(values, actions) => {
                                {
                                    work.map((e) => {
                                        if (e.jobTitle === '')
                                            removeWork(e.id)
                                    })
                                }
                                if (id === 0 && (work[id]?.jobTitle === '' || work.length === 0)) {
                                    onOpen()
                                }
                                else {
                                    setShowHistory(true)
                                }
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <HStack spacing={5}>
                                        <Field name='jobTitle'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.jobTitle}>
                                                    <FormLabel
                                                        htmlFor='Job Title'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        Job Title
                                                    </FormLabel>
                                                    <Input {...field} id='jobTitle' onBlur={(e) => {
                                                        setWork({ ...init, jobTitle: e.target.value, id: id })
                                                    }} />
                                                    <FormErrorMessage>{form.errors.jobTitle}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='employer'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.employer}>
                                                    <FormLabel
                                                        htmlFor='Employer'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        Employer
                                                    </FormLabel>
                                                    <Input {...field} id='employer' onBlur={(e) => {
                                                        setWork({ ...init, employer: e.target.value, id: id })
                                                    }} />
                                                    <FormErrorMessage>{form.errors.employer}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>

                                    <HStack spacing={5} mt={"30px"}>
                                        <Field name='city'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.city}>
                                                    <FormLabel
                                                        htmlFor='City'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        City
                                                    </FormLabel>
                                                    <Input {...field} id='city' onBlur={(e) => setWork({ ...init, city: e.target.value, id: id })} />
                                                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='state'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.state}>
                                                    <FormLabel
                                                        htmlFor='State'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        State
                                                    </FormLabel>
                                                    <Input {...field} id='state' onBlur={(e) => setWork({ ...init, state: e.target.value, id: id })} />
                                                    <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>

                                    <HStack spacing={5} mt={"30px"}>
                                        <Field name='startDate'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.startDate}>
                                                    <FormLabel
                                                        htmlFor='Start Date'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        Start Date
                                                    </FormLabel>
                                                    <Input {...field} type={'date'} id='startDate' onBlur={(e) => setWork({ ...init, startDate: e.target.value, id: id })} />
                                                    <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='endDate'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.endDate}>
                                                    <FormLabel
                                                        htmlFor='End Date'
                                                        fontSize={"13px"}
                                                        fontWeight={"600"}
                                                        lineHeight={"24px"}
                                                        mb={"0"}
                                                    >
                                                        End Date
                                                    </FormLabel>
                                                    <Input {...field} type={'date'} id='endDate' onBlur={(e) => setWork({ ...init, endDate: e.target.value, id: id })} />
                                                    <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>

                                    <Button
                                        bgColor={'white'}
                                        _hover={{ bgColor: 'white' }}
                                        border={'none'}
                                        mt='20px'
                                        p='0'
                                        color={'#3a96f0'}
                                        onClick={() => {
                                            setDesciption(!desciption)
                                        }}
                                        cursor={'pointer'}
                                        fontSize={'14px'}
                                        _active={{ bgColor: 'white', border: 'none' }}
                                        _focus={{ bgColor: 'white', border: 'none' }}
                                    >
                                        <HStack spacing={2}>
                                            {!desciption ?
                                                <AddIcon />
                                                :
                                                <MinusIcon />
                                            }
                                            <Text
                                                lineHeight={'1.5'}
                                                m='0'
                                                p='0'
                                                fontWeight={'400'}
                                            >
                                                Add a description to this section
                                            </Text>
                                        </HStack>
                                    </Button>
                                    {desciption ?
                                        <Field name='desc'>
                                            {({ field, form }: fieldFromType) => (
                                                <FormControl isInvalid={form.errors.desc}>
                                                    <Textarea
                                                        {...field}
                                                        height={"300px"}
                                                        placeholder='Write your description here'
                                                        id='desc'
                                                        resize={'none'}
                                                        p={'20px'}
                                                        onBlur={(e) => setWork({ ...init, desc: [...e.target.value.split("\n")], id: id })}
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
                                                    <FormErrorMessage>{form.errors.desc}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        : null
                                    }

                                    <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                                        <Button
                                            color={"blue"}
                                            fontWeight={"400"}
                                            bgColor={"white"}
                                            border={"1px solid blue"}
                                            onClick={() => {

                                                work.map((e) => {
                                                    if (e.jobTitle === '')
                                                        removeWork(e.id)
                                                })
                                                setStep(0)
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
                                            px="40px"
                                            _active={{ border: 'none' }}
                                            _focus={{ border: 'none' }}
                                            borderRadius={'0'}
                                        >
                                            Next
                                        </Button>

                                    </HStack>

                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
                <NoExperience isOpen={isOpen} onClose={onClose} />
            </>
        )
}

const NoExperience = ({ isOpen, onClose }: { isOpen: any, onClose: any }) => {
    const { setStep, step } = stepStore();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
                <ModalOverlay />
                <ModalContent border={"1px solid gray.900"}>
                    <ModalCloseButton background={'transparent'} border={'none'} />
                    <ModalBody>
                        <Text p="0px" mb="10px" fontSize={"28px"}>More Information Needed</Text>
                        <Text p="0px" mt="0px">Looks like you haven't entered any past work experience. We recommend that you at least enter your past Position and Company.</Text>
                        <HStack py="20px" spacing={5}>
                            <Button
                                p="20px"
                                color={"blue"}
                                fontWeight={"400"}
                                bgColor={"white"}
                                border={"1px solid blue"}
                                onClick={() => setStep(2)}
                                _active={{ border: '1px solid blue' }}
                                _focus={{ border: '1px solid blue' }}
                                borderRadius={'0'}
                            >
                                I DON'T HAVE WORK EXPERIENCE
                            </Button>
                            <Button
                                p="20px 40px"
                                color={"white"}
                                fontWeight={"400"}
                                bgColor={"red"}
                                border={"1px solid red"}
                                _hover={{ background: 'red.700' }}
                                onClick={onClose}
                                _active={{ border: 'none' }}
                                _focus={{ border: 'none' }}
                                borderRadius={'0'}
                            >
                                OK
                            </Button>
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}