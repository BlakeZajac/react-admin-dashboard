import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";
import { Routes, Route } from "react-router-dom";
import Contacts from "../contacts";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions." />

      <Accordion
        defaultExpanded
        sx={{
          borderRadius: "10px !important",
          borderTop: "none !important",
          backgroundColor: colors.primary[400],
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How can I view and manage my team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              "& a": {
                color: colors.greenAccent[500],
                margin: "0 5px",
              },
            }}
          >
            You can head over to the
            <a href="/contacts" target="_blank">
              Manage Team
            </a>
            page to view and manage your team.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{
          borderRadius: "5px",
          backgroundColor: colors.primary[400],
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How can I view and manage my team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              "& a": {
                color: colors.greenAccent[500],
                margin: "0 5px",
              },
            }}
          >
            You can head over to the
            <a href="/contacts" target="_blank">
              Manage Team
            </a>
            page to view and manage your team.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{
          borderRadius: "5px",
          backgroundColor: colors.primary[400],
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How can I view and manage my team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              "& a": {
                color: colors.greenAccent[500],
                margin: "0 5px",
              },
            }}
          >
            You can head over to the
            <a href="/contacts" target="_blank">
              Manage Team
            </a>
            page to view and manage your team.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{
          borderRadius: "5px",
          backgroundColor: colors.primary[400],
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How can I view and manage my team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              "& a": {
                color: colors.greenAccent[500],
                margin: "0 5px",
              },
            }}
          >
            You can head over to the
            <a href="/contacts" target="_blank">
              Manage Team
            </a>
            page to view and manage your team.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{
          borderRadius: "5px",
          backgroundColor: colors.primary[400],
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How can I view and manage my team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              "& a": {
                color: colors.greenAccent[500],
                margin: "0 5px",
              },
            }}
          >
            You can head over to the
            <a href="/contacts" target="_blank">
              Manage Team
            </a>
            page to view and manage your team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
