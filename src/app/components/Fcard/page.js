import React from "react";
import bookMark from '../../assets/bookMark.png'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
} from "@mui/material";
import Image from "next/image";

const Fcard = ({ image, name, rating, description, distance, time }) => {
  return (
    <Card sx={{ width: "278px", height: "200px", borderRadius: "20px", overflow:"visible", display:"flex", justifyContent:"center"}} >
      <Box sx={{ width: "278px", height: "200px", borderRadius:"20px" }}>
     


        <Box width="278px" height="112px" borderRadius="20px">
          <Image
        //   borderRadius={20}
            width="100%"
            height={112}
            src={image}
            alt="food"
          />
           
        </Box>
        <Box width="278px" height="88px" margin="4px">
          

          <Box
            width="261px"
            height="16px"
            marginTop="7px"
            marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            
            {name}
            <Rating value={rating}  />
           
          </Box>
          <Box display="flex" justifyContent="space-between" width="250px">
          <Box width="114px" height="30px" 
        //   marginTop="7px" 
        //   marginBottom="7px"
          >
            <Typography 
            // height="45px" 
            // lineHeight="1"
            >
              {description}
            </Typography>
          </Box>
          <Box>
          <Image
        //   borderRadius={20}
            width="10%"
            height={30}
            src={bookMark}
            alt="Favourite"
          />
          </Box>
          </Box>
          <Box>
          <Box 
            width="110px"
            height="16px"
            // marginTop="7px"
            // marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            
              <p>{distance}</p> 
              <p>{time}</p>
              </Box>
         
          </Box>
          
        </Box>
      </Box>
    </Card>
  );
};

export default Fcard;
