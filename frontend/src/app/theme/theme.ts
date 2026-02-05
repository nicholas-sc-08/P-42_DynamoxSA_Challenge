import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#70163c",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#e2ad3e",
            contrastText: "#000000"
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff"
        },
    },
    typography: {
        fontFamily: "inherit",
        h4: {
            fontWeight: 600,
            color: "#70163c"
        }
    }
});