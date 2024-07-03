// import React from 'react';
import { SearchSectionProps } from "../types"; // TODO
import {
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
// import styles from "./index.module.css";

// {
//   isShowSearchSection,
//   handleOpenSearchPopup,
// }
export const SearchSection: React.FC<SearchSectionProps> = () => {
  // запрос к серверу, получение карточек и рекомендаций, затем загрузка

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: { search: string }) => {
    console.log(data, "поиск");
  };

  const handleClearSearch = () => {
    reset({ search: "" });
  };

  return (
    <div className='container'>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Искать по названию, художнику"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
                endAdornment: field.value && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClearSearch}>
                      {/* <CloseIcon /> */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  paddingRight: 0,
                },
                "& .MuiInputBase-input": {
                  // padding: '10px 14px',
                },
              }}
            />
          )}
        />
        <Button variant="contained" disableElevation type="submit" size="medium" color="secondary">
          {" "}
          {/*sx={{ marginLeft: 2 }} */}
          Найти
        </Button>
      </Box>
    </div>
  );
};
