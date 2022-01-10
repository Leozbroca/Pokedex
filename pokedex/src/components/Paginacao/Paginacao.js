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
    setPagina(value);
    switch (value) {
      case 1:
        setPaginaPoke(0);
        break;
      case 2:
        setPaginaPoke(30);
        break;
      case 3:
        setPaginaPoke(60);
        break;
      case 4:
        setPaginaPoke(90);
        break;
      case 5:
        setPaginaPoke(120);
        break;
      case 6:
        setPaginaPoke(150);
        break;
      case 7:
        setPaginaPoke(180);
        break;
      case 8:
        setPaginaPoke(210);
        break;
      case 9:
        setPaginaPoke(240);
        break;
      case 10:
        setPaginaPoke(270);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={pagina}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
}
