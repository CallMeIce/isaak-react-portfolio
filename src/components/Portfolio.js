import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import './Portfolio.css'

export default function Projects() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/Daily-Plan.png')}
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
                    <Button href='https://github.com/CallMeIce/Weekday-Planner' size="small">Github Repo</Button>
                    <Button href='https://callmeice.github.io/Weekday-Planner/' size="small">Deployed Link</Button>
                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>HTML,CSS,JQuery, and Moment.js</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>

            

        </div>
    );
}
