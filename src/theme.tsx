import { extendTheme } from "@chakra-ui/react"
// import { mode } from "@chakra-ui/theme-tools"

/*
const tweeterBlue = " #1DA1F2";
const tweeterGray = "#38444D";
const tweeterBlack = "#000000";
const tweeterWhite = "#FFFFFF";
*/
let theme = extendTheme({
    fonts: {
        heading: "Open Sans",
        body: "Inter"
    },
    styles: {
        global: (props: any) => ({
            body: {
                // bg: mode(tweeterGray, tweeterBlue)(props),
                // color: mode(tweeterWhite, tweeterBlack)(props)
                width: "100%",
            }
        })
    },
})


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

theme = extendTheme({ config })

export default theme;