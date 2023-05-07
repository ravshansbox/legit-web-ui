import { useForm } from '@ravshansbox/react-form';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../AppContext';

export function NewUser() {
  const navigate = useNavigate();

  const { Form, Field } = useForm({
    initialValues: { username: '', password: '' },
    handleSubmit: async (body) => {
      await httpClient.request('post', '/users', { body });
      navigate('/users');
    },
  });

  return (
    <div>
      <h1>Create User</h1>
      <Form>
        <Field name="username">
          {(props) => <input type="text" {...props} />}
        </Field>
        <Field name="password">
          {(props) => <input type="password" {...props} />}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
