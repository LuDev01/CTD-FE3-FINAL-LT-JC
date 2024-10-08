import { AspectRatio, Card, Skeleton, Typography } from "@mui/joy"

export const CardSkeleton = () => {
  return (
    <Card variant="outlined" sx={{ width: 343, display: 'flex', gap: 2 }}>
      <AspectRatio ratio="21/9">
        <Skeleton variant="overlay">
          <img
            alt=""
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Cargando Información
        </Skeleton>
      </Typography>
    </Card>
  )
}
