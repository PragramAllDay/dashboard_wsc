import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { LoginErrorType, loginType } from '@/utils/types/auth/auth';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/components/forms/theme-elements/CustomFormLabel';
import { useLoginMutation } from '@/store/slice/api/auth';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import "./style.css"


const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<LoginErrorType>({ status: false, message: "" })
  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const authData = { email: username, password };
      const response = await login(authData).unwrap();

      console.log(response)
      localStorage.setItem('admin_session', JSON.stringify(response));

      // redirect to homepage
      router.push('/');
    } catch (err: any) {
      if (err?.data) {
        setLoginError(() => ({ status: true, message: err?.data?.detail }))
      }
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
          {
            loginError.status && <p className='err-msg'>Error: {loginError.message}</p>
          }
          <Box mt={4}>
            <Button color="primary" variant="contained" size="large" fullWidth type="submit" disabled={isLoading}>
              Sign In
            </Button>
          </Box>
        </Stack>

      </form>
    </>
  );
};
export default AuthLogin;
