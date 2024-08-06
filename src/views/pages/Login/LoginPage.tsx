import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NextPage } from "next";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EMAIL_REG, PASSWORD_REG } from "@/configs/regex";


interface IProps {}

type FormData = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().required("Required").matches(EMAIL_REG, 'Please type correct email format!'),
  password: yup.string().required("Required").matches(PASSWORD_REG, 'The password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters.'),
});

const LoginPage: NextPage<IProps> = () => {

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                margin="normal"
                label="Type email"
                autoComplete="email"
                autoFocus
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                fullWidth
                error={Boolean(errors?.email)}
                helperText={errors?.email?.message}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                margin="normal"
                label="Type Password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                error={Boolean(errors?.password)}
                helperText={errors?.password?.message}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                }}
              />
            )}
            name="password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
};

export default LoginPage;
