// import React from 'react';
import styles from "./index.module.css";
import BagIcon from "../svgIcons/BagIcon";
import MenuIcon from "../svgIcons/MenuIcon";
// import user_icon from "@assets/user_header.svg";
import AccountIcon from "../svgIcons/AccountIcon";
import IconButton from "@mui/material/IconButton";
import { MenuPopup } from "../MenuPopup/MenuPopup";
import { AuthPopup } from "../AuthPopup/AuthPopup";
import { HeaderProps } from "../types";
import { Badge, Box, Typography } from "@mui/material";
import { SearchInput } from "@components/ui/SearchInput";
import backgroundImage from "../../assets/Layout.png";

export const Header: React.FC<HeaderProps> = ({
  handleOpenPopup, // функция, открывающая попап
  handleClosePopup,
  openPopup, // стейт, хранящий id попапа, который нужно открыть
  isShowSearchSection,
  handleOpenSearchPopup,
}) => {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        "&::before": {
          content: !isShowSearchSection ? '""' : "none",
          position: "absolute",
          background: `url(${backgroundImage}) center no-repeat`,
          backgroundSize: "cover",
          width: "100%",
          height: "1080px",
          zIndex: -2,
        },
        "&::after": {
          content: !isShowSearchSection ? '""' : "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1080px",
          background: "rgba(17, 19, 24, 0.35)",
          zIndex: -1,
        },
      }}
    >
      <div className={styles.container}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            background: "transparent",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="Корзина"
              type="button"
              color="secondary"
              onClick={() => handleOpenPopup("menuIcon")}
            >
              <MenuIcon
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </IconButton>
            <MenuPopup
              openPopup={openPopup}
              handleClosePopup={handleClosePopup}
            />
            <Typography
              variant="h2"
              color="secondary"
              sx={{
                fontFamily: "Montserrat, Roboto, Inter, sans-serif",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              ȘAGAART
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {/* Hide the search bar if the Search section is displayed. */}
            {!isShowSearchSection ? (
              <div className={styles.input_container}>
                <SearchInput
                  variant="search"
                  placeholder="Искать по названию, художнику"
                  icon="search"
                  onClick={() => handleOpenSearchPopup()}
                />
              </div>
            ) : (
              ""
            )}

            <div className={styles.user_container}>
              <Badge badgeContent={4} color="secondary">
                <IconButton
                  aria-label="Корзина"
                  type="button"
                  color="secondary"
                  onClick={() => console.log("корзина открыта")}
                >
                  <BagIcon
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </IconButton>
              </Badge>

              <IconButton
                aria-label="Корзина"
                type="button"
                color="secondary"
                onClick={() => handleOpenPopup("accountPopup")}
              >
                <AccountIcon
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </IconButton>

              <AuthPopup
                openPopup={openPopup}
                handleClosePopup={handleClosePopup}
              />
            </div>
          </Box>
        </Box>
      </div>
    </Box>
  );
};
