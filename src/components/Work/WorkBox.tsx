import { Box, Button, HStack, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { BiPencil } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import WorkCard from './WorkCard'
import { userStore, stepStore } from '../../store'

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

export default function WorkBox({ data, id, setEditId }: { id: number, data: Work, setEditId: (e: number) => void }) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <>
            <HStack
                my={'10px'}
                width={'100%'}
                border={'1px solid #e8ecf0'}
                alignItems={'flex-start'}
                height={'150px'}
                spacing={0}
            >
                <Box
                    border={'1px solid'}
                    padding={'2px 30px 20px 5px'}
                    m='0px'
                    bgColor={'blue.600'}
                    color={'white'}
                    backgroundImage={'linear-gradient(130deg, #007bff 45%, white 50%)'}
                >
                    {id + 1}
                </Box>
                <Box
                    height={'120px'}
                    width={'100%'}
                    alignSelf={'flex-end'}
                    overflow={'hidden'}
                    cursor={'pointer'}
                    onClick={() => setEditId(data?.id)}
                >
                    <HStack>
                        <Text
                            color={'#58585f'}
                            fontSize={'14px'}
                            fontWeight={'600'}
                        >
                            {data?.jobTitle}, {data?.employer}
                        </Text>
                        {data?.city !== '' ?
                            <Text
                                color={'#58585f'}
                                fontSize={'14px'}
                            >
                                | {data?.city}, {data?.state}
                            </Text>
                            : null}
                        {data?.startDate !== '' ?
                            <Text
                                color={'#58585f'}
                                fontSize={'14px'}
                            >
                                | {data?.startDate.split('-')[0]} - {data?.endDate === '' ? 'Current' : data?.endDate.split('-')[0]}
                            </Text>
                            : null}
                    </HStack>
                    <UnorderedList
                        fontSize={'12px'}
                        lineHeight={'17px'}
                        fontWeight={'400'}
                        color={'#706668'}
                        m='0px'
                    >
                        {data?.desc.map((e: string, id: number) => (
                            <ListItem key={id}>{e}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
                <HStack spacing={'0'}>
                    <Button
                        bgColor={'white'}
                        border={'none'}
                        fontSize={'15px'}
                        m={'0'}
                        p={'0'}
                        color={'#007bff'}
                        cursor={'pointer'}
                        _focus={{ border: 'none' }}
                        _hover={{ background: 'white' }}
                        onClick={() => setEditId(data?.id)}
                    >
                        <BiPencil />
                    </Button>
                    <Button
                        bgColor={'white'}
                        border={'none'}
                        fontSize={'15px'}
                        m={'0'}
                        p={'0'}
                        color={'#007bff'}
                        cursor={'pointer'}
                        _hover={{ background: 'white' }}
                        _focus={{ border: 'none' }}
                        onClick={() => onOpen()}
                    >
                        <AiOutlineDelete />
                    </Button>
                </HStack>
            </HStack>
            <DeleteWork isOpen={isOpen} onClose={onClose} id={data?.id} />
        </>
    )
}

const DeleteWork = ({ isOpen, onClose, id }: { isOpen: any, onClose: any, id: number }) => {
    const { removeWork } = userStore();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
                <ModalOverlay />
                <ModalContent border={"1px solid gray.900"}>
                    <ModalCloseButton background={'transparent'} border={'none'} />
                    <ModalBody>
                        <Text p="0px" mb="10px" fontSize={"28px"}>Delete this entry?</Text>
                        <Text p="0px" mt="0px">This can't be undone.</Text>
                        <HStack py="20px" spacing={5}>
                            <Button
                                p="20px"
                                color={"blue"}
                                fontWeight={"400"}
                                bgColor={"white"}
                                border={"1px solid blue"}
                                onClick={() => onClose()}
                            >
                                CANCEL
                            </Button>
                            <Button
                                p="20px 40px"
                                color={"white"}
                                fontWeight={"400"}
                                bgColor={"red"}
                                border={"1px solid red"}
                                _hover={{ background: 'red.700' }}
                                onClick={() => removeWork(id)}
                            >
                                DELETE
                            </Button>
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}