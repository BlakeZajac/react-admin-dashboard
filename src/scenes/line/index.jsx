import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Line chart" subtitle="Simple line chart" />
      <Box
        height="75vh"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <LineChart />
      </Box>
    </Box>
  );
};

export default Bar;
