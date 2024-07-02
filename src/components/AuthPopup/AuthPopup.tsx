// import React from "react";
import { Button, Drawer } from "@mui/material";
import { MenuPopupProps } from "../types";

export const AuthPopup: React.FC<MenuPopupProps> = ({ //TODO необходима стилизация
  openPopup,
  handleClosePopup,
}) => {
  return (
    <Drawer
      anchor="right"
      open={openPopup === "accountPopup"}
      onClose={handleClosePopup}
    >
      <Button onClick={handleClosePopup} color="primary">
        Close
      </Button>
    </Drawer>
  );
};
