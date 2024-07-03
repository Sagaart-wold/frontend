import { SearchSectionProps } from "../types";
import {
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export const SearchSection: React.FC<SearchSectionProps> = () => {

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
    <section className="container">
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
                  </InputAdornment>
                ),
                endAdornment: field.value && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClearSearch}>
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
                },
              }}
            />
          )}
        />
        <Button
          variant="contained"
          disableElevation
          type="submit"
          size="medium"
          color="secondary"
        >
          Найти
        </Button>
      </Box>
    </section>
  );
};
