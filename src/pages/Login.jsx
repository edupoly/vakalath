import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../services/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../services/userSlice';

const Login = () => {
  const [loginUser] = useLogInMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, 'Username too short!')
        .max(50, 'Username too long!')
        .required('Username is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password too long!')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      let login = await loginUser(values)
      if (login?.data?.user) {
        localStorage?.setItem('token', login?.data?.token)
        dispatch(setUser(login?.data?.user));
        navigate('/')
      }
    },
  });

  useEffect(() => {
    document.title = "Login"
  }, [])

  return (
    <div className='loginPage'>
      <div className='card p-4 shadow-sm bg-body-tertiary border-0  rounded-4'>
        <form onSubmit={loginForm.handleSubmit}>
          <h2 className="mb-3 text-center fw-bold text-primary fs-4">Login</h2>
          <div className="form-group">
            <input
              type="text"
              id="floatingUsername"
              placeholder=" "
              {...loginForm.getFieldProps('username')}
              className={`form-input ${loginForm.touched.username && loginForm.errors.username ? ' is-invalid' : ''}`}
            />
            <label className='form-label' htmlFor="floatingUsername">Username</label>
          </div>
            {loginForm.touched.username && loginForm.errors.username && (
              <div className="text-danger mt-1 mb-2">{loginForm.errors.username}</div>
            )}
          <div className="form-group">
            <input
              type="password"
              id="floatingPassword"
              placeholder=" "
              {...loginForm.getFieldProps('password')}
              className={`form-input${loginForm.touched.password && loginForm.errors.password ? ' is-invalid' : ''}`}
            />
            <label className='form-label' htmlFor="floatingPassword">Password</label>
          </div>
            {loginForm.touched.password && loginForm.errors.password && (
              <div className="text-danger mt-1 mb-2">{loginForm.errors.password}</div>
            )}
          <button type="submit" className="login-btn btn w-100 text-white btn-primary">Login</button>
        </form>
        <div className="mt-3 text-center">
          <span>Are you a new user? </span>
          <Link to="/signup" className="text-primary text-decoration-none">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
