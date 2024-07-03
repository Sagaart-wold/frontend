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
        },
        ".container": {
          margin: '177px 0',
          padding: "48px 120px",
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
        /* Remove all animations and transitions for people who prefer not to use them */
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
