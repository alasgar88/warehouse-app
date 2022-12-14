import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./landing.css";
import { loginUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../componenets";
import { FormGroup, Label, Input, Button, Form, Spinner } from "reactstrap";

const LandingPage = () => {
  const { isLoading, userLogged } = useSelector((store) => store.user);
  const [userValue, setUserValue] = useState({ Email: "", Password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userValue.Email || !userValue.Password) {
      toast.error("Please input blank fields");
      return;
    }
    dispatch(loginUser(userValue));
  };

  useEffect(() => {
    if (userLogged) {
      setTimeout(() => {
        navigate("/user");
      }, 1000);
      // setUserValue({ Email: "", Password: "" });
    }
  }, [userLogged]);

  const handleChange = (e) => {
    const value = e.target.value.toString();
    const name = e.target.name;
    setUserValue((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  return (
    <>
      <Navbar />
      <section className='section-center'>
        <div className='main-container'>
          <div className='form-container'>
            <div className='form-title'>
              <h2>Login</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <FormGroup floating className='form'>
                <Input
                  id='email'
                  type='mail'
                  name='Email'
                  value={userValue.Email}
                  onChange={handleChange}
                />
                <Label for='exampleEmail'>Email</Label>
              </FormGroup>{" "}
              <FormGroup floating>
                <Input
                  id='password'
                  type='password'
                  name='Password'
                  value={userValue.Password}
                  onChange={handleChange}
                  s
                />
                <Label for='examplePassword'>Password</Label>
              </FormGroup>{" "}
              <Button
                color='primary'
                type='submit'
                disabled={isLoading}
                className='submit-button'
              >
                {isLoading ? (
                  <Spinner color='light' size='sm'>
                    Loading...
                  </Spinner>
                ) : (
                  "Login"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
