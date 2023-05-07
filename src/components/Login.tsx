import { useForm } from '@ravshansbox/react-form';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { styled } from '../stitches';

const FormStyled = styled('form', {
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

const InputStyled = styled('input', {
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
  const { Field, Form } = useForm({
    initialValues: { username: '', password: '' },
    handleSubmit: async (body) => {
      const accessToken = await httpClient.request('post', '/access-tokens', {
        body,
      });
      window.localStorage.setItem('ACCESS_TOKEN_ID', accessToken.id);
      setAppState((appState) => ({ ...appState, isAuthenticated: true }));
      navigate('/');
    },
  });

  return (
    <FormStyled as={Form}>
      <LabelStyled>
        <span>Username</span>
        <Field name="username">
          {(props) => <InputStyled type="text" {...props} />}
        </Field>
      </LabelStyled>
      <LabelStyled>
        <span>Password</span>
        <Field name="password">
          {(props) => <InputStyled type="password" {...props} />}
        </Field>
      </LabelStyled>
      <ButtonStyled type="submit">Submit</ButtonStyled>
    </FormStyled>
  );
};
