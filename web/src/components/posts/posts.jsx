import { useFormik, formik } from "formik";
import { useState, useEffect } from "react"
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import axios from 'axios'
import { baseUrl } from "./../../core"
import imge1 from './../../assets/download.jfif'
import imge2 from './../../assets/download2.png'
import { useHistory } from "react-router-dom";
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { date } from "yup/lib/locale";
import { GlobalContext } from "../../context/Context";
import { useContext } from "react";
// import * as React from 'react';
import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// function onSubmitFunction(values) {
//     console.log("values: ", values)
//   }

const validationSchema = yup.object({
  post: yup
    .string('add something ')
    .required('required*'),
});


function Posts() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };



  let history = useHistory();
  let { state, dispatch } = useContext(GlobalContext);
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      post: "",
      createdby: "",
    },
    onSubmit: onSubmitFunction
  });

  function onSubmitFunction(values) {
    console.log("values: ", values)
    if (state?.user?.name) {
      axios.post(`${baseUrl}/api/v1/posts`, {
        post: values.post,
        createdby: state.user.name,
      })
        .then(res => {
          console.log(res.data);
          setToggleGetUser(!toggleGetUser)
        });
    }
  }
  const [posts, setPosts] = useState([]);
  const [toggleGetUser, setToggleGetUser] = useState(false);

  useEffect(() => {

    axios.get(`${baseUrl}/api/v1/posts`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data)
      });

    return () => {
      console.log("post shown");
    };
  }, [toggleGetUser]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>POSTS</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div >
          <Grid container spacing={1} sx={{ paddingLeft: "10%", paddingRight: "10%" }} >
            <Grid item xl={8} lg={8} xs={12} sm={12} md={12}  >
              <Item  >
                <Stack spacing={3}  >
                  <TextField
                    color="primary"
                    id="outlined-basic"
                    variant="standard"
                    placeholder="Enter text here"
                    name="post"
                    // inputProps={{
                    //   maxlength: 20
                    // }}
                    value={formik.values.post}
                    onChange={formik.handleChange}
                    error={formik.touched.post && Boolean(formik.errors.post)}
                    helperText={formik.touched.post && formik.errors.post}
                  />
                </Stack>
              </Item >
            </Grid>
            <Grid item xl={2} lg={2} xs={12} sm={4} md={4} >
              <Item>
                <Button sx={{ height: "25px", width: "100%", fontSize: "12px" }} variant="contained" color="inherit" type="submit">Create Post</Button>
              </Item >
            </Grid>
            <Grid item xl={1} lg={1} xs={6} sm={4} md={4} >
              <Item>
                <Button sx={{ height: "25px", width: "100%", fontSize: "12px" }} variant="contained" color="info" onClick={handleClickOpen}>Profile</Button>

              </Item >
            </Grid>
            <Grid item xl={1} lg={1} xs={6} sm={4} md={4} >
              <Item>
                <Button sx={{ height: "25px", width: "100%", fontSize: "12px" }} variant="contained" color="error"
                  onClick={() => {
                   
                      history.push("/login");
                      dispatch({
                        type: "LOGOUT",
                        payload: null,
                      });
              
                  }}>Logout</Button>
              </Item >
            </Grid>
          </Grid>
        </div>
      </form>
      <br /><br />
      {state?.user?.name && posts.map(eachPost => {
        return <>
          <Card sx={{ maxWidth: 845, margin: "auto" }}>
            <CardHeader
              avatar={<Avatar sx={{ backgroundColor: "transparent" }} aria-label="profile"><img style={{ width: "50px" }} src={imge1} /></Avatar>}
              action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
              title={eachPost.createdby}
            // {posts.map(eachPost => {
            //               return <>
            //               {eachPost.name}
            //               </>
            //             })}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {/* <div style={{overflowWrap: "breakWord"}}> */}
                {/* {<h4 style={{overflowWrap: "breakWord"}}>{eachPost.post}</h4>} */}
                {/* </div> */}
                {eachPost.post}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="354"
              image={imge2}
              alt="picture"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
              <IconButton aria-label="share"><ShareIcon /></IconButton></CardActions>
          </Card>
          <br />
        </>
      })}

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        sx={{ maxWidth: "100%" }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>Profile Details</BootstrapDialogTitle>
        <DialogContent>
          <Typography gutterBottom  >
            Name: {state.user.name}<br />Email: {state.user.email}<br />Contact: {state.user.contact}<br />website: {state.user.website}<br />Address: {state.user.address}
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Posts;