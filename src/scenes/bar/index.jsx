import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple bar chart" />
      <Box
        height="75vh"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
