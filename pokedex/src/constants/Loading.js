import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NewCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={60}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#fbab47" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={60}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function Loading() {
  return (
    <LoadingContainer>
      <NewCircularProgress />
    </LoadingContainer>
  );
}
