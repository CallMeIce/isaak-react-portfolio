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

    //*Second Card Popover 
    const [anchorElTwo, setAnchorElTwo] = React.useState(null);

    const handlePopoverOpenTwo = (event) => {
        setAnchorElTwo(event.currentTarget);
    };

    const handlePopoverCloseTwo = () => {
        setAnchorElTwo(null);
    };

    const openTwo = Boolean(anchorElTwo);

    //*Third Card Popover
    const [anchorElThree, setAnchorElThree] = React.useState(null);

    const handlePopoverOpenThree = (event) => {
        setAnchorElThree(event.currentTarget);
    };

    const handlePopoverCloseThree = () => {
        setAnchorElThree(null);
    };

    const openThree = Boolean(anchorElThree);

    //*Fourth Card Popover
    const [anchorElFour, setAnchorElFour] = React.useState(null);

    const handlePopoverOpenFour = (event) => {
        setAnchorElFour(event.currentTarget);
    };

    const handlePopoverCloseFour = () => {
        setAnchorElFour(null);
    };

    const openFour = Boolean(anchorElFour);

    //*Fifth Card Popover
    const [anchorElFive, setAnchorElFive] = React.useState(null);

    const handlePopoverOpenFive = (event) => {
        setAnchorElFive(event.currentTarget);
    };

    const handlePopoverCloseFive = () => {
        setAnchorElFive(null);
    };

    const openFive = Boolean(anchorElFive);

    //*Fifth Card Popover
    const [anchorElSix, setAnchorElSix] = React.useState(null);

    const handlePopoverOpenSix = (event) => {
        setAnchorElSix(event.currentTarget);
    };

    const handlePopoverCloseSix = () => {
        setAnchorElSix(null);
    };

    const openSix = Boolean(anchorElSix);

    return (
        <div className='container'>
            
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
                            <Typography sx={{ p: 1 }}>JQuery, and Moment.js</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>

            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/Text-editor.png')}
                    alt="Text Editor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Text Editor
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a text editor that you are able to install and jot down some notes even if you're offline!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/CallMeIce/Text-Editor' size="small">Github Repo</Button>
                    <Button href='https://secure-cliffs-39156.herokuapp.com/' size="small">Deployed Link</Button>
                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpenTwo}
                            onMouseLeave={handlePopoverCloseTwo}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={openTwo}
                            anchorEl={anchorElTwo}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverCloseTwo}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>Express, Uses PWA</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>


            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/Team-Profile.gif')}
                    alt="Text Editor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Team Profile Generator
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a generator that you can use to create a team through the integrated terminal and render it on the webpage. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/CallMeIce/Team-Profile-Generator' size="small">Github Repo</Button>
                    <Button href='https://drive.google.com/file/d/1eoJh--ItsV7rcUx9Jd2ionVdHneW_qOA/view' size="small">Walkthrough Video</Button>
                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpenThree}
                            onMouseLeave={handlePopoverCloseThree}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={openThree}
                            anchorEl={anchorElThree}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverCloseThree}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>Node.js, Inquirer, OOP</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>
            

            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/WatchMe.png')}
                    alt="Text Editor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        WatchMe
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A simple application to allow users to search for their favorite t.v. show/movie and find out which streaming services they are currently available on.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/CallMeIce/watch_me' size="small">Github Repo</Button>
                    <Button href='https://mcarson24.github.io/watch_me/' size="small">Deployed Link</Button>
                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpenFour}
                            onMouseLeave={handlePopoverCloseFour}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={openFour}
                            anchorEl={anchorElFour}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverCloseFour}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>HTML, CSS, Javascript, API's</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>


            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/portfolio-pic.jpeg')}
                    alt="Text Editor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        My First Portfolio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    This was my original portfolio that I kept just so I can see how far I progressed.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/CallMeIce/Portfolio' size="small">Github Repo</Button>
                    <Button href='https://callmeice.github.io/Portfolio/' size="small">Deployed Link</Button>
                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpenFive}
                            onMouseLeave={handlePopoverCloseFive}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={openFive}
                            anchorEl={anchorElFive}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverCloseFive}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>HTML, CSS</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>


            <Card className='One' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/Social-Network.jpg')}
                    alt="Text Editor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Social Network API
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='https://github.com/CallMeIce/Social-Network' size="small">Github Repo</Button>
                    <Button href='https://drive.google.com/file/d/1eoJh--ItsV7rcUx9Jd2ionVdHneW_qOA/view' size="small">Walkthrough Video</Button>                    <div>
                        <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpenSix}
                            onMouseLeave={handlePopoverCloseSix}
                        >
                            Frameworks Used
                        </Typography>
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={openSix}
                            anchorEl={anchorElSix}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverCloseSix}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>Insomnia, Express, MongoDB, Mongoose, CRUD functionality</Typography>
                        </Popover>
                    </div>
                </CardActions>
            </Card>

        </div>
    );
}
