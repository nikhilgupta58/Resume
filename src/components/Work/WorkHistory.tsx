import {
    Box,
    Button,
    Input,
    Stack,
    Text,
    HStack,
}
    from '@chakra-ui/react';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import Preview from '../Preview';
import { GrAddCircle } from 'react-icons/gr'
import Work from './Work';
import WorkBox from './WorkBox';
import WorkCard from './WorkCard';
import Education from '../Education/Education';

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

export default function WorkHistory() {
    const [edit, setEdit] = React.useState(-1)
    const [add, setAdd] = React.useState(-1)
    const { setStep, step } = stepStore()
    const { work, setWork } = userStore()
    function order(a: Work, b: Work): number {
        return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
    }
    function highestWorkId() {
        let id = -1
        work?.map((e) => {
            if (id < e?.id)
                id = e?.id
        })
        return id
    }
    const setEditId = (e: number) => {
        setEdit(e)
    }
    if (add != -1) {
        return (<WorkCard id={highestWorkId()+1} title={'Tell us about another job'} subtitle={'We’ll put your work history in the right order.'} />)
    }

    else if (edit != -1)
        return (<WorkCard id={edit} title={'Review or edit this job'} subtitle={'Start with your most recent job and work backward.'} />)
    else
        return (
            <Box m={'15px'} width={{ lg: '50vw', md: '70vw' }}>
                <HStack mb={'30px'} justifyContent={"space-between"}>
                    <Box
                        pr={"100px"}
                    >
                        <Text
                            fontSize={{ lg: "25px" }}
                            color={"#3983fa"}
                            m={'10px 0 5px 0'}
                        >
                            Work History summary
                        </Text>

                    </Box>
                    <Preview />
                </HStack>

                <Box>
                    {work.sort(order).map((e, id) => (
                        <WorkBox key={id} id={id} data={e} setEditId={setEditId} />
                    ))}
                    <HStack
                        width={'100%'}
                        border={'1px dashed'}
                        justifyContent={'center'}
                        bgColor={"gray.100"}
                        color={'#3983fa'}
                        fontWeight={'bold'}
                        fontSize={'15px'}
                        alignItems={'center'}
                        py={'15px'}
                        mt={'25px'}
                        _hover={{ background: 'gray.300' }}
                        cursor={'pointer'}
                        onClick={() => {
                            setAdd(work.length)
                        }}
                    >
                        <GrAddCircle />
                        <Text>ADD ANOTHER POSITION</Text>
                    </HStack>
                </Box>

                <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                    <Button
                        color={"blue"}
                        fontWeight={"400"}
                        bgColor={"white"}
                        border={"1px solid blue"}
                        onClick={() => setStep(0)}
                        px="40px"
                        _active={{border:'1px solid blue'}}
                        _focus={{border:'1px solid blue'}}
                    >
                        Back
                    </Button>

                    <Button
                        colorScheme='red'
                        type='submit'
                        onClick={() => {
                                setStep(2)
                        }}
                        px="40px"
                        _active={{border:'none'}}
                        _focus={{border:'none'}}
                    >
                        Next: Education
                    </Button>

                </HStack>
            </Box>
        )
}