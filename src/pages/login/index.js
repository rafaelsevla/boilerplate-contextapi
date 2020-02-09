import React, { useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';
import { useAuth } from '../../hooks';
import { HOME } from '../../routes';

const Login = () => {
  let now = new Date();
  const { userInfo, setUserInfo } = useAuth();

  function onSubmit(e) {
    e.preventDefault();
    setUserInfo({
      isUserLoggedIn: true,
      user: {
        name: 'Rafael',
        email: 'rafaelsevla@gmail.com'
      }
    });
    window.location = HOME;
  }

  useEffect(() => {
    console.log('userInfo', userInfo);
  }, [userInfo]);

  return (
    <LoadingOverlay active={false} spinner text='Carregando'>
      <Container className='block-center mt-4 wd-xl'>
        <div className='text-center'>
          <div className='text-center bg-submit'>
            <a href=''>
              {/* <img
                className='block-center rounded'
                src='img/logo-fundecitrus.png'
                alt='Logo'
              /> */}
            </a>
          </div>
          <FormSignin onSubmit={onSubmit}>
            <img
              className='mb-4'
              src='/docs/4.4/assets/brand/bootstrap-solid.svg'
              alt=''
              width='72'
              height='72'
            />
            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
            <label for='inputEmail' className='sr-only'>
              Email address
            </label>
            <Input
              type='email'
              id='inputEmail'
              className='form-control'
              placeholder='Email address'
              required
              autofocus
            />
            <label for='inputPassword' className='sr-only'>
              Password
            </label>
            <Input
              type='password'
              id='inputPassword'
              className='form-control'
              placeholder='Password'
              required
            />
            <div className='checkbox mb-3 mt-3'>
              <label>
                <input type='checkbox' value='remember-me' /> Remember me
              </label>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>
              Sign in
            </button>
          </FormSignin>
        </div>
      </Container>
      <div className='p-3 text-center'>
        <span>© Rafael {now.getFullYear()}</span>
      </div>
    </LoadingOverlay>
  );
};

const Container = styled.div`
  max-height: 100vh;
`;

const FormSignin = styled.form`
  background-color: white;
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

const Input = styled.input`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
`;

export default Login;
