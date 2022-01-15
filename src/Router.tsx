import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import Home from "./components/Dashboard/Home";
import Start from "./components/Start";

const NoMatch = () => {
    return (
        <SimpleGrid placeItems="center" w="100vw" h="100vh" bgColor="tt.offwhite">
            404 - Not Found
        </SimpleGrid>
    );
};
function Router() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    function handleResize() {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth])
    if (dimensions.width < 700) {
        return (
            <SimpleGrid placeItems="center" w="100vw" h="100vh" bgColor="tt.offwhite">
                Please open in desktop
            </SimpleGrid>
        )
    }
    return (
        <Home />
    );
}

export default Router;
