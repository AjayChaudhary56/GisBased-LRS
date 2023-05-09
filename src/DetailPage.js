import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const DetailPage = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid xs={12}></Grid>
          <Grid xs={12}>
            <Grid>
              <Grid>
                <Typography variant="h5">Siddhant Shrestha</Typography>
              </Grid>
              <Grid>
                <span>m</span>
                <Typography variant="p">lamachaur, Pokhara</Typography>
              </Grid>
            </Grid>
            <Grid>
              <span>m</span>
              <Typography variant="u">123456789</Typography>
            </Grid>
            <Grid>
              <span>m</span>
              <Typography variant="p">981299454</Typography>
            </Grid>
            <Grid>
              <span>m</span>
              <Typography variant="e">test"example.com</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
            
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailPage;
