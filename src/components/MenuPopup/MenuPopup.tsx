// import React from "react";
import { MenuList, MenuItem, Button, Drawer } from "@mui/material";
import { MenuPopupProps } from "../types";

export const MenuPopup: React.FC<MenuPopupProps> = ({ //TODO необходима стилизация
  openPopup,
  handleClosePopup,
}) => {
  return (
    <Drawer open={openPopup === "menuIcon"} onClose={handleClosePopup}>
      <Button onClick={handleClosePopup} color="primary">
        Close
      </Button>

      <MenuList>
        <MenuItem>Каталог</MenuItem>
        <MenuItem>Художники</MenuItem>
        <MenuItem>Новости</MenuItem>
        <MenuItem>Аналитика</MenuItem>
      </MenuList>
    </Drawer>
  );
};
