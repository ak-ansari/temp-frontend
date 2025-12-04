import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { IDelayHistory } from "./types";
import { CustomColors } from "../colors";
import moment from "moment";
import DelayRows from "./DelayRows";

interface Props {
  data: IDelayHistory;
}

const RowContainer = styled(Grid)(() => ({
  backgroundColor: CustomColors.BLACK_25,
  padding: "8px 12px",
  borderRadius: 6,
  alignItems: "center",
}));

const DelayHistory: FC<Props> = ({ data }) => {
  return (
    <Box sx={{ width: "372px", bgcolor: "#FFF", p: 1.5 }}>
      <Stack spacing={1.5}>
        {/* Initial Date */}
        <RowContainer container>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: CustomColors.BLACK_500_B,
              }}
            >
              Initial Date
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: CustomColors.BLACK_500_B,
              }}
            >
              {moment(data.initialDate).format("DD MMM 'YY")}
            </Typography>
          </Grid>
        </RowContainer>

        {/* Delay Rows */}
        <DelayRows delayData={data.delayData} />

        {/* Updated Date */}
        <RowContainer container sx={{ p: 1.5 }}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: CustomColors.BLACK_500_B,
              }}
            >
              Updated Date
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: CustomColors.BLACK_500_B,
              }}
            >
              {moment(data.updatedDate).format("DD MMM 'YY")}
            </Typography>
          </Grid>
        </RowContainer>
      </Stack>
    </Box>
  );
};

export default DelayHistory;
