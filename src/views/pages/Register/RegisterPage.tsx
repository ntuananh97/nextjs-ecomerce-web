import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import { NextPage } from "next";
  import React, { useState } from "react";
  import { Controller, useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import { EMAIL_REG, PASSWORD_REG } from "@/configs/regex";
import Link from "next/link";
  
  interface IProps {}
  
  type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
  };
  
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .matches(EMAIL_REG, "Please type correct email format!"),
    password: yup
      .string()
      .required("Required")
      .matches(
        PASSWORD_REG,
        "The password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters."
      ),
      confirmPassword: yup
      .string()
      .required("Required")
      .matches(
        PASSWORD_REG,
        "The password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters."
      )
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  });
  
  const RegisterPage: NextPage<IProps> = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      resolver: yupResolver(validationSchema),
    });
  
    const onSubmit = (data: FormData) => {
      console.log(data);
    };
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
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
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  error={Boolean(errors?.password)}
                  helperText={errors?.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              name="password"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  margin="normal"
                  label="Confirm Password"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  error={Boolean(errors?.confirmPassword)}
                  helperText={errors?.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              name="confirmPassword"
            />
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login">
                  {"Had an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default RegisterPage;
  