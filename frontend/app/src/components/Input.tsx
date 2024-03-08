import { Field, ErrorMessage } from "formik";
import { ChangeEvent } from "react";
import { InputInterface } from "@/types/types";

const Input = ({ label, name, onChange, type }: InputInterface) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={`Enter ${label}`}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        className="form-control"
      />
      <ErrorMessage name={name}>
        {(message) => <div className="text-danger">{message}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
