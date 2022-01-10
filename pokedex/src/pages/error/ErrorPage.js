import { React } from "react";
import { Typography } from "@mui/material";
import { ErrorPageContainer, ErrorImage } from "./styled";
import error from "../../assets/error.jpg";
import Header from "../../components/header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <ErrorPageContainer>
        <ErrorImage src={error} />
        <Typography variant={"h4"} align={"center"}>
          Error 404 - Page not found!
        </Typography>
      </ErrorPageContainer>
    </div>
  );
};

export default ErrorPage;
