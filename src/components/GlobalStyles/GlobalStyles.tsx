import { GlobalStyles } from "@mui/material";
import React from "react";

interface MyProps {
  children: React.ReactNode;
}

export const MyGlobalStyles: React.FC<MyProps> = ({ children }) => (
  <>
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          // border: "1px solid red",
        },
        ".container": {
          // далее стили container из компонента main TODO удалить если они больше нигде не используются
          // width: "100%",
          // height: "100vh",
          // paddingInline: "120px",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // position: "relative",
          // paddingBottom: "64px",
          //стили container из компонента main
          margin: '177px 0',
          padding: "48px 120px", //120px
          display: "flex",
          position: "fixed",
          backgroundColor: "transparent",
          alignItems: "center",
          width: "100%",
        },
        ".root": {
          minHeight: "100vh",
        },
        body: {
          margin: 0,
          padding: 0,
          fontOpticalSizing: "auto",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTextSizeAdjust: "100%",
          msTextSizeAdjust: "100%",
          MozTextSizeAdjust: "100%",
          textRendering: "optimizeSpeed",
          scrollBehavior: "smooth",
        },
        ul: {
          listStyle: "none",
        },
        /* Удаляем все анимации и переходы для людей, которые предпочитают их не использовать */
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
          },
        },
        ":any-link": {
          textDecoration: "none",
        },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus": {
          WebkitTextFillColor: "white",
          WebkitBoxShadow: "0 0 0px 1000px #bcc3d0 inset",
          transition: "background-color 5000s ease-in-out 0.2s",
        },
        img: {
          display: "block",
        },
      }}
    />
    {children}
  </>
);
