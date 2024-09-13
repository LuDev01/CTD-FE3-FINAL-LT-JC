import { Favorite } from "@mui/icons-material";
import { AspectRatio, Card, CardContent, CardOverflow, Divider, IconButton, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { useDentist } from "../hooks/useDentist";

const DentistCard = ({ dentist, toggleFavDentist, isFavorite, details = false }) => {

  // const { toggleFavDentist, isFavorite } = useDentist();

  return (
    <Card variant="outlined" >
      <CardOverflow>
        <Link to={`/dentista/${dentist.id}`}>
          <AspectRatio ratio="2">
            <img
              src="/images/doctor.jpg"
              loading="lazy"
              alt="dentist-image"
            />
          </AspectRatio>
        </Link>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color={isFavorite(dentist) ? "danger" : "neutral"}
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
            transition: 'all ease 0.5s'
          }}
          onClick={() => {
            toggleFavDentist(dentist)
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <Link to={`/dentista/${dentist.id}`}>
        <CardContent>
          <Typography level="title-md">
            {dentist.name}
          </Typography>
          <Typography level="body-sm">
            {dentist.username}
          </Typography>
          
        </CardContent>
      {  

        details && (<CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal" sx={{ justifyContent: 'space-around' }} >
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            Email: {dentist.email}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            Sitio web: {dentist.website}
          </Typography>
        </CardContent>
        <CardContent orientation="horizontal" sx={{ justifyContent: 'space-around' }} >
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            Teléfono: {dentist.phone}
          </Typography>
          
        </CardContent>
        
      </CardOverflow>
      )}
      </Link>
    </Card>

  );
};

export default DentistCard;
