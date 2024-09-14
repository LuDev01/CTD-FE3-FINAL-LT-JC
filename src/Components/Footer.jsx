import { Box } from "@mui/joy"
import { useTheme } from "../hooks/useTheme";

const Footer = () => {
  
  const { isDark } = useTheme();
  
  return (
    <footer >
      <Box className='footer-div' sx={{ 
        width: '100%',
        background: 'rgba(147, 51, 234, 0.6)',
       }} >
        <p className='footer-text'>Powered By: Luisa Toro & Julian Callejas</p>
        <div className='footer-logo-icons'>
          <img className='footer-img' src="/images/DH.png" alt='DH-logo' />
          <div className='footer-all-icons'>
            <img className='footer-icons' src="/images/ico-facebook.png"></img>
            <img className='footer-icons' src="/images/ico-instagram.png"></img>
            <img className='footer-icons' src="/images/ico-tiktok.png"></img>
            <img className='footer-icons' src="/images/ico-whatsapp.png"></img>
          </div>
        </div>
      </Box>
    </footer>
  )
}

export default Footer
