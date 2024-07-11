import { Button, Rating, Typography } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Excelcard() {
  return (
   <>
 
   <img src="https://assets.entrepreneur.com/content/3x2/2000/20191218181212-Ent-Excel.jpeg" width={300}/>

   <h3>Microsoft Excel - Excel from Beginner to Advanced</h3>
   <p>Kyle pew,office Newb</p> <br/>4.6
   <Rating></Rating>
   <p><CurrencyRupeeIcon sx={{fontsize:20}}/>3,199</p>
   <Button variant="contained">BEST SELLER</Button>

   </>

  )
}

export default Excelcard;