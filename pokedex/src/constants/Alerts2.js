import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import GlobalStateContext from "../contexts/GlobalContextState";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars2() {

  const {openRelease, setOpenRelease, pokeSnack, pokeSnackRelease} = React.useContext(GlobalStateContext)
  const vertical = 'bottom'
  const horizontal = 'left'


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenRelease(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={openRelease}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {pokeSnackRelease} was released!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
