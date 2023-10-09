import { useFormik } from "formik";
import * as yup from 'yup';
import './formik.css';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
 const RegestrationForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema:yup.object().shape({
        name:yup.string().min(4,"minimum 4 chreacter").max(20).required("please enter your name"),
        email:yup.string().email("please enter valid email").required("please enter valid email") ,
        password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number").min(6).required("please enter your password"),
        confirmPassword:yup.string().required("please ReEnter your password")
        .oneOf([yup.ref('password'),null],"password must match")
    }),
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
   
  return (
    <>  
   
    <div className="form">
  
      <form onSubmit={handleSubmit}>
      

    <h2>RegistrationForm</h2>
    <div className="name">
      <label htmlFor="name">Name</label>
      <br />
      <input 
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name ? <h6>{errors.name}</h6> : null}
      </div>
      <div className="email">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? <h6>{errors.email}</h6> : null}
      </div>
    <div className="password">
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        // autoComplete="off"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br/>
        <span>? forget password</span>
      {errors.password && touched.password ? <h6>{errors.password}</h6> : null}
      </div>
    <div className="cmpassword">

      <label htmlFor="confirmPassword">ConfirmPassword </label>
      <br />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="ConfirmPassword"
        // autoComplete="off"
        // value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      
      {errors.confirmPassword && touched.confirmPassword ? (
        <h6>{errors.confirmPassword}</h6>
      ) : null}
        </div>
      <button type="submit">Regestration</button>
      
    </form>
    <div className="image">
      <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.
      3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="image"/>
    </div>
    </div>
    </>

  );
};
export default RegestrationForm;
