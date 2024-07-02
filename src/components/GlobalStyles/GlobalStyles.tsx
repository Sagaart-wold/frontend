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
        ".root": {
          minHeight: "100vh",
        },
        body: {
          margin: 0,
          padding: 0,
          fontOpticalSizing: "auto",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
          webkitTextSizeAdjust: "100%",
          msTextSizeAdjust: "100%",
          mozTextSizeAdjust: "100%",
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
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus': {
          WebkitTextFillColor: 'white',
          WebkitBoxShadow: '0 0 0px 1000px #bcc3d0 inset',
          transition: 'background-color 5000s ease-in-out 0.2s',
        },
        img: {
          display: 'block',
        }
      }}
    />
    {children}
  </>
);
