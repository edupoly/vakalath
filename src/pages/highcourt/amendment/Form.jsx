import React, { useEffect } from "react";
import { useFormik } from "formik";
import FloatingInput from "../../../components/floatingInput";

function AmendmentForm({ formData, setFormData }) {
  const vakalathForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      highcourt: formData?.highcourt || "",
      iaNo: formData?.iaNo || "",
      myear: formData?.myear || "",
      wpNo: formData?.wpNo || "",
      DISTRICT: formData?.DISTRICT || "",
      PETITIONER_NAME: formData?.PETITIONER_NAME || "",
      counsel_code: formData?.counsel_code || "",
      MAIN_PRAYER: formData?.MAIN_PRAYER || "",
      fdate: formData?.fdate || "",
    },
    onSubmit: (values) => {
      setFormData({ ...values });
      console.log("Form submitted", values);
    },
  });

  return (
    <form onSubmit={vakalathForm.handleSubmit}>
      <div className="row row-cols-1 row-cols-md-2 mb-3">
        <FloatingInput
          id="highcourt"
          name="highcourt"
          label="High Court"
          value={vakalathForm.values.highcourt}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="iaNo"
          name="iaNo"
          label="I.A. No."
          value={vakalathForm.values.iaNo}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="myear"
          name="myear"
          label="Year"
          value={vakalathForm.values.myear}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="wpNo"
          name="wpNo"
          label="W.P. No."
          value={vakalathForm.values.wpNo}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="DISTRICT"
          name="DISTRICT"
          label="District"
          value={vakalathForm.values.DISTRICT}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="PETITIONER_NAME"
          name="PETITIONER_NAME"
          label="Petitioner Name"
          value={vakalathForm.values.PETITIONER_NAME}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="counsel_code"
          name="counsel_code"
          label="Counsel Code"
          value={vakalathForm.values.counsel_code}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="MAIN_PRAYER"
          name="MAIN_PRAYER"
          label="Main Prayer"
          value={vakalathForm.values.MAIN_PRAYER}
          onChange={vakalathForm.handleChange}
          type="text"
        />
        <FloatingInput
          id="fdate"
          name="fdate"
          label="Date"
          value={vakalathForm.values.fdate}
          onChange={vakalathForm.handleChange}
          type="date"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-success w-50">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AmendmentForm;
