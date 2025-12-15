import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../services/userApi";
import { notifyError, notifySuccess } from "../../components/Toast";
import PasswordRules from "./PasswordRules";

// Step definitions
const formSteps = [
  {
    label: "Info",
    fields: [
      { name: "firstname", type: "text", label: "Firstname" },
      { name: "lastname", type: "text", label: "Lastname" },
      { name: "email", type: "email", label: "Email" },
      { name: "number", type: "text", label: "Phone" },
      { name: "address", type: "textarea", label: "Address" },
    ],
  },
  {
    label: "Password",
    fields: [
      { name: "password", type: "password", label: "Password" },
      { name: "confirmPassword", type: "password", label: "Confirm Password" },
    ],
  },
  {
    label: "Advocate",
    fields: [
      { name: "enrolmentNo", type: "text", label: "Enrolment No" },
      { name: "barCounselNo", type: "text", label: "Bar Counsel No" },
    ],
  },
];

// Initial values
const signUpInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  address: "",
  password: "",
  confirmPassword: "",
  enrolmentNo: "",
  barCounselNo: "",
};

// Validation schemas per step
const stepValidationSchemas = [
  Yup.object({
    firstname: Yup.string().required("First name is required").min(2, "Too short"),
    lastname: Yup.string().required("Last name is required").min(2, "Too short"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required(),
    address: Yup.string().required("Address is required"),
  }),
  Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must contain uppercase")
      .matches(/[a-z]/, "Must contain lowercase")
      .matches(/\d/, "Must contain a number")
      .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Must contain special char"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  }),
  Yup.object({
    enrolmentNo: Yup.string().required("Enrolment No. is required"),
    barCounselNo: Yup.string().required("Bar Counsel No. is required"),
  }),
];

const Signup = () => {
  const [step, setStep] = useState(1);
  const [register] = useSignUpMutation();
  const navigate = useNavigate();

  // Formik setup with per-step validation
  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: stepValidationSchemas[step - 1],
     validateOnMount: false,
    onSubmit: async ({ confirmPassword, ...values }) => {
      try {
        const signup = await register(values).unwrap();
        if (signup?.status === 201) {
          notifySuccess(signup?.message);
          navigate("/login");
        } else {
          notifyError(signup?.message);
        }
      } catch (err) {
        notifyError(err?.data?.message || "Signup failed");
      }
    },
  });

  // Move to next step
  const handleNext = async () => {
    const errors = await formik.validateForm();
    const currentFields = formSteps[step - 1].fields.map(f => f.name);
    const hasErrors = currentFields.some(field => errors[field]);

    if (hasErrors) {
      const touched = { ...formik.touched };
      currentFields.forEach(f => (touched[f] = true));
      formik.setTouched(touched);
      return;
    }
    setStep(step + 1);
  };

  // Move to previous step
  const handleBack = () => setStep(step - 1);

  return (
    <div className="card signUp w-25 mx-auto p-3 my-5 shadow rounded">
      <h2 className="text-center fw-bold text-primary fs-4 mb-3">Sign Up</h2>

      {/* Stepper */}
      <div className="stepper mx-3 mb-3">
        {formSteps.map((s, index) => {
          const isActive = step === index + 1;
          const isCompleted = step > index + 1;
          return (
            <React.Fragment key={index}>
              <div className={`step ${isCompleted ? "completed" : isActive ? "active" : ""}`}>
                <div className="step-circle">{index + 1}</div>
                <span>{s.label}</span>
              </div>
              {index < formSteps.length - 1 && <div className={`step-line ${isCompleted ? "active-line" : ""}`}></div>}
            </React.Fragment>
          );
        })}
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="row row-cols-1 mb-4">
          {formSteps[step - 1].fields.map((field) => (
            <div className="col" key={field.name}>
              <div className="form-group">
                {field.type === "textarea" ? (
                  <textarea
                    className={`form-input ${formik.touched[field.name] && formik.errors[field.name] ? "is-invalid" : ""
                      }`}
                    placeholder=" "
                    {...formik.getFieldProps(field.name)}
                    rows={2}
                  />
                ) : (
                  <input
                    type={field.type}
                    className={`form-input ${formik.touched[field.name] && formik.errors[field.name] ? "is-invalid" : ""
                      }`}
                    placeholder=" "
                    {...formik.getFieldProps(field.name)}
                  />
                )}
                <label className="form-label">{field.label}</label>
              </div>

              {field.name === "password" ? (
                <PasswordRules
                  touched={formik.touched[field.name]}
                  errors={formik.errors[field.name]}
                  value={formik.values[field.name]}
                />
              ) : (
                formik.touched[field.name] &&
                formik.errors[field.name] && (
                  <div className="text-danger mt-1">{formik.errors[field.name]}</div>
                )
              )}
            </div>
          ))}

          <div className="mt-3 d-flex justify-content-between">
            {step > 1 ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={()=>setStep(step - 1)}
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}

            {step < formSteps.length ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>setStep(step + 1)}
              >
                Next →
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            )}
          </div>
        </div>

        <div className="text-center mt-2">
          <span className="text-muted small">
            Already a user?{" "}
            <Link
              to="/login"
              className="text-primary fw-bold text-decoration-none"
            >
              Login
            </Link>
          </span>
        </div>
      </form>

    </div>
  );
};

export default Signup;
