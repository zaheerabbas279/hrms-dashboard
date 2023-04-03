import { ErrorMessage, useField } from "formik";
import React from "react";
const CustomInput = ({ label, ...props }) => {
    const [field] = useField(props);

    const errorMessage = {
        color: "red",
        // position: "absolute",
        fontSize: "11px"
    };

    return (
        <>
            <div width="100%">
                <label className="text-light me-2">{label}</label>
                <input {...field} {...props} autoComplete="true" />
                <ErrorMessage component="div" name={field.name} style={errorMessage} />
            </div>
        </>
    );
};

export default CustomInput;

