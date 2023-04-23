import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { httpClient } from './httpClient';

export const Login: ComponentType = () => {
  const { setAppState } = useAppContext();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        const accessToken = await httpClient.post('/access-tokens', values);
        window.localStorage.setItem('ACCESS_TOKEN_ID', accessToken.id);
        setAppState({ isAuthenticated: true });
        navigate('/');
      }}
    >
      <Form className="container mx-auto mt-16 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <Field
            className="border-gray-200"
            id="username"
            name="username"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <Field
            className="border-gray-200"
            id="password"
            name="password"
            type="text"
          />
        </div>
        <button className="w-full border px-4 py-2" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
