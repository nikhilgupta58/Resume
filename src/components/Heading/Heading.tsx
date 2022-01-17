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
    HeadingProps,
}
    from '@chakra-ui/react';
import { Field, Form, Formik, setIn } from 'formik';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import * as yup from 'yup';
import Preview from '../Preview';
import { initial } from 'lodash';

export default function Heading() {
    const { setStep, step } = stepStore();
    const { setHeading, heading } = userStore();

    type fieldFromType = {
        field: any;
        form: any;
    }

    const schema = yup.object().shape({
        firstname: yup.string().required('Please enter your first name'),
        lastname: yup.string().required('Please enter your last name'),
        profession: yup.string().required('Please enter your profession'),
        city: yup.string(),
        state: yup.string(),
        pincode: yup.string().length(6),
        phone: yup.string().length(10),
        email: yup.string().email().required('Please enter your email'),
        linkdin: yup.string().url('Must be a valid url'),
        github: yup.string().url('Must be a valid url'),
    });

    return (
        <>
            <Box m={'15px'} width={{ lg: '50vw', md: '70vw' }}>
                <HStack justifyContent={"space-between"}>
                    <Box
                        pr={"100px"}
                    >
                        <Text
                            fontSize={{ lg: "25px" }}
                            color={"#3983fa"}
                            m={'10px 0 5px 0'}
                        >What’s the best way for employers to contact you?</Text>
                        <Text
                            fontSize={"18px"}
                            color={"#666"}
                            my={'0px'}
                        >We suggest including an email and phone number.</Text>
                    </Box>
                    {window.innerWidth >= 1100 ?
                        <Preview /> : null
                    }
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    <Formik
                        initialValues={
                            {
                                firstname: heading?.firstname,
                                lastname: heading?.lastname,
                                profession: heading?.profession,
                                city: heading?.city,
                                state: heading?.state,
                                pincode: heading?.pincode,
                                phone: heading?.phone,
                                email: heading?.email,
                                github: heading?.github,
                                linkdin: heading?.linkdin,
                            }
                        }
                        validationSchema={schema}
                        onSubmit={(values, actions) => {
                            setHeading(values)
                            setStep(1)
                        }}
                    >
                        {(props) => (
                            <Form>
                                <HStack spacing={5}>
                                    <Field name='firstname'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.firstname}>
                                                <FormLabel
                                                    htmlFor='First Name'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    First name
                                                </FormLabel>
                                                <Input {...field} id='firstname' onBlur={(e) => setHeading({ ...heading, firstname: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.firstname}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='lastname'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.lastname}>
                                                <FormLabel
                                                    htmlFor='Last Name'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Last name
                                                </FormLabel>
                                                <Input {...field} id='lastname' onBlur={(e) => setHeading({ ...heading, lastname: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.lastname}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                <Field name='profession'>
                                    {({ field, form }: fieldFromType) => (
                                        <FormControl
                                            isInvalid={form.errors.profession}
                                            mt={"30px"}
                                        >
                                            <FormLabel
                                                htmlFor='Profession'
                                                fontSize={"13px"}
                                                fontWeight={"600"}
                                                lineHeight={"24px"}
                                                mb={"0"}
                                            >
                                                Profession
                                            </FormLabel>
                                            <Input {...field} id='profession' onBlur={(e) => setHeading({ ...heading, profession: e.target.value })} />
                                            {/* <FormErrorMessage>{form.errors.profession}</FormErrorMessage> */}
                                        </FormControl>
                                    )}
                                </Field>

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
                                                <Input {...field} id='city' onBlur={(e) => setHeading({ ...heading, city: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.city}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='state'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.state}>
                                                <FormLabel
                                                    htmlFor='State/Province'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    State/Province
                                                </FormLabel>
                                                <Input {...field} id='state' onBlur={(e) => setHeading({ ...heading, state: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.state}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                <Field name='pincode'>
                                    {({ field, form }: fieldFromType) => (
                                        <FormControl
                                            isInvalid={form.errors.pincode}
                                            mt={"30px"}
                                            width={"48%"}
                                        >
                                            <FormLabel
                                                htmlFor='Zip Code'
                                                fontSize={"13px"}
                                                fontWeight={"600"}
                                                lineHeight={"24px"}
                                                mb={"0"}
                                            >
                                                Zip Code
                                            </FormLabel>
                                            <Input {...field} id='pincode' onBlur={(e) => setHeading({ ...heading, pincode: e.target.value })} />
                                            {/* <FormErrorMessage>{form.errors.pincode}</FormErrorMessage> */}
                                        </FormControl>
                                    )}
                                </Field>

                                <HStack spacing={5} mt={"30px"}>
                                    <Field name='phone'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.phone}>
                                                <FormLabel
                                                    htmlFor='Phone'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Phone
                                                </FormLabel>
                                                <Input {...field} id='phone' onBlur={(e) => setHeading({ ...heading, phone: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.phone}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='email'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.email}>
                                                <FormLabel
                                                    htmlFor='Email Address'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Email Address
                                                </FormLabel>
                                                <Input {...field} id='email' onBlur={(e) => setHeading({ ...heading, email: e.target.value })} />
                                                {/* <FormErrorMessage>{form.errors.email}</FormErrorMessage> */}
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                <HStack spacing={5} mt={"30px"}>
                                    <Field name='github'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.github}>
                                                <FormLabel
                                                    htmlFor='Github'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Github
                                                </FormLabel>
                                                <Input {...field} id='github' onBlur={(e) => setHeading({ ...heading, github: e.target.value })} />
                                                <FormErrorMessage>{form.errors.github}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name='linkdin'>
                                        {({ field, form }: fieldFromType) => (
                                            <FormControl isInvalid={form.errors.linkdin}>
                                                <FormLabel
                                                    htmlFor='Linkdin'
                                                    fontSize={"13px"}
                                                    fontWeight={"600"}
                                                    lineHeight={"24px"}
                                                    mb={"0"}
                                                >
                                                    Linkdin
                                                </FormLabel>
                                                <Input {...field} id='linkdin' onBlur={(e) => setHeading({ ...heading, linkdin: e.target.value })} />
                                                <FormErrorMessage>{form.errors.linkdin}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </HStack>

                                <HStack spacing={5} mt={"30px"} justifyContent={"space-between"}>

                                    <Button
                                        color={"blue"}
                                        fontWeight={"400"}
                                        bgColor={"white"}
                                        border={"1px solid blue"}
                                        _active={{ border: '1px solid blue' }}
                                        _focus={{ border: '1px solid blue' }}
                                        onClick={() => setStep(-1)}
                                        borderRadius={'0'}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        colorScheme='red'
                                        type='submit'
                                        _active={{ border: 'none' }}
                                        _focus={{ border: 'none' }}
                                        borderRadius={'0'}
                                    >
                                        Next: Work History
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