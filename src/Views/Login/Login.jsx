import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import LoginContainer from './styles';

const validation = yup.object({
  name: yup.string(),
  password: yup.string()
});

const Login = ({ submit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: (values) => {
      submit(values).then(res => {
        if(res.password !== values.password) {
          alert('Incorrect Password');
          return;
        }

        localStorage.setItem('user', JSON.stringify(res));
        dispatch({ type: 'LOGIN', data: res })
        alert('Login was successful!');
        navigate('/welcome')
      })
    }
  });

  return (
    <LoginContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className="heading">
          <h1>Login Here</h1>
        </div>

        <label htmlFor="name">
          <div>Name:</div>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        
        <label htmlFor="password">
          <div>Password:</div>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        <div className="btn">
          <button>Login</button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
