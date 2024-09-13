import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Box } from "@mui/joy"
import { homeStyles } from "../utils/theme"


const Layout = () => {
  return (
    <>
    <Navbar />
    <Box component="main" sx={homeStyles.main}  >
        <Outlet />
    </Box>
    <Footer />
    </>
  )
}

export default Layout