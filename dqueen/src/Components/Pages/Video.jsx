import { Box, Grid } from "@chakra-ui/react";
import style from "../Styles/HomePage.module.css";
import Video1 from "../Videos/Video1.mp4";
import Video2 from "../Videos/Video2.mp4";
import Video3 from "../Videos/Video3.mp4";
import Video4 from "../Videos/Video4.mp4";
import Video5 from "../Videos/Video5.mp4";
import Video6 from "../Videos/Video6.mp4";
import Video7 from "../Videos/Video7.mp4";

export default function VideoPage() {
  return (
    <div>
      <Box className={style.vdo}>
        <Grid templateColumns='repeat(7, 1fr)' gap={6}>
          <video controls className={style.vdoplay}>
            <source src={Video1} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video2} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video3} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video4} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video5} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video6} type="video/mp4" />
          </video>
          <video controls className={style.vdoplay}>
            <source src={Video7} type="video/mp4" />
          </video>
        </Grid>
      </Box>
    </div>
  );
}
