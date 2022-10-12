import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./landing.css";
import { loginUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../componenets";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";

const LandingPage = () => {
  const { isLoading } = useSelector((store) => store.user);
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
    setUserValue({ Email: "", Password: "" });
    setTimeout(() => {
      navigate("/user");
    }, 1000);
  };

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
              <Button type='submit' disabled={isLoading}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
