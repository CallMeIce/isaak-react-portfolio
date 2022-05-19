import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        image="../src/images/Text-editor.png"
        alt="Text Editor Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          WatchMe Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This was the first team project
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github Repo</Button>
        <Button size="small">Deployed Link</Button>
      </CardActions>

    </Card>
    
  );
}