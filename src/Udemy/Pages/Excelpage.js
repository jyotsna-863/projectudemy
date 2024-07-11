import { Grid, Typography } from "@mui/material";
import Excelcard from "../Excelcard";

const image=[1,1,1,1,1,1,1,1]

export default function Excelpage(){
return(
    <>

    <div>
        <Typography>
            
        </Typography>
    </div>
    <Grid container>

        {

            image.map((item)=>{

                return(
                    <Grid md={4}>
                        <Excelcard/>
                        </Grid>           
                        
                        
                        
                        )
            })
        }
    </Grid>
    
    
    
    </>
)



}
   