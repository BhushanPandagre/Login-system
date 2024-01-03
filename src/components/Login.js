import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const history = useNavigate();


    const [input, setinput] = useState({

        email: "",

        password: ""
    })
    const [data, setData] = useState([]);

    const getdata = (e) => {
        // console.log(e);

        const { value, name } = e.target;

        setinput(() => {
            return {
                ...input,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        // console.log(input);

        const getuserArr = localStorage.getItem("bhushan");

        console.log(getuserArr);

        const { email, password } = input;


        if (email === "") {
            alert("email field is required..!!")
        } else if (!email.includes("@")) {
            alert("please enter vailid email")
        }

        else if (password === "") {
            alert("password field is required..!!")
        } else if (password.length < 5) {
            alert("password length greter five")
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);

                console.log(userdata);

                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("Invailid Details");
                } else {
                    console.log("User login successfully...!!!")

                    localStorage.setItem("bhoju", JSON.stringify(userlogin));

                    history("/details");
                }
            }
        }
        setinput({email:"",password:""});

    }

    return (<>

        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Sign IN </h3>

                    <Form>


                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email" name="email" value={input.email} onChange={getdata} placeholder="Enter  your email" />

                        </Form.Group>



                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                            <Form.Control type="password" name="password" value={input.password} onChange={getdata} placeholder=" enter your Password" />
                        </Form.Group>

                        <Button variant="success" className='col-lg-6' onClick={addData} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account <span>Singin</span></p>

                </div>
                <div className="right_data mt-1" style={{ width: "100%" }}>
                    <div className='sign_img mt-1'>
                        <img src='./images/sign-up.png' style={{ maxWidth: 400 }} alt="" />
                    </div>
                </div>
            </section>
        </div>


    </>)
}
export default Login;