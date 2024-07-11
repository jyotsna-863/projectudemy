import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';




const Comments = () => {
    const[Loader,setLoader]=useState(true)
    const[Comments,setComments]=useState();
  


   const fetchComments =() =>{

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            console.log(res.data)
            setComments(res.data)
            setLoader(false)
        }).catch(error=>console.log(error))
    }
    return(
        <>
        <Button onClick={fetchComments}>Fetch Comments</Button>
        {
            Loader? "Loading":<Grid container>
                {
                    Comments.map(comment => {
                        return (<Grid md={3}>
                            <Typography>
                                {comment.name}
                            </Typography>
                            </Grid>)
                    })
                }
            </Grid>
        }
        </>
    )
}
export default Comments;
        