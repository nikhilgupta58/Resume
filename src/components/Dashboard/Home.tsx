import * as React from "react";
import Header from "../Dashboard/Header";
import Heading from "../Heading/Heading";
import Work from "../Work/Work";
import { stepStore } from "../../store";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Summary from "../Summary/Summary";
import Finalize from "../Finalize";
import Footer from "./Footer";
import { VStack, Box, HStack, Button, Text } from "@chakra-ui/react";
import WorkHistory from "../Work/WorkHistory";
import Start from "../Start";

export default function Home() {
    const { step } = stepStore();
    return (
        <>
            <VStack justifyContent={"space-between"} minHeight={"100vh"}>
                <Box width={"100%"}>
                    <Header />
                    <HStack justifyContent={'center'}>
                        {step === -1 ? <Start />
                            : step === 0 ? <Heading />
                                : step === 1 ? <Work />
                                    : step === 2 ? <Education />
                                        : step === 3 ? <Skills />
                                            : step === 4 ? <Summary />
                                                : step === 5 ? <Finalize />
                                                    : null
                        }
                    </HStack>
                </Box>
                <Footer />
            </VStack>
        </>
    )
}