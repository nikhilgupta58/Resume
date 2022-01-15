import { AddIcon, MinusIcon } from '@chakra-ui/icons';
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
    VStack,
}
    from '@chakra-ui/react';
import * as React from 'react'

export default function LabelDesc({ label, present, id, setDesc }: { label: string, present: number, id: number, setDesc: (e: number) => void }) {
    const [hovered, setHovered] = React.useState(false)
    const hoverColor = () => {
        if (present < 0 && hovered)
            return 'red.500'
        if (present >= 0 && hovered)
            return '#3983fa'
        if (present < 0 && !hovered)
            return '#3983fa'
        return 'red.500'
    }
    return (
        <HStack
            spacing={0}
            boxShadow={'0 0 10px rgb(88 88 95 / 15%)'}
            bgColor={'#fff'}
            border={'1px solid #e8ecf0'}
            color={'#46464e'}
            fontSize={'12px'}
            fontWeight={'400'}
            cursor={'pointer'}
            mb={'10px'}
            onMouseOut={() => setHovered(false)}
            onMouseOver={() => setHovered(true)}
            onClick={() => setDesc(id)}
        >
            <VStack
                bgColor={hoverColor()}
                _active={{ bgColor: hoverColor() }}
                borderRight={'1px solid #e8ecf0'}
                minHeight={'60px'}
                margin={'-1px 0 -1px -1px'}
                justifyContent={'center'}
                color={'white'}
                fontSize={'10px'}
            >
                {present < 0 ?
                    <AddIcon margin={'5px'} />
                    :
                    <MinusIcon margin={'5px'} />
                }
            </VStack>
            <Box
                px={'10px'}
            >
                {label}
            </Box>
        </HStack>)
}