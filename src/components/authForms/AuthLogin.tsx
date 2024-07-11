import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { loginType } from '@/utils/types/auth/auth';
import CustomCheckbox from '@/components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/components/forms/theme-elements/CustomFormLabel';
import { useState } from 'react';
import { useLoginMutation } from '@/store/slice/api/auth';
import { navigate } from '@/utils/redirect';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const authData = { email: username, password };
      const response = await login(authData).unwrap();
      localStorage.setItem('admin_session', JSON.stringify(response));
      // handle successful login, e.g., redirect, display message
      console.log('Login successful', response);
      // redirect to homepage
      navigate('/');
    } catch (err) {
      // handle error, e.g., display error message
      console.error('Login failed', err);
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      <Box mt={3}>
        <Divider>
          <Typography component="span" color="textSecondary" variant="h6" fontWeight="400" position="relative" px={2}>
            Sign in
          </Typography>
        </Divider>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
            <CustomTextField id="username" variant="outlined" fullWidth value={username} onChange={(e: any) => setUsername(e.target.value)} />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password} onChange={(e: any) => setPassword(e.target.value)} />
          </Box>
          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            {/* Additional form elements, e.g., Remember Me checkbox, Forgot Password link */}
          </Stack>
        </Stack>

        <Box>
          <Button color="primary" variant="contained" size="large" fullWidth type="submit" disabled={isLoading}>
            Sign In
          </Button>
        </Box>
      </form>
      {/* {subtitle} */}
    </>
  );
};
export default AuthLogin;
