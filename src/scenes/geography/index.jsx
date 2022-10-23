import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geographic chart" subtitle="Simple geographic chart" />
      <Box
        height="75vh"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
