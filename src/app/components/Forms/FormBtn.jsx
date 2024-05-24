"use client";

import React from "react";
import { useForm } from "react-hook-form";

function FormBtn() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
    getValues,
    clearErrors,
  } = useForm();

  return (
    <div>
      <button
        type="submit"
        className="disabled:bg-slate-500 border p-2.5 bg-sky-400 text-white"
      >
        {isSubmitting ? "Loading.." : "Register"}
      </button>
    </div>
  );
}

export default FormBtn;
