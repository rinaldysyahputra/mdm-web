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
import { useFormik } from "formik";
import * as Yup from "yup";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { company } = useSelector(state => state)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      desc: "",
      isActive: true,
      validFrom: "",
      validTo: "",
    },
    // validationSchema: Yup.object({
    //   name: Yup.string()
    //     .min(2, "Mininum 2 characters")
    //     .max(255, "Maximum 255 characters")
    //     .required("Required!"),
    //   email: Yup.string()
    //     .email("Invalid email format")
    //     .required("Required!")
    //     .test({
    //       name: "duplicate-email-check",
    //       params: "value",
    //       message: "Already exists",
    //       test: async (value) => {
    //         for (var i = 0; i < users.listUser.length; i++) {
    //           if (users.listUser[i].email === value) {
    //             return false;
    //           }
    //         }
    //         return true;
    //       },
    //     }),
    //   phone: Yup.string()
    //     .matches(phoneRegExp, "Must a valid phone number!")
    //     .required("Required!")
    //     .test({
    //       name: "duplicate-phone-check",
    //       params: "value",
    //       message: "Already exists",
    //       test: async (value) => {
    //         for (var i = 0; i < jobSeekers.listJobSeeker.length; i++) {
    //           if (jobSeekers.listJobSeeker[i].phone === value) {
    //             return false;
    //           }
    //         }
    //         return true;
    //       },
    //     }),
    //   position: Yup.string()
    //     .oneOf(["Full Stack Engineer", "Android Engineer", "IOS Engineer"])
    //     .required("Required!"),
    //   desc: Yup.string().min(5, "Minimum 5 characters").required("Required!"),
    //   validFrom: Yup.string()
    //     .min(5, "Minimum 5 characters")
    //     .required("Required!"),
    //   validTo: Yup.string()
    //     .min(5, "Minimum 5 characters")
    //     .required("Required!"),
    // }),
    onSubmit: (values) => {
      const input = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        position: values.position,
        desc: values.desc,
        isActive: values.isActive,
        validFrom: values.validFrom,
        validTo: values.validTo,
      };
      history.push("/");
    },
  });
  console.log(company);

  return (
    <>
      <Row className="justify-content-center form-bg-image">
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <div className="text-center text-md-center mb-4 mt-md-0">
              <h3 className="mb-0">Drugs</h3>
            </div>
            <Form className="mt-4" onSubmit={formik.handleSubmit}>
              <Form.Group id="name" className="mb-4">
                <Form.Label>Name</Form.Label>
                {formik.errors.name && formik.touched.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="John"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
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
                    name="email"
                    placeholder="example@company.com"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="phone" className="mb-4">
                <Form.Label>Phone</Form.Label>
                {formik.errors.phone && formik.touched.phone && (
                  <span style={{ color: "red" }}>{formik.errors.phone}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    name="phone"
                    placeholder="08xxx"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    type="text"
                  />
                </InputGroup>
              </Form.Group>
              {/* <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck> */}

              <Form.Group id="position" className="mb-4">
                <Form.Label>Applied Position</Form.Label>

                <Form.Select
                  name="position"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.position}
                >
                  <option defaultValue>Open this select position</option>
                  <option>Full Stack Engineer</option>
                  <option>Android Engineer</option>
                  <option>IOS Engineer</option>
                </Form.Select>
                <div style={{ color: "red" }}>
                  {formik.errors.position && formik.touched.position && (
                    <p>{formik.errors.position}</p>
                  )}
                </div>
              </Form.Group>
              <Form.Group id="desc" className="mb-4">
                <Form.Label>Your Description</Form.Label>
                {formik.errors.desc && formik.touched.desc && (
                  <span style={{ color: "red" }}>{formik.errors.desc}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    name="desc"
                    placeholder="I am xxxx"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    type="text"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="validFrom" className="mb-4">
                <Form.Label>Valid From</Form.Label>
                {formik.errors.validFrom && formik.touched.validFrom && (
                  <span style={{ color: "red" }}>
                    {formik.errors.validFrom}
                  </span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    name="validFrom"
                    placeholder="I am xxxx"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.validFrom}
                    type="date"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="validTo" className="mb-4">
                <Form.Label>Valid To</Form.Label>
                {formik.errors.validTo && formik.touched.validTo && (
                  <span style={{ color: "red" }}>{formik.errors.validTo}</span>
                )}
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    name="validTo"
                    placeholder="I am xxxx"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.validTo}
                    type="date"
                  />
                </InputGroup>
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
