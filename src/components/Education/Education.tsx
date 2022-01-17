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
    Textarea,
}
    from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Field, Form, Formik } from 'formik';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import * as yup from 'yup';
import Preview from '../Preview';
import WorkHistory from '../Work/WorkHistory';
import LabelDesc from '../LabelDesc';

export default function Education() {
    const { setStep, step } = stepStore();
    const { setEducation, education } = userStore();
    const [description, setDesciption] = React.useState(false)
    type fieldFromType = {
        field: any;
        form: any;
    }

    interface Education {
        name: string,
        location: string,
        degree: string,
        field: string,
        startDate: string,
        endDate: string,
        desc: string[]
    }

    const schema = yup.object().shape({
        name: yup.string(),
        location: yup.string(),
        degree: yup.date(),
        field: yup.string(),
        startDate: yup.string(),
        endDate: yup.date(),
    });

    const descformat = () => {
        if (education?.desc.length > 0) {
            return education?.desc.slice(0, education?.desc.length - 1).reduce((acc, curr) => {
                return acc += curr + '\n'
            }, '') + education?.desc[education?.desc.length - 1];
        }
        return ''
    }

    const eduDesc = [
        'Member of [Fraternity or Sorority Name]',
        'Completed professional development in [Subject]',
        'Continuing education in [Subject]',
        'Professional development completed in [Subject]',
        "Dean's List [Semester and Year]",
        'Awarded [Award Name]',
        "Member of [Honor's Society Name]",
        "Member of [Student Organization or Club Name]",
        "Relevant Coursework Completed: [Subject] & [Subject]",
        "Elected Captain of [Team]",
        "Received [Scholarship Name]"
    ]
    const setDesc = (e: number) => {
        if (education?.desc.indexOf(eduDesc[e]) >= 0) {
            const desc = education?.desc.filter((e1) => {
                return e1 != eduDesc[e]
            })
            setEducation({ ...education, desc: desc })
        }
        else
            setEducation({ ...education, desc: [...education?.desc, eduDesc[e]] })
    }
    return (
        <>
            <Box m={'15px'} width={{ lg: '50vw', md: '70vw', sm: '70vw', xs: '70vw' }}>
                <HStack justifyContent={"space-between"}>
                    <Box
                        pr={"100px"}
                    >
                        <Text
                            fontSize={{ lg: "25px" }}
                            color={"#3983fa"}
                            m={'10px 0 5px 0'}
                        >
                            Tell us about your education
                        </Text>
                        <Text
                            fontSize={"18px"}
                            color={"#666"}
                            my={'0px'}
                        >
                            Include every school, even if you're still there or didn't graduate.
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
                                name: education?.name,
                                location: education?.location,
                                degree: education?.degree,
                                field: education?.field,
                                startDate: education?.startDate,
                                endDate: education?.endDate,
                                desc: descformat(),
                            }
                        }
                        validationSchema={schema}
                        onSubmit={(values, actions) => {
                            setStep(3)
                        }}
                    >
                        {(props) => (
                            <Form>
                                <HStack spacing={5}>
                                    <Field name='name'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.name}>
                                                <FormLabel
                                                    htmlFor='School Name'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    School Name
                                                </FormLabel>
                                                <Input {...field} id='name' onBlur={(e) => {
                                                    setEducation({ ...education, name: e.target.value })
                                                }} />
                                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='location'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.location}>
                                                <FormLabel
                                                    htmlFor='School Location'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    School Location
                                                </FormLabel>
                                                <Input {...field} id='location' onBlur={(e) => {
                                                    setEducation({ ...education, location: e.target.value })
                                                }} />
                                                <FormErrorMessage>{form.errors.employer}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                <HStack spacing={5} mt={"30px"}>
                                    <Field name='degree'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.degree} width={'50vw'}>
                                                <FormLabel
                                                    htmlFor='Degree'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    // mt={'30px'}
                                                    mb={"0"}
                                                >
                                                    Degree
                                                </FormLabel>
                                                <Input {...field} id='degree' onBlur={(e) => setEducation({ ...education, degree: e.target.value })} />
                                                <FormErrorMessage>{form.errors.degree}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box width={'50vw'}></Box>
                                </HStack>

                                <HStack spacing={5} mt={"30px"}>
                                    <Field name='field'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.field}>
                                                <FormLabel
                                                    htmlFor='Field'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Field
                                                </FormLabel>
                                                <Input {...field} id='field' onBlur={(e) => setEducation({ ...education, field: e.target.value })} />
                                                <FormErrorMessage>{form.errors.field}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <HStack width={'50vw'}>
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
                                                        Graduation Start Date
                                                    </FormLabel>
                                                    <Input {...field} type={'date'} id='startDate' onBlur={(e) => setEducation({ ...education, startDate: e.target.value })} />
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
                                                        Graduation End Date
                                                    </FormLabel>
                                                    <Input {...field} type={'date'} id='endDate' onBlur={(e) => setEducation({ ...education, endDate: e.target.value })} />
                                                    <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>
                                </HStack>

                                <Button
                                    bgColor={'white'}
                                    _hover={{ bgColor: 'white' }}
                                    border={'none'}
                                    mt='20px'
                                    p='0'
                                    color={'#3a96f0'}
                                    onClick={() => {
                                        setDesciption(!description)
                                    }}
                                    cursor={'pointer'}
                                    fontSize={'14px'}
                                    _active={{ bgColor: 'white', border: 'none' }}
                                    _focus={{ bgColor: 'white', border: 'none' }}
                                >
                                    <HStack spacing={2}>
                                        {!description ?
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

                                {description ?
                                    <Field name='desc'>
                                        {({ field, form }: fieldFromType) => (
                                            <HStack
                                                spacing={0}
                                                boxShadow={'0 0 5px rgb(88 88 95 / 14%)'}
                                            >
                                                <Box
                                                    width={'40vw'}
                                                    height={"300px"}
                                                    m='0'
                                                    border={'1px solid #ddd'}
                                                    bgColor={'#f6f8fa'}
                                                    p="30px 20px"
                                                    overflowY={'auto'}
                                                    overflowX={'hidden'}
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
                                                >
                                                    {eduDesc.map((e, id) => (
                                                        <LabelDesc key={id} id={id} setDesc={setDesc} label={e} present={education?.desc.indexOf(e)} />
                                                    ))}
                                                </Box>
                                                <FormControl isInvalid={form.errors.desc}
                                                    mt={'10px'}
                                                    m='0'
                                                >
                                                    <Textarea
                                                        {...field}
                                                        id='desc'
                                                        resize={'none'}
                                                        borderRadius={'none'}
                                                        p={'20px'}
                                                        height={'300px'}
                                                        value={descformat()}
                                                        onChange={(e) => {
                                                            let desc = e.target.value.split("\n")
                                                            setEducation({ ...education, desc: desc })
                                                        }}
                                                        onBlur={() => {
                                                            let x = education?.desc.filter((e) => {
                                                                return e !== ''
                                                            })
                                                            setEducation({ ...education, desc: x })
                                                        }}
                                                        _active={{ bgColor: 'white', border: 'none' }}
                                                        _focus={{ bgColor: 'white', border: 'none' }}
                                                        overflowX={'hidden'}
                                                        fontSize={'12px'}
                                                        lineHeight={'30px'}
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
                                                    />
                                                    <FormErrorMessage>{form.errors.desc}</FormErrorMessage>
                                                </FormControl>
                                            </HStack>
                                        )}
                                    </Field>
                                    : null}

                                <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                                    <Button
                                        color={"blue"}
                                        fontWeight={"400"}
                                        bgColor={"white"}
                                        border={"1px solid blue"}
                                        onClick={() => {
                                            setStep(1)
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
                                        _active={{border:'none'}}
                                        _focus={{border:'none'}}
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
        </>
    )
}
