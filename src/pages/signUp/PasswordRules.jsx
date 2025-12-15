import React from "react";
import { rules } from "./functions";

const PasswordRules = ({ touched, errors, value }) => {
  return (
    <div>
      <p
        className={`${
          touched && errors ? "text-danger" : "text-secondary"
        } mb-0 ms-2 fw-semibold`}
      >
        Password must contain
      </p>

      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {rules.map(({ text, test }, idx) => {
          const passed = test(value);

          const className = !touched
            ? "text-secondary"
            : passed
            ? "text-success"
            : "text-danger";

          const Icon = !touched ? (
            <i
              className="bi bi-circle-fill d-flex align-self-center"
              style={{ fontSize: "6px" }}
            ></i>
          ) : passed ? (
            <i className="bi bi-check-circle text-success"></i>
          ) : (
            <i className="bi bi-x-circle text-danger"></i>
          );

          return (
            <li
              key={idx}
              className={className}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginLeft: "10px",
                marginBottom: "4px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {Icon} {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordRules;
