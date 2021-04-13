import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Card,
  FormCheck,
  Container,
} from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUser, userRegister } from "../store/actions/action";
import { useFormik } from "formik";
import * as Yup from "yup";

export default () => {
  // const [formUsername, setFormUsername] = useState("");
  // const [formEmail, setFormEmail] = useState("");
  // const [formPassword, setFormPassword] = useState("");
  // const [formPasswordConfirm, setFormPasswordConfirm] = useState("");
  // const [formRole, setFormRole] = useState("");

  // let changeFormUsername = (e) => {
  //   setFormUsername(e.target.value);
  // };

  // let changeFormEmail = (e) => {
  //   setFormEmail(e.target.value);
  // };

  // let changeFormPassword = (e) => {
  //   setFormPassword(e.target.value);
  // };

  // let changeFormPasswordConfirm = (e) => {
  //   setFormPasswordConfirm(e.target.value);
  // };

  // let changeFormRole = (e) => {
  //   setFormRole(e.target.value);
  // };

  const dispatch = useDispatch();
  const history = useHistory();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      role: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!")
        .test({
          name: "duplicate-username-check",
          params: "value",
          message: " Already Exists",
          test: async (value) => {
            for (var i = 0; i < users.listUser.length; i++) {
              if (users.listUser[i].userName === value) {
                return false;
              }
            }
            return true;
          },
        }),
      email: Yup.string()
        .email("Invalid Format")
        .required("Required!")
        .test({
          name: "duplicate-email-check",
          params: "value",
          message: " Already Exists",
          test: async (value) => {
            for (var i = 0; i < users.listUser.length; i++) {
              if (users.listUser[i].email === value) {
                return false;
              }
            }
            return true;
          },
        }),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
      passwordConfirm: Yup.string()
        .min(5, "Minimum 5 characters")
        .oneOf([Yup.ref("password")], "not match")
        .required("Required!"),
      role: Yup.string().oneOf(["hrd", "interviewer"]).required("Required!"),
    }),
    onSubmit: (values) => {
      const input = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        role: values.role,
      };
      dispatch(userRegister(input));
      history.push("/");
    },
  });

  return (
    <>
      <Row className="justify-content-center form-bg-image">
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <div className="text-center text-md-center mb-4 mt-md-0">
              <h3 className="mb-0">Register User</h3>
            </div>
            <Form className="mt-4" onSubmit={formik.handleSubmit}>
              <Form.Group id="name" className="mb-4">
                <Form.Label>Username</Form.Label>
                {formik.errors.userName && formik.touched.userName && (
                  <span style={{ color: "red" }}>{formik.errors.userName}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="John"
                    name="userName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="email" className="mb-4">
                <Form.Label>Email</Form.Label>
                {formik.errors.email && formik.touched.email && (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="example@company.com"
                    type="text"
                    name="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label>Password</Form.Label>
                {formik.errors.password && formik.touched.password && (
                  <span style={{ color: "red" }}>{formik.errors.password}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                {formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm && (
                    <span style={{ color: "red" }}>
                      {formik.errors.passwordConfirm}
                    </span>
                  )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="passwordConfirm"
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="role" className="mb-4">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  type="text"
                  name="role"
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                  onChange={formik.handleChange}
                >
                  <option defaultValue>Open this select role</option>
                  <option>hrd</option>
                  <option>interviewer</option>
                </Form.Select>
                <div style={{ color: "red" }}>
                  {formik.errors.role && formik.touched.role && (
                    <p>{formik.errors.role}</p>
                  )}
                </div>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Sign up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
