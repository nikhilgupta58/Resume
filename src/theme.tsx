import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

type UnpackArray<T> = T extends (infer U)[] ? U : T;

const browserContext = 16;
const ViewportWidthXSmall = 375;
const ViewportWidthSmall = 640;
const ViewportWidthMedium = 768;
const ViewportWidthLarge = 1024;
const ViewportWidthXLarge = 1280;
const ViewportWidthXXLarge = 1536;

const breakpointEm = {
    xs: `${ViewportWidthXSmall / browserContext}em`,
    sm: `${ViewportWidthSmall / browserContext}em`,
    md: `${ViewportWidthMedium / browserContext}em`,
    lg: `${ViewportWidthLarge / browserContext}em`,
    xl: `${ViewportWidthXLarge / browserContext}em`,
    xxl: `${ViewportWidthXXLarge / browserContext}em`,
};
const breakpoints = createBreakpoints(breakpointEm);

const theme = extendTheme({
    breakpoints,
    fonts: {
        body: `'Sen', sans-serif;`,
        heading: `'Sen', sans-serif;`,
        th: `'Sen', sans-serif;`,
        // body: `'Inter', sans-serif;`,
    },
    colors: {
        "tt.primary": "#125DF5",
        "tt.offwhite": "#F5F7FB",
        "tt.grey": "#6F749A",
    },
    config: {
        initialColorMode: "light",
    },
    styles: {
        global: {
            'html,body': {
                margin: '0',
                padding: '0'
            },
            '*': {
                boxSizing: 'border-box',
            },
            'body': {
                minHeight: '100vh'
            }
        }
    }
});

export default theme;
