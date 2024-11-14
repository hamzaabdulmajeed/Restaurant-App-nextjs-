import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LogoIcon from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import Typography from "@mui/material/Typography";
import bookMark from "../../assets/bookmark.png";
import active from "../../assets/active.png";
import rectangle from "../../assets/rectangle.png";


function ResponsiveAppBar() {
  return (
    <AppBar
    position="static"
    sx={{
      height: "96"
    //   backgroundColor: "#FFFFFF",
    //   color: "black",
    //   display: "flex",
    //   justifyContent: "center",

    }}
    >
      {/* <Container maxWidth="xl"> */}
      {/* <Toolbar disableGutters> */}
      {/* <Box display="flex" alignItems="center" maxWidth={1440} maxHeight={96} justifyContent="center"> */}

      <Box
        backgroundColor="#FFFFFF"
        color="black"
        display="flex"
        justifyContent='space-between'
        maxWidth={1440}
        // maxHeight={96}
        height={96}
        alignItems="center"
      >
        {/* Content goes here */}
<Box display="flex" alignItems="center" width="400px" justifyContent="space-between">
        <Box width={80} height={64}>
          <Image src={LogoIcon} width={65} height={63} alt="Logo" />
        </Box>
        {/* <Box maxWidth={1189} maxHeight={47} display="flex" alignItems="center">
          <Image src={vector} width={11} height={16} alt="Location Icon" />
          <Typography ml={1}>Kalamazoo, Michigan USA</Typography>
          </Box> */}
          <Box>   
          <Button variant="text" sx={{ color: "black" }}>
            Home
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            All Restaurants
          </Button>
          {/* <Button variant="text" sx={{ color: "black" }}>
            Contact Us
          </Button> */}
        </Box>
        </Box>
        <Box  display="flex" justifyContent="space-evenly" alignItems="center" width={150}>
          <Box>
            <Image src={bookMark} width={16} height={22} alt="Logo" />
          </Box>
          <Box>
            <Image src={active} width={24} height={24} alt="Logo" />
          </Box>
         </Box>
        {/* <Box  width={220} height={47} display="flex" alignItems="center" justifyContent="center" > */}
          {/* <Box>
            <Image src={rectangle} width={34} height={34} alt="Logo" />
            </Box> */}
            {/* <Box paddingTop= {1} paddingLeft= {1} >
            <Typography  width={113}  color="#030900" lineHeight={0}>User Name</Typography>
            <Typography  width={113}  color="#030900">abc@gmail.com</Typography>

            </Box> */}
          {/* </Box> */}
      </Box>
      {/* </Box> */}
      {/* </Toolbar> */}
      {/* </Container> */}
    </AppBar>
  );
}

export default ResponsiveAppBar;
// width="100%"
// ml={1} display="flex" alignItems="center"
