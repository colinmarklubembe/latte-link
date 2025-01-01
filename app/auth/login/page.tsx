"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";

// Validation schema for email and password
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
  interface FormValues {
    email: string;
    password: string;
  }

  const handleSubmit = (values: FormValues) => {
    // Handle login logic here
    console.log("Logging in with", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-gray-100 p-10 rounded-3xl shadow-lg max-w-6xl border-2 border-primary w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">
          Login to LatteLink
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full flex flex-col items-center">
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
              <div className="mb-4 w-[60%]">
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

              {/* Forgot Password Link */}
              <div className="mb-6 w-[60%] text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-primary font-semibold underline"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-4 w-[30%]">
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-white rounded-full hover:bg-primaryLight uppercase"
                >
                  Login
                </button>
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
                  <span>Sign in with Google</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mb-6">
                <p className="text-sm">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/auth/signup"
                    className="text-primary font-semibold underline"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
