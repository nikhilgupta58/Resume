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
                size={'5xl'}
            >
                <ModalOverlay />
                <ModalContent
                    minHeight={"825px"}
                    maxHeight={"850px"}
                    borderRadius="2px"
                >
                    <ModalCloseButton
                        right="5"
                        mt="2"
                        bgColor={"white"}
                        border={"none"}
                    />
                    <ModalBody p={"30px"}>
                        <Resume />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}