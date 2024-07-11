import { Grid } from "@mui/material"
import Pythoncard from "../Pythoncard"



const image=[1,1,1,1,1,1]

export default function Pythonpage(){
    return(
        <>
        <Grid container>

          {

            image.map((item)=>{

              return(
                <Grid md={4} sx={{padding : '30px'}}>
                  <Pythoncard/>
                </Grid>
              )
            })
          }
          </Grid>
          </>
    )
}


          