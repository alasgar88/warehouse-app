import React, { useState, useEffect } from "react";
import "./edit-user.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { InfoModal } from "../../../../componenets";
import { toast } from "react-toastify";
import { forgetPassword } from "../../../../features/user/userSlice";
import { useSelector } from "react-redux";
import { changePassword } from "../../../../features/user/userSlice";
import { AiOutlineCloseSquare } from "react-icons/ai";

const EditUser = ({ showEditUser, setShowEditUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { editUserEmail } = useSelector((store) => store.user);
  const [userData, setUserData] = useState({
    email: editUserEmail,
    newPassword: "",
    PasswordConfirmation: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.email ||
      !userData.newPassword ||
      !userData.PasswordConfirmation
    ) {
      toast.error("empty values");
      return;
    } else if (userData.newPassword !== userData.PasswordConfirmation) {
      toast.error("passwords does not match");
      return;
    }
    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={changePassword}
        data={userData}
        text='Confirm to change password'
      />
      <button
        className='category-button close-button'
        onClick={() => setShowEditUser(!showEditUser)}
      >
        <span className='close-icon'>
          <AiOutlineCloseSquare />
        </span>
      </button>
      <p className='create-user-heading'>Reset Password</p>
      <p
        className='reset-password-instructions'
        style={{ marginBottom: "15px", fontSize: "13px" }}
      >
        Change User Password
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='email'>Email address</Label>
          <Input
            id='email'
            name='email'
            value={userData.email}
            placeholder='enter your email'
            type='email'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            name='newPassword'
            placeholder='enter your password'
            value={userData.newPassword}
            type='password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='passwordConfirm'>Repeate Password</Label>
          <Input
            id='asswordConfirm'
            name='PasswordConfirmation'
            placeholder='repeate password'
            type='password'
            onChange={handleChange}
            value={userData.PasswordConfirmation}
          />
        </FormGroup>
        <Button>Change Password</Button>
      </Form>
    </div>
  );
};

export default EditUser;
