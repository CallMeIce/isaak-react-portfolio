import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Card className='cardStyle' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../src/images/Text-editor.png"
        alt="Text Editor Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Text Editor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a text editor where a user can write down notes and even
          download the application for offline use!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://github.com/CallMeIce/Text-Editor' size="small">Github Repo</Button>
        <Button href='https://secure-cliffs-39156.herokuapp.com/' size="small">Deployed Link</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image={require('../images/Text-editor.png')}
        alt="Text Editor Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Text Editor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a text editor where a user can write down notes and even
          download the application for offline use!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Repo</Button>
        <Button size="small">Deployed Link</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image="../src/images/Text-editor.png"
        alt="Text Editor Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Text Editor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a text editor where a user can write down notes and even
          download the application for offline use!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Repo</Button>
        <Button size="small">Deployed Link</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image="../src/images/Daily-Plan.png"
        alt="Daily Planner Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Daily Planner
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a daily planner which enables you to write any notes or appointments on that day with the current time highlighted from 9-5.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Repo</Button>
        <Button size="small">Deployed Link</Button>
      </CardActions>

    </Card>
    
  );
}

// const styles = {
//     media: {
//       height: 0,
//       paddingTop: '56.25%',
//       marginTop:'30'
//     }
// };
// <Card sx={{ maxWidth: 345 }}>
// <CardMedia
//   className='classes.media'
//   image="../src/images/Text-editor.png"
//   Title="Text Editor Project"
//   style={styles.media}
// />