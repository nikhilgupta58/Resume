import {
    Box,
    Button,
    Text,
    HStack,
    VStack,
    Input,
    Textarea,
    Checkbox,
}
    from '@chakra-ui/react';
import * as React from 'react'
import { stepStore, userStore } from "../../store";
import Preview from '../Preview';


export default function Section({ setSection: setSectionCheck }: { setSection: (e: boolean) => void }) {
    const { setStep, step } = stepStore();
    const { summary, setSummary } = userStore();
    const { section, setSection, removeSection } = userStore()

    const list =
        [
            'Accomplishments',
            'Affiliations',
            'Additional Information',
            'Software',
            'Languages',
            'Certifications',
            'Interests'
        ]
    const customSection = React.useRef<HTMLInputElement>(null);
    const [check, setCheck] = React.useState(false)
    const [customValue, setCustomValue] = React.useState('')
    React.useEffect(() => {
        section.map((e) => {
            if (customSection.current?.value === e.name)
                setCheck(true)
        })
    }, [check])
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
                            Do you have anything else to add?
                        </Text>
                        <Text
                            fontSize={"18px"}
                            color={"#666"}
                            my={'0px'}
                        >
                            These sections are optional.
                        </Text>
                    </Box>
                    <Preview />
                </HStack>
                <Box
                    p="40px 10px 0 0"
                >
                    <HStack spacing={200}>
                        <VStack alignItems={'flex-start'} spacing={7}>
                            {list.map((e, id) => (
                                <AddSection key={id} data={e} />
                            ))}
                        </VStack>

                        <Box
                            alignSelf={'flex-start'}
                        >
                            <Text
                                fontWeight={'600'}
                                color={'#545454'}
                                lineHeight={'24px'}
                                fontSize={'15px'}
                                mb={'0px'}
                            >
                                Add your own
                            </Text>
                            <HStack>
                                <Checkbox
                                    value={customSection.current?.value} isChecked={check}
                                    spacing={'20px'}
                                    onChange={(e) => {
                                        if (check) {
                                            removeSection(typeof (customSection.current?.value) === 'string' ? customSection.current?.value : '')
                                            setCheck(false)
                                        }
                                        else {
                                            if (customSection.current?.value != '') {
                                                setSection({ name: typeof (customSection.current?.value) === 'string' ? customSection.current?.value : '', desc: [] })
                                                setCheck(true)
                                            }
                                        }
                                    }}
                                />
                                <Input ref={customSection} placeholder='E.g. Hoobies' value={customValue} onChange={(e) => setCustomValue(e.target.value)} />
                            </HStack>
                        </Box>
                    </HStack>
                    <HStack spacing={5} mt={"50px"} justifyContent={"space-between"}>

                        <Button
                            color={"blue"}
                            fontWeight={"400"}
                            bgColor={"white"}
                            border={"1px solid blue"}
                            onClick={() => {
                                setSectionCheck(false)
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
                                // setStep(4)
                            }}
                            px="40px"
                            _active={{ border: 'none' }}
                            _focus={{ border: 'none' }}
                        >
                            Next
                        </Button>

                    </HStack>

                </Box>
            </Box>
        </>
    )
}

const AddSection = ({ data }: { data: string }) => {
    const [check, setCheck] = React.useState(false)
    const { section, setSection, removeSection } = userStore()
    React.useEffect(() => {
        section.map((e) => {
            if (data === e.name)
                setCheck(true)
        })
    }, [check])
    return (
        <Checkbox
            isChecked={check}
            value={data}
            spacing={'20px'}
            onChange={(e) => {
                if (check) {
                    removeSection(data)
                    setCheck(false)
                }
                else {
                    setSection({ name: data, desc: [] })
                    setCheck(true)
                }
            }}
        >
            {data}
        </Checkbox>
    )
}