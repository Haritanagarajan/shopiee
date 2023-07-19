import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/AppRegistrationOutlined';

function MyFormHelperText() {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
        if (focused) {
            return 'enter you name in caps';
        }
    }, [focused]);
    return <FormHelperText>{helperText}</FormHelperText>;
}


const Register = () => {
    const [gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Box sx={{ ml: 50 }} component="form" noValidate autoComplete="off">

            <h4 style={{ marginLeft: '200px', paddingTop: '20px' }}> <HomeIcon /></h4>
            <FormControl sx={{ width: '35ch', ml: 8 }}>
                <OutlinedInput placeholder="Please enter your First name" required />
                <MyFormHelperText />
            </FormControl>
            <br />

            <FormControl sx={{ width: '35ch', mt: 1, ml: 8 }}>
                <OutlinedInput placeholder="Please enter your Last name" required />
                <MyFormHelperText />
            </FormControl>
            <br />

            <FormControl sx={{ width: '35ch', mt: 1, ml: 8 }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>
                </Select>
            </FormControl>
            <br />
            <TextField
                sx={{ width: '35ch', mt: 1, ml: 8 }}
                required
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label="Email"
            />
            <br />

            <FormControl sx={{ mt: 1, width: '35ch', ml: 8 }} >
                <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <br />
            <Button variant="contained" color="success" sx={{ mt: 1, width: '40ch', ml: 8 }} onClick={handleClick}>
                Submit
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Registration Successfull"
                action={action}
            />
        </Box>
    )
}

export default Register


