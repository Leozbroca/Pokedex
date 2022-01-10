import * as React from "react";
import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStateContext from "../../contexts/GlobalContextState";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbab47",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function PaginationOutlined() {
  const { setPaginaPoke, pagina, setPagina } = useContext(GlobalStateContext);

    const handleChange = (event, value) => {
        setPagina(value)
        switch(value){
            case 1:
                setPaginaPoke(0)
                break;
            case 2:
                setPaginaPoke(30)
                break;
            case 3:
                setPaginaPoke(60)
                break;
            case 4:
                setPaginaPoke(90)
                break;
            case 5:
                setPaginaPoke(120)
                break;
            case 6:
                setPaginaPoke(150)
                break;
            case 7:
                setPaginaPoke(180)
                break;
            case 8:
                setPaginaPoke(210)
                break;
            case 9:
                setPaginaPoke(240)
                break;
            case 10:
                setPaginaPoke(270)
                break;

            case 11:
                setPaginaPoke(300)
                break;
            case 12:
                setPaginaPoke(330)
                break;
            case 13:
                setPaginaPoke(360)
                break;
            case 14:
                setPaginaPoke(390)
                break;
            case 15:
                setPaginaPoke(420)
                break;
            case 16:
                setPaginaPoke(450)
                break;
            case 17:
                setPaginaPoke(480)
                break;
            case 18:
                setPaginaPoke(510)
                break;
            case 19:
                setPaginaPoke(540)
                break;
            case 20:
                setPaginaPoke(570)
                break;
            case 21:
                setPaginaPoke(600)
                break;

            case 22:
                setPaginaPoke(630)
                break;
            case 23:
                setPaginaPoke(660)
                break;
            case 24:
                setPaginaPoke(690)
                break;
            case 25:
                setPaginaPoke(720)
                break;
            case 26:
                setPaginaPoke(750)
                break;
            case 27:
                setPaginaPoke(780)
                break;
            case 28:
                setPaginaPoke(810)
                break;
            case 29:
                setPaginaPoke(840)
                break;
            case 30:
                setPaginaPoke(870)
                break;
        }
    };

  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2}>
      <Pagination count={30} page={pagina} onChange={handleChange} variant="outlined" color="primary" />
    </Stack>
    </ThemeProvider>
  );
}
