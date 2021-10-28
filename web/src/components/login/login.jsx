import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "./../../core"
import { GlobalContext } from "../../context/Context";
import { useContext } from "react";

const validationSchema = yup.object({

    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .max(10, 'No more then 10')
        .required('Password is required'),
});

function Login() {
    let history = useHistory();
    let { dispatch } = useContext(GlobalContext);
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: function (values) {
            console.log("values: ", values)
            axios.post(`${baseUrl}/api/v1/login`, {
                email: values.email,
                password: values.password,
            })
                .then((res) => {

                    console.log("res: ", res.data);
                    if (res.data !== "Authentication fail") {
                        dispatch({
                            type: "LOGIN",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                contact: res.data.contact,
                                website: res.data.website,
                                address: res.data.address,
                            },
                        });
                        alert("login successfull")
                        setTimeout(() => {
                            history.push("/posts")
                        }, 1000);
                    }
                    else {
                        alert("invalid credential")
                    }
                })
        }
    });

    return (

        <div style={{ padding: "1rem" }}>
            <h1 style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>Log In</h1>
            <br />
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} xs={12} sm={12} md={12} sx={{ width: "50%", margin: "auto" }} >
                        <Item >
                            <Stack spacing={3}  >
                                <TextField
                                    color="primary"
                                    id="outlined-basic"
                                    label="Email"
                                    placeholder="enter email address"
                                    variant="standard"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />

                                <TextField
                                    color="primary"
                                    id="filled-basic"
                                    label="Password"
                                    placeholder="enter your password"
                                    variant="standard"
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />

                                <Grid item xl={6} lg={6} xs={12} sm={12} md={12}  >
                                    <Item >
                                        <Button sx={{ marginBottom: "1%" }} variant="contained" color="inherit" type="submit" >Log in</Button>
                                        <Button sx={{ marginLeft: "1%", marginBottom: "1%" }} variant="text" color="inherit" type="submit" onClick={() => { history.push("/signup") }}>I don't Have an Account</Button>
                                    </Item >
                                </Grid>
                            </Stack>
                        </Item >
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default Login;