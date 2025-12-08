import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../services/userApi";
import { notifyError, notifySuccess } from "../components/Toast";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [register] = useSignUpMutation()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required").min(2, "Too short"),
      lastname: Yup.string().required("Last name is required").min(2, "Too short"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      number: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
      address: Yup.string()
        .required("Address is required"),
      // username: Yup.string()
      //   .min(2, "Username too short!")
      //   .max(50, "Username too long!")
      //   .required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        // .min(8, "Password must be at least 8 characters")
        // .max(50, "Password must be at most 50 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Must contain at least one special character"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async ({ confirmPassword, ...values }) => {
      console.log(values);
      try {
        console.log("Submitting:", values);
        const signup = await register(values).unwrap();
        console.log("Signup response:", signup);
        if (signup?.status === 201) {
          notifySuccess(signup?.message);
          navigate("/login");
        } else {
          notifyError(signup?.message);
        }
      } catch (err) {
        console.error("Signup failed:", err);
        notifyError(err?.data?.message || "Signup failed");
      }
    }
  });

  const rules = [
    { text: "At least 8 characters", test: pwd => pwd.length >= 8 },
    { text: "At least 1 uppercase letter", test: pwd => /[A-Z]/.test(pwd) },
    { text: "At least 1 lowercase letter", test: pwd => /[a-z]/.test(pwd) },
    { text: "At least 1 number", test: pwd => /\d/.test(pwd) },
    { text: "At least 1 special character", test: pwd => /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(pwd) }
  ];

  const handleNext = async () => {
    const errors = await formik.validateForm();

    if (step === 1) {
      if (
        errors.firstname ||
        errors.lastname ||
        errors.email ||
        errors.address ||
        errors.number
      ) {
        formik.setTouched({
          firstname: true,
          lastname: true,
          email: true,
          address: true,
          number: true,
        });
        return;
      }
    }

    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);



  return (
    <div className="card signUp d-flex w-25 mx-auto p-3 my-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h2 className="mb-3 text-center fw-bold text-primary fs-4">Sign Up</h2>
      <div className="stepper position-relative">
        <div className={`step ${step > 1 ? "completed" : step === 1 ? "active" : ""}`}>
          <div className="step-circle">1</div>
          Info
        </div>
        <div className={`step-line ${step >= 2 ? "active-line" : ""}`}></div>

        <div className={`step ${step === 2 ? "active" : ""}`}>
          <div className="step-circle">2</div>
          Password
          { /* Add line if you have more steps */}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <div className="row row-cols-1 mb-4">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-input ${formik?.touched?.firstname && formik?.errors?.firstname ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("firstname")}
                />
                <label className="form-label">Firstname</label>
              </div>
              {formik?.touched?.firstname && formik?.errors?.firstname && (
                <div className="text-danger mt-1">{formik?.errors?.firstname}</div>
              )}
            </div>

            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-input ${formik?.touched?.lastname && formik?.errors?.lastname ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("lastname")}
                />
                <label className="form-label">Lastname</label>
              </div>
              {formik?.touched?.lastname && formik?.errors?.lastname && (
                <div className="text-danger mt-1">{formik?.errors?.lastname}</div>
              )}
            </div>

            <div className="col">
              <div className="form-group">
                <input
                  type="email"
                  className={`form-input ${formik?.touched?.email && formik?.errors?.email ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("email")}
                />
                <label className="form-label">Email</label>
              </div>
              {formik?.touched?.email && formik?.errors?.email && (
                <div className="text-danger mt-1">{formik?.errors?.email}</div>
              )}
            </div>

            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-input ${formik?.touched?.number && formik?.errors?.number ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("number")}
                />
                <label className="form-label">Phone</label>
              </div>
              {formik?.touched?.number && formik?.errors?.number && (
                <div className="text-danger mt-1">{formik?.errors?.number}</div>
              )}
            </div>
            <div className="col">
              <div className="form-group">
                <textarea
                  className={`form-input ${formik?.touched?.address && formik?.errors?.address ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("address")}
                  rows={2}   // you can change row count
                ></textarea>
                <label className="form-label">Address</label>
              </div>

              {formik?.touched?.address && formik?.errors?.address && (
                <div className="text-danger mt-1">{formik?.errors?.address}</div>
              )}
            </div>

            <div className="col-12 mt-3 d-flex justify-content-end">
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="row row-cols-1 mb-4">

            <div className="col">
              <div className="form-group">
                <input
                  type="password"
                  className={`form-input ${formik?.touched?.password && formik?.errors?.password ? "is-invalid" : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("password")}
                />
                <label className="form-label">Password</label>
              </div>
              <div>
                <p className={`${formik?.touched?.password && formik?.errors?.password ? "text-danger" : "text-secondary"} mb-0 ms-2 fw-semibold`}>Password must contain</p>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {rules.map(({ text, test }, idx) => {
                    const passed = test(formik.values.password);
                    const className = !formik?.touched?.password ? "text-secondary" : passed ? "text-success" : "text-danger";
                    const Icon = !formik?.touched?.password
                      ? <i className="bi bi-circle-fill d-flex align-self-center" style={{ fontSize: "6px" }}></i>
                      : passed
                        ? <i className="bi bi-check-circle text-success"></i>
                        : <i className="bi bi-x-circle text-danger"></i>;
                    return (
                      <li key={idx} className={className} style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "10px", marginBottom: "4px", fontSize: "14px", fontWeight: "500" }}>
                        {Icon} {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <input
                  type="password"
                  className={`form-input ${formik?.touched?.confirmPassword && formik?.errors?.confirmPassword
                    ? "is-invalid"
                    : ""
                    }`}
                  placeholder=" "
                  {...formik.getFieldProps("confirmPassword")}
                />
                <label className="form-label">Confirm Password</label>
              </div>

              {formik?.touched?.confirmPassword && formik?.errors?.confirmPassword && (
                <div className="text-danger mt-1">
                  {formik?.errors?.confirmPassword}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-3 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handleBack}>
                ← Previous
              </button>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        )}
        <div className="text-center mt-2">
          <span className="text-muted small">
            Already a user?{" "}
            <Link to="/login" className="text-primary fw-bold text-decoration-none">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
