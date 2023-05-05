import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { httpClient } from './httpClient';
import { styled } from './stitches';

const FormStyled = styled(Form, {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '480px',
  marginInline: 'auto',
  marginBlockStart: '48px',
});

const LabelStyled = styled('label', {
  display: 'flex',
  flexDirection: 'column',
});

export const Login: ComponentType = () => {
  const { setAppState } = useAppContext();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (body) => {
        const accessToken = await httpClient.request('post', '/access-tokens', { body });
        window.localStorage.setItem('ACCESS_TOKEN_ID', accessToken.id);
        setAppState((appState) => ({ ...appState, isAuthenticated: true }));
        navigate('/');
      }}
    >
      <FormStyled autoComplete="off">
        <LabelStyled>
          <span>Username</span>
          <Field type="text" name="username" />
        </LabelStyled>
        <LabelStyled>
          <span>Password</span>
          <Field type="password" name="password" />
        </LabelStyled>
        <button type="submit">Submit</button>
      </FormStyled>
    </Formik>
  );
};
