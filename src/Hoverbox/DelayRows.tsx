import { Stack, Grid, Typography, Divider } from "@mui/material";
import { FC } from "react";
import { CustomColors } from "../colors";
import { DelayRow } from "./types";

interface Props {
  delayData: DelayRow[];
}

const DelayRows: FC<Props> = ({ delayData }) => {
  return (
    <Stack>
      {delayData.map((delay, index) => (
        <Stack key={index}>
          <Grid container sx={{ px: 1.5, bgcolor: "#FFF" }} alignItems="center">
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: CustomColors.BLACK_900,
                }}
              >
                {delay.stage}
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: CustomColors.WARNING_500,
                }}
              >
                +{delay.delay} Day
              </Typography>
            </Grid>

            {/* Comment full-width */}
            <Grid item xs={12} mt={0.5}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: CustomColors.BLACK_400,
                }}
              >
                {delay.comment}
              </Typography>
            </Grid>
          </Grid>

          {index !== delayData.length - 1 && <Divider sx={{ my: "11px" }} />}
        </Stack>
      ))}
    </Stack>
  );
};

export default DelayRows;
