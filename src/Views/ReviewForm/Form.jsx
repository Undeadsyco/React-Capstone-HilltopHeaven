import { useFormik } from "formik";
import * as yup from 'yup';

import FormContainer from './styles';

const validation = yup.object({
  name: yup.string().required('please enter your name'),
  email: yup.string().required('please enter your email address'),
  contact: yup.number().required('please enter your contact number').test('length', 'contact number must be 10 digits long', 
    val => val && val.toString().length === 10
  ),
  area: yup.string().required('please select a category'),
  message: yup.string().required('message feild cannot be empty')
})

const Form = ({ submit }) => {
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      email: '',
      contact: '',
      area: '',
      message: ''
    },
    onSubmit: (values) => {
      submit(values).then(res => {
        if (res.name) {
          alert("review was successfully posted");
        }
      });
    }
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <h2>Drop A Message!</h2>

        <label htmlFor="name">
          <div>Name:</div>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your name"
          />
          {formik.errors.name && formik.touched.name && <div className="err">{formik.errors.name}</div>}
        </label>
        
        <label htmlFor="email">
          <div>Email:</div>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
          />
          {formik.errors.email && formik.touched.email && <div className="err">{formik.errors.email}</div>}
        </label>

        <label htmlFor="contact">
          <div>Contact:</div>
          <input
            id="contact"
            name="contact"
            type="number"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your contact number"
          />
          {formik.errors.contact && formik.touched.contact && <div className="err">{formik.errors.contact}</div>}
        </label>
        
        <label htmlFor="area">
          <div>Area:</div>
          <select 
            name="area" 
            id="area"
            value={formik.values.area}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Category</option>
            <option value="customer service">Customer Service</option>
            <option value="hygiene/ambience">Hygiene and Ambience</option>
            <option value="dining">Dining</option>
            <option value="spa">Spa</option>
            <option value="swimmimg pool">Swimming Pool</option>
            <option value="other">Others</option>
          </select>
          {formik.errors.area && formik.touched.area && <div className="err">{formik.errors.area}</div>}
        </label>
        
        <label className="textarea" htmlFor="message">
          <div>Message:</div>
          <textarea 
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Type a message to us"
          ></textarea>
          {formik.errors.message && formik.touched.message && <div className="err">{formik.errors.message}</div>}
        </label>

        <div className="btnbox">
          <button>Send</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;