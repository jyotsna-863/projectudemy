
import { Grid } from "@mui/material";
import Javascrcard from "../Javascrcard";
const image=[1,1,1,1,1,1]


   export default function Javascrpage(){
    return(
      <>
      <Grid container>

        {
          image.map((item)=>{

          return(
            <Grid md={4} sx={{padding : '30px'}}>
             <Javascrcard/>
                         </Grid>
          )
          })
        }
      </Grid>
      </>
    )
      }