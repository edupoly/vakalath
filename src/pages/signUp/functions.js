import * as Yup from "yup";

export const rules = [
    { text: "At least 8 characters", test: pwd => pwd.length >= 8 },
    { text: "At least 1 uppercase letter", test: pwd => /[A-Z]/.test(pwd) },
    { text: "At least 1 lowercase letter", test: pwd => /[a-z]/.test(pwd) },
    { text: "At least 1 number", test: pwd => /\d/.test(pwd) },
    { text: "At least 1 special character", test: pwd => /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(pwd) }
];

export const formSteps = [
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
            // { name: "enrolmentNo", type: "text", label: "Enrolment No" },
            // Add fields if needed for future use
        ],
    },
];

export const signUpInitialValues = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    address: "",
    enrolmentNo: "",
    barCounselNo: "",
    password: "",
    confirmPassword: "",
}

export const validationShape = [
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
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required(),
  }),
  Yup.object({
    enrolmentNo: Yup.string().required("Enrolment No. is required"),
    barCounselNo: Yup.string().required("Bar Counsel No. is required"),
  }),
];

// export const handleNext = async (formik, step, setStep) => {
    // const errors = await formik.validateForm();

    // const currentFields = formSteps[step - 1].fields.map(f => f.name);

    // const hasErrors = currentFields.some(field => errors[field]);
    // console.log("hasErrors",hasErrors,currentFields,formik.touched, formik.errors);
    
    // if (hasErrors) {
    //     const touched = {};
    //     currentFields.forEach(field => touched[field] = true);
    //     console.log("currentFields", touched);
    //     formik.setTouched(touched); 

    //     return;
    // }
    // setStep(step + 1);
// };


// export const handleBack = (step, setStep) => setStep(step - 1);