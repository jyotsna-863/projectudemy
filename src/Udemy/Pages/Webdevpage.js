import { Grid } from "@mui/material"
import Webdevcard from "../Webdevcard"


const image=[1,1,1,1,1,1,1]
export default function Webdevpage(){
    return(
        <>
        <Grid container>
            {
                image.map((item)=>{
                    return(
                        <Grid md={4}>
                            <Webdevcard/>
                            </Grid>

                    )
                })
            }
        </Grid>
        </>
    )
}