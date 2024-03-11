import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUsers } from '../../redux/slices/auth/authAction';
import { Box, Button, FormControl, InputAdornment, InputBase, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import validator from "validator";

const UserSignup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({ name: '', email: '', password: '', role: '' })
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [navigation, setNavigation] = useState(false)

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      setNavigation(true)
    } else {
      setErrorMessage("Is Not Strong Password");
      setNavigation(false)
    }
  };

const handleEmail = (e) => {
  setInputs({...inputs, email: e.target.value})
  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    }
}
const handleName = (e) => {
  setInputs({ ...inputs, name: e.target.value })
}
const handlePassword = (e) => {
  setInputs({...inputs, password: e.target.value})
}
const handleRole = (e) => {
  setInputs({ ...inputs, role: e.target.value })
}
  const handleSubmit = (e) => {
    e.preventDefault()
   if(navigation === false){
      alert('Kindly enter Correct Credentials')
   }
   else{
    console.log(inputs)
    dispatch(registerUsers(inputs))
    navigate('/login')
   }
    
  }

  return (
    <Box className="login-page">

      <Box className="login-form-box" >
        <Stack className='formStack' gap={1}>
          <Typography
            align="left"
            sx={{
              height: 'fit-content',
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: '10px'
            }}
          >
            Sign up
          </Typography>

          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.role}
              label="Role"
              required
              onChange={(e) => handleRole(e)}
            >
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Name"
            // variant="filled"
            sx={{
              width: "100%",
              fontWeight: "400",
              fontSize: "32px",
              position: "relative",
              zIndex: "1",
              borderRadius: "4px !important",
              background: "none",
              marginBottom: '10px'
            }}
            value={inputs.name}
            required
            onChange={(e) => { handleName(e) }}
          />

          <TextField
            label="Email"
            // variant="filled"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "400",
              fontSize: "32px",
              position: "relative",
              zIndex: "1",
              borderRadius: "4px !important",
              background: "none",
            }}
            value={inputs.email}
            required
            onChange={(e) => { handleEmail(e) }}
          />
          <Typography style={{ color: "red" }}>{emailErrorMsg}</Typography>
          <FormControl sx={{ width: "100%", display: 'flex', alignItems: 'center' }} variant="standard">

            <InputLabel sx={{ padding: '10px 15px' }} htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <InputBase
              id="standard-adornment-password"
              inputProps={{
                style: {


                  borderWidth: "1px",

                  padding: "14px 16px 14px 16px",
                },
              }}
              sx={{
                width: "100%",
                marginTop: '10px',
                paddingRight: "0",
                border: '1px solid #dadada',
                borderRadius: '4px',
                height: '58px'
              }}
              value={inputs.password}
              disableUnderline={true}
              required
              onChange={(e) => {
                handlePassword(e)
                validate(e.target.value)
              }}
              type={showPassword ? "text" : "password"}
              endAdornment={

                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: 500,

                      "&:hover": { background: "none", border: "none" },
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputAdornment>
              }
            />
            <Typography paragraph='true'>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </Typography>
          </FormControl>


              <Typography>Already have an account <span style={{color: "#0b66c2", fontWeight: '600', cursor: 'pointer'}} onClick={() => navigate('/login')}>Login?</span></Typography>

          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              width: "100%",
              boxShadow: "none",
              height: "min-content",
              minHeight: "48px",
              borderRadius: "28px",
              padding: "10px 24px 10px 24px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "20px",
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
              backgroundColor: "#0a66c2",
            }}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign up
          </Button>
        </Stack>

      </Box>
    </Box>
  )
}

export default UserSignup
