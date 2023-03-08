import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        navigate("/");
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
        
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;