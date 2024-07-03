import { MenuList, MenuItem, Button, Drawer, Typography } from "@mui/material";
import { MenuPopupProps } from "../types";

export const MenuPopup: React.FC<MenuPopupProps> = ({
  openPopup,
  handleClosePopup,
}) => {
  return (
    <Drawer open={openPopup === "menuIcon"} onClose={handleClosePopup}>
      <Button onClick={handleClosePopup} color="primary">
        Close
      </Button>

      <MenuList
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "522px",
        }}
      >
        <MenuItem>
          <Typography variant="h4" sx={{ textAlign: "left", width: "260px" }}>
            Каталог
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h4" sx={{ textAlign: "left", width: "260px" }}>
            Художники
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h4" sx={{ textAlign: "left", width: "260px" }}>
            Новости
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h4" sx={{ textAlign: "left", width: "260px" }}>
            Аналитика
          </Typography>
        </MenuItem>
      </MenuList>
    </Drawer>
  );
};
