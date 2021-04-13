import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/action";
import { useFormik } from "formik";
import * as Yup from "yup";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("username")) history.push("/");
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(255, "Maximum 255 characters")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const input = {
        userName: values.userName,
        password: values.password,
      };
      // console.log("<<<<<<", input);
      dispatch(userLogin(input));
      history.push("/");
    },
  });

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.DashboardOverview.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p> */}
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in</h3>
                </div>
                <Form className="mt-4" onSubmit={formik.handleSubmit}>
                  <Form.Group id="userName" className="mb-4">
                    <Form.Label>Username</Form.Label>
                    {formik.errors.userName && formik.touched.userName && (
                      <span style={{ color: "red" }}>
                        {formik.errors.userName}
                      </span>
                    )}
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        name="userName"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                        onBlur={formik.handleBlur}
                        type="text"
                        placeholder="Input your username"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      {formik.errors.password && formik.touched.password && (
                        <span style={{ color: "red" }}>
                          {formik.errors.password}
                        </span>
                      )}
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      {/* <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">
                        Lost password?
                      </Card.Link> */}
                    </div>
                  </Form.Group>
                  {/* <Link to={Routes.DashboardOverview.path}> */}
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                  {/* </Link> */}
                  {/* <Link to={Routes.DashboardOverview.path}>
                    <Button
                      variant="secondary"
                      type="submit"
                      className="w-100"
                      onClick={() =>
                        localStorage.setItem("username", "original")
                      }
                    >
                      Sign in original
                    </Button>
                  </Link>
                  <Link to={Routes.DashboardOverview.path}>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100"
                      onClick={() => localStorage.setItem("username", "user")}
                    >
                      Sign in user
                    </Button>
                  </Link> */}
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div> */}
                {/* <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div> */}
                {/* <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={Routes.Signup.path}
                      className="fw-bold"
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
