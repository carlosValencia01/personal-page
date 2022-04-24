import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// export const Card = ({ title, img, description, date, route }) => {
//   return (
//     <div className="card card__main">
//       <img src={img} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <p>
//           <small>{date}</small>
//         </p>
//         <a href={route} className="btn btn-primary">
//           Abrir
//         </a>
//       </div>
//     </div>
//   );
// };

export const CardShared = ({ title, img, description, date, route }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card__main">
      <CardActionArea>
        <CardMedia component="img" height="180" image={img} alt="..." />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={route}
          size="small"
          color="primary"
          variant="outlined"
          className="card__button"
        >
          Abrir
        </Button>
      </CardActions>
    </Card>
  );
};
