import { VStack, Box, Button, Text, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import * as React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import Resume from './Resume'

export default function Preview() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button
                m={"0px"}
                p={"0px 5px"}
                color={"blue.500"}
                backgroundColor={'transparent'}
                letterSpacing={"0.5px"}
                fontSize={"11px"}
                fontWeight={"600"}
                borderRadius={"3px"}
                border={"none"}
                h="30px"
                _hover={{ background: 'white' }}
                cursor={"pointer"}
                onClick={onOpen}
            >
                <AiOutlineEye
                    fontSize={"15px"}
                />
                <Text
                    m={"0 5px"}
                    p={'0px'}
                >
                    PREVIEW
                </Text>
            </Button>
            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior={'inside'}
                blockScrollOnMount={false}
            >
                <ModalOverlay />
                <ModalContent
                    borderRadius="2px"
                    h={'40vw'}
                    minW={'675px'}
                    maxW={'1018px'}
                    maxH={'891px'}
                    margin={'30px'}
                >
                    <ModalCloseButton
                        right="5"
                        mt="2"
                        bgColor={"white"}
                        border={"none"}
                        color={'#7b97ae'}
                        _active={{ border: 'none' }}
                        _focus={{ border: 'none' }}
                    />
                    <ModalBody
                        p={"30px"}
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '7px',
                                borderRadius: '10px',
                                backgroundColor: `rgba(0, 0, 0, 0.08)`,
                                boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                                padding: '1px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: `#7b97ae`,
                                padding: '1px',
                                boxShadow: '0 0 1px rgb(0 0 0 / 10%)',
                            },
                        }}
                    >
                        <Resume />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}