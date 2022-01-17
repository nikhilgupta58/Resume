import { VStack, Box, Text, HStack, UnorderedList, ListItem } from '@chakra-ui/react'
import * as React from 'react'
import { date } from 'yup'
import { userStore } from '../store'

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

interface Education {
    name: string,
    location: string,
    degree: string,
    field: string,
    startDate: string,
    endDate: string,
    desc: string[]
}

export default function Resume() {
    const { heading, education, section, skill, work, summary } = userStore()
    const address = () => {
        if (heading?.city != '' && heading?.state != '' && heading?.pincode != '')
            return heading?.city + ", " + heading?.state + ", " + heading?.pincode
        else if (heading?.city != '' && heading?.state != '')
            return heading?.city + ", " + heading?.state
        else if (heading?.city != '' && heading?.pincode != '')
            return heading?.city + ", " + heading?.pincode
        return heading?.city
    }
    return (
        <VStack
            alignItems={'flex-start'}
            spacing={0}
            h='100%'
            bgColor={'#f4f4f4'}
        >
            <Box
                bgColor={'#343434'}
                w='100%'
                color={'#9b9b9b'}
                p={'15px 15px 20px'}
                h='100%'
            >
                <Text
                    fontSize={'36px'}
                    lineHeight={'39px'}
                    fontWeight={'700'}
                    m='10px 0px'
                >
                    {heading?.firstname} {heading?.lastname}
                </Text>
                <Text
                    fontSize={'18px'}
                    m='0'
                    p='7px 0px 0px'
                >
                    {heading?.profession}
                </Text>
            </Box>
            <HStack width={'100%'} h='100%'>
                <Box
                    width={'70%'}
                    letterSpacing={'0.2px'}
                    padding={'15px'}
                    color={'#9b9b9b'}
                    alignSelf={'flex-start'}
                    bgColor={'white'}
                >
                    {summary != '' ?
                        <Text
                            fontSize={'11px'}
                            lineHeight={'18px'}
                        >{summary}</Text>
                        : null}
                    {work.length > 0 ?
                        <Box
                            p={'20px 0px 0px'}
                        >
                            <Text
                                color={'#373d48'}
                                fontSize={'16px'}
                                lineHeight={'22px'}
                                fontWeight={'700'}
                                borderBottom={'1px solid #d5d6d6'}
                                p='0'
                                m='0'
                            >
                                Work History
                            </Text>
                            {work.map((e, id) => (
                                <WorkBoxing key={id} data={e} />
                            ))}
                        </Box>
                        : null}

                    {education?.name != '' ?
                        <Box
                            p={'20px 0px 0px'}
                        >
                            <Text
                                color={'#373d48'}
                                fontSize={'16px'}
                                lineHeight={'22px'}
                                fontWeight={'700'}
                                borderBottom={'1px solid #d5d6d6'}
                                p='0'
                                m='0'
                            >
                                Education
                            </Text>
                            <EducationBoxing data={education} />
                        </Box>
                        : null}

                    {section?.map((e, id) => (
                        <Box
                            p={'20px 0px 0px'}
                        >
                            <Text
                                color={'#373d48'}
                                fontSize={'16px'}
                                lineHeight={'22px'}
                                fontWeight={'700'}
                                borderBottom={'1px solid #d5d6d6'}
                                p='0'
                                m='0'
                            >
                                {e?.name}
                            </Text>

                            <UnorderedList
                                fontSize={'11px'}
                                lineHeight={'18px'}
                                color={'#9b9b9b'}
                                p={'0px 15px'}
                            >
                                {e?.desc.map((e: any, id: number) => (
                                    <ListItem key={id}>{e}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                    ))}

                </Box>
                <Box
                    width={'30%'}
                    bgColor={'#f4f4f4'}
                    letterSpacing={'0.2px'}
                    padding={'15px'}
                    color={'#373d48'}
                    alignSelf={'flex-start'}
                >
                    <Box>
                        <Text
                            fontSize={'16px'}
                            lineHeight={'22px'}
                            fontWeight={'700'}
                            m={'0px 0px 10px'}
                            p={'0px 0px 3px'}
                            borderBottom={'1px solid #d5d6d6'}
                        >
                            Contact
                        </Text>
                        {heading?.city != '' ?
                            <>
                                <Text
                                    fontSize={'11px'}
                                    letterSpacing={'0.2px'}
                                    fontWeight={'bold'}
                                    color={'#343434'}
                                    m='2px 0px'
                                >
                                    Address
                                </Text>
                                <Text
                                    fontSize={'11px'}
                                    color={'#343434'}
                                    lineHeight={'18px'}
                                    m='0'
                                >
                                    {address()}
                                </Text>
                            </>
                            : null}
                        <Text
                            fontSize={'11px'}
                            letterSpacing={'0.2px'}
                            fontWeight={'bold'}
                            color={'#343434'}
                            m='15px 0px 2px 0px'
                        >
                            E-mail
                        </Text>
                        <Text
                            fontSize={'11px'}
                            color={'#343434'}
                            lineHeight={'18px'}
                            m='0'
                        >
                            {heading?.email}
                        </Text>
                    </Box>
                    {skill.length > 0 ?
                        <Box padding={'20px 0px 0px'} >
                            <Text
                                fontSize={'16px'}
                                lineHeight={'22px'}
                                fontWeight={'700'}
                                m={'0px 0px 10px'}
                                p={'0px 0px 3px'}
                                borderBottom={'1px solid #d5d6d6'}
                            >
                                Skills
                            </Text>

                            <UnorderedList
                                fontSize={'11px'}
                                lineHeight={'18px'}
                                color={'#9b9b9b'}
                                m={'0px 0px 10px'}
                                p={'0px 15px 3px'}
                            >
                                {skill?.map((e: any, id: number) => (
                                    <ListItem key={id}>{e?.name}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                        : null}
                </Box>
            </HStack>
        </VStack>
    )
}

const WorkBoxing = ({ data }: { data: Work }) => {
    const date = () => {
        if (data?.startDate != '') {
            if (data?.endDate != '')
                return '' + data?.startDate + ' - \n' + data?.endDate
            return '' + data?.startDate + ' - \n' + 'Current'
        }
        return ''
    }
    return (
        <>
            <HStack>
                <Box
                    w={'15%'}
                    fontWeight={'bold'}
                    alignSelf={'flex-start'}
                    pr={'10px'}
                >
                    <Text
                        fontSize={'11px'}
                    >
                        {date()}
                    </Text>
                </Box>
                <Box
                    w={'85%'}
                    alignSelf={'flex-start'}
                >
                    <Text
                        fontWeight={'bold'}
                        p='0'
                        mb={'2px'}
                        fontSize={'14px'}
                    >
                        {data?.jobTitle}
                    </Text>
                    <HStack justifyContent={'space-between'}>
                        <Text
                            fontSize={'11px'}
                            m='0'
                            p='0'
                        >
                            {data?.employer}
                        </Text>
                        <Text
                            fontSize={'11px'}
                            m='0'
                            p='0'
                            pr={'100px'}
                        >
                            {data?.city}
                        </Text>
                    </HStack>
                    <UnorderedList
                        fontSize={'11px'}
                        lineHeight={'18px'}
                        color={'#9b9b9b'}
                        p={'0px 15px'}
                    >
                        {data?.desc.map((e: any, id: number) => (
                            <ListItem key={id}>{e}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </HStack>
        </>
    )
}

const EducationBoxing = ({ data }: { data: Education }) => {
    const date = () => {
        if (data?.startDate != '') {
            if (data?.endDate != '')
                return '' + data?.startDate + ' - \n' + data?.endDate
            return '' + data?.startDate + ' - \n' + 'Current'
        }
        return ''
    }
    return (
        <>
            <HStack>
                <Box
                    w={'15%'}
                    fontWeight={'bold'}
                    alignSelf={'flex-start'}
                    pr={'10px'}
                >
                    <Text
                        fontSize={'11px'}
                    >
                        {date()}
                    </Text>
                </Box>
                <Box
                    w={'85%'}
                    alignSelf={'flex-start'}
                >
                    <Text
                        fontWeight={'bold'}
                        p='0'
                        mb={'2px'}
                        fontSize={'14px'}
                    >
                        {data?.degree}: {data?.field}
                    </Text>
                    <HStack justifyContent={'space-between'}>
                        <Text
                            fontSize={'11px'}
                            m='0'
                            p='0'
                        >
                            {data?.name}
                        </Text>
                        <Text
                            fontSize={'11px'}
                            m='0'
                            p='0'
                            pr={'100px'}
                        >
                            {data?.location}
                        </Text>
                    </HStack>
                    <UnorderedList
                        fontSize={'11px'}
                        lineHeight={'18px'}
                        color={'#9b9b9b'}
                        p={'0px 15px'}
                    >
                        {data?.desc.map((e: any, id: number) => (
                            <ListItem key={id}>{e}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </HStack>
        </>
    )
}