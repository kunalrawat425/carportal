import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { car } from "../data";
type cardDetailsCardProps = {
  car: car;
};
export default function CarDetailsCard({ car }: cardDetailsCardProps) {
  const { imageUrl, model, year, brand } = car;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={imageUrl} alt={model} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand} | {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
