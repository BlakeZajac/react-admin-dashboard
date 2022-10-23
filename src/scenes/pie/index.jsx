import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Pie chart" subtitle="Simple pie chart" />
      <Box
        height="75vh"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
