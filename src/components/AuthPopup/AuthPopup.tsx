import React from "react";
import { Drawer, IconButton, Box } from "@mui/material";
import { MenuPopupProps } from "../types";
import { Login } from "@components/Login";
import CloseIcon from "../svgIcons/CloseIcon";

export const AuthPopup: React.FC<MenuPopupProps> = ({
  openPopup,
  handleClosePopup,
}) => {
  return (
    <Drawer
      anchor="right"
      open={openPopup === "accountPopup"}
      onClose={handleClosePopup}
      PaperProps={{
        sx: {
          width: "642px",
          display: "grid",
          placeItems: "center",
          backgroundColor: "var(--white-text)",
          padding: "0 120px",
        },
      }}
    >
      <Box sx={{position: 'relative'}}>
        <IconButton
          aria-label="Корзина"
          type="button"
          color="primary"
          onClick={handleClosePopup}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 35,
            height: 35,
            position: 'fixed',
            top: '48px',
            right: '120px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Login />
      </Box>
    </Drawer>
  );
};
