import {
    HStack,
    Text,
    Box,
    Stack
} from "@chakra-ui/react";
import * as React from "react";
import { stepStore } from "../../store";

export default function Header() {
    const heading = ['HEADING', 'WORK HISTORY', 'EDUCATION', 'SKILLS', 'SUMMARY', 'FINALIZE']
    const { step } = stepStore();
    console.log("step" + step);

    return (
        <Stack
            boxShadow={"2px 2px 2px rgb(0 0 0 / 16%)"}
            justifyContent={'space-around'}
            direction={'row'}
            alignItems={'center'}
            width={"100%"}
        >
            <Text
                fontWeight={"bold"}
                fontSize={"20px"}
                p={"5px"}
            >
                Resume
            </Text>
            <Box
                fontSize={"12px"}
            >
                <HStack
                    flexWrap={"wrap"}
                >
                    {heading.map((e, i) => (
                        <HStack
                            key={i}
                            spacing={1}
                            fontWeight={"bold"}
                        >
                            <Box
                                border={`2px solid ${i <= step ? '#15ac31' : '#d5dae1'}`}
                                borderRadius={"100%"}
                                p={"0px 4px"}
                                fontSize={"10px"}
                                color={i <= step ? step === i ? 'white' : '#15ac31' : '#d5dae1'}
                                bgColor={step === i ? '#15ac31' : 'white'}
                            >{i + 1}</Box>
                            <Text
                                color={i <= step ? '#46464e' : '#d5dae1'}
                            >{e}</Text>
                            {i !== (heading.length - 1) ?
                                <Text
                                    width={"50px"}
                                    border={`1px solid ${i <= step ? '#15ac31' : '#d5dae1'}`}
                                ></Text>
                                : null}
                        </HStack>
                    ))}
                </HStack>
            </Box>
        </Stack>
    )
}