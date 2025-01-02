"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";

// Validation schema for signup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const SignupPage = () => {
  interface FormValues {
    name: string;
    email: string;
    password: string;
  }

  const handleSubmit = (values: FormValues) => {
    // Handle signup logic here
    console.log("Signing up with", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-100 p-10 rounded-3xl shadow-lg max-w-6xl border-2 border-primary w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">
          Join LatteLink
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full flex flex-col items-center">
              {/* Name Field */}
              <div className="mb-8 w-[60%]">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="mb-8 w-[60%]">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="mb-8 w-[60%]">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Agreement Text */}
              <div className="text-md text-gray-500 mb-4 text-center w-[80%]">
                By clicking Agree and Join, you agree to LatteLink&apos;s{" "}
                <a
                  href="/user-agreement"
                  className="text-primary font-semibold underline"
                >
                  User Agreement
                </a>
                ,{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary font-semibold underline"
                >
                  Privacy Policy
                </a>
                , and{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary font-semibold underline"
                >
                  Cookie Policy
                </a>
                .
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primaryLight uppercase"
                >
                  Agree & Join
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mb-6">
                <p className="text-sm">
                  Already have an account?{" "}
                  <a
                    href="/auth/login"
                    className="text-primary font-semibold underline"
                  >
                    Login here
                  </a>
                </p>
              </div>

              {/* Or Continue With */}
              <div className="flex items-center text-center text-gray-500 text-sm mb-4 w-[80%]">
                <div className="flex-grow border-t-2 border-gray-500"></div>
                <span className="px-4">or continue with</span>
                <div className="flex-grow border-t-2 border-gray-500"></div>
              </div>

              {/* Google Sign In Button */}
              <div className="mb-6 w-[60%]">
                <button
                  type="button"
                  className="w-full px-8 py-3 bg-white border border-primary text-primary rounded-full flex items-center justify-center space-x-3 hover:bg-secondaryLight"
                >
                  <FaGoogle size={30} />
                  <span>Sign up with Google</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
