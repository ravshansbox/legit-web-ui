import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { styled } from '../stitches';

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

const FieldStyled = styled(Field, {
  borderColor: '$gray200',
  borderStyle: 'solid',
  borderWidth: '1px',
  outlineColor: '$gray400',
  paddingBlock: '$1',
  paddingInline: '$2',
});

const ButtonStyled = styled('button', {
  outlineColor: '$gray400',
  backgroundColor: '$primary',
  borderColor: '$primary',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'White',
  paddingBlock: '$1',
  paddingInline: '$2',
});

export const Login: ComponentType = () => {
  const { httpClient, setAppState } = useAppContext();
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
          <FieldStyled type="text" name="username" />
        </LabelStyled>
        <LabelStyled>
          <span>Password</span>
          <FieldStyled type="password" name="password" />
        </LabelStyled>
        <ButtonStyled type="submit">Submit</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};
