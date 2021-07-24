import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(5),
      margin: 'auto',
      maxWidth: 500,
      boxShadow: "0px 2px 36px -19px #3a3737 !important",
      borderRadius:"10px",
      position:"relative",
      background: "linear-gradient(45deg, #2196f3, #3f51b5)"
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    heading: {
      fontSize: '24px',
      textTransform: 'uppercase',
      margin: "0",
      color: "#fff",
      fontWeight: "900",
      marginBottom: "16px"
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "100%",
      margin: "0 auto",
      textAlign: "left",
      // border: "1px solid #949494",
      // borderRadius: "25px",
      padding: "3px"
    },
    container: {
      margin:"15px"
    },
    faicon: {
      color: "#3f51b5",
      width: "15px !important",
      height: "15px",
      padding: "7px",
      borderRadius: "50px",
      backgroundColor: "#fff",
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "15px",
      marginTop: "15px"
    },
    select: {
      background: "transparent",
      color:"#fff"
    }
  
  }));


export default function TablePodSelection(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleOpen = () => {
    setOpen(true);
    };

    return (
        <div className="pod-select">
              <div className={classes.root}>
                <Paper className={classes.paper}>

                  <div style={{width: "88%",
                  height: "100%",
                  background: "#3f51b538",
                  position: "absolute",
                  left: "6%",
                  top: "15px",
                  zIndex:" -1",
                  borderRadius:" 10px",
                  margin:"0 auto"}}></div>
                  <Typography gutterBottom className={classes.heading} >
                    Pick a Pod to Follow
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item md={11}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="open-select-label" style={{color:"#fff !important"}}>Pick a Pod</InputLabel>
                        <Select
                          labelId="open-select-label"
                          id="open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={age}
                          onChange={handleChange}
                          className={classes.select}
                        >
                          <MenuItem value="none" default>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={1} style={{textAlign:"right"}}>
                      <div className={classes.faicon}>?</div>
                    </Grid>
                    
                  </Grid>
                  
                </Paper>
              </div>
            </div>
    )
}