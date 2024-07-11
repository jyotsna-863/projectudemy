import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

 function UDtypography() {
  return (
    <Card sx={{minWidth:275}}>
      <CardContent>
   
      <Typography variant="h6" gutterBottom>
      Trusted by over 15,000 companies and millions of learners around the world
      </Typography>
      <Typography variant="h5" components="div" padding={4}>
      <img style={{marginRight:"30px"}}  src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg'></img>
      <img style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg'></img>
      <img  style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg'></img>
      <img  style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg'></img>
      <img style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg'></img>
      <img style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg'></img>
      <img style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg'></img>
      <img style={{marginRight:"30px"}} src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg'></img>
      </Typography>
      <Typography variant="h2" gutterBottom>
      A broad selection of courses
      </Typography>
      </CardContent>
      </Card>
   
  );
}
export default UDtypography;
