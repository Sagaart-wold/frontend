import {
  Typography,
  Button,
} from "@mui/material";

export function Test() {
  // const theme = useTheme();
  return (
    <>
      <Button variant="contained" disableElevation size="small">
        фтн
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        disableElevation
        size="medium"
      >
        фтн
      </Button>
      <Button variant="outlined" color="primary" disableElevation size="large">
        фтн
      </Button>
      <Typography variant="h1">Откройте заново мир искусства</Typography>
      <Typography variant="h2">Откройте заново мир искусства</Typography>
      <Typography variant="h3">Откройте заново мир искусства</Typography>
      <Typography variant="h4">Откройте заново мир искусства</Typography>
      <Typography variant="body1">Откройте заново мир искусства</Typography>
      <Typography variant="body2">Откройте заново мир искусства</Typography>
      <Typography variant="subtitle2">Откройте заново мир искусства</Typography>
    </>
  );
}

export default Test;
