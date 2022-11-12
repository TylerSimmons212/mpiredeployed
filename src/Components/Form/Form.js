import React, { useEffect } from "react";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import ForumIcon from "@material-ui/icons/Forum";
import emailjs from "emailjs-com";
import "./form.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#D19737",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = (props) => {
  const classes = useStyles();

  useEffect(() => {}, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jpe1xj",
        "template_w76ko2n",
        e.target,
        "user_RmZZwfWHe3xBgtV58Yf3X"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent!");
          props.setForm(false);
          window.location.replace("/");
        },
        (error) => {
          console.log(error.text);
          alert("error.text");
        }
      );
  }

  return (
    <div className="form">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ForumIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Let's Chat!
          </Typography>
          <form className={classes.form} validate onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="organizationname"
                  label="Organization Name"
                  name="organizationname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="website"
                  label="Website"
                  name="website"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      required
                      color="primary"
                    />
                  }
                  label="I agree to receive marketing communication from Mpire Media."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
              <span className="sendIcon">
                <SendIcon />
              </span>
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Form;
