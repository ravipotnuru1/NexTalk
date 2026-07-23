import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiArrowRight } from "react-icons/fi";

import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "./PasswordInput";

import useAuth from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      const success = login(
        formData.email,
        formData.password
      );

      if (success) {
        toast.success("Login Successful");
        navigate(ROUTES.DASHBOARD);
      } else {
        toast.error("Invalid Credentials");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          Sign in to continue using NexTalk.
        </p>
      </div>

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="h-4 w-4 rounded accent-blue-600"
          />

          Remember me
        </label>

        <Link
          to={ROUTES.FORGOT_PASSWORD}
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        fullWidth
        loading={loading}
        className="group h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <span className="flex items-center justify-center gap-2">
          Login
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-slate-800 px-4 text-sm text-gray-500 dark:text-gray-400">
            New to NexTalk?
          </span>
        </div>
      </div>

      <p className="text-center text-base text-gray-600 dark:text-gray-300">
        Don't have an account?{" "}
        <Link
          to={ROUTES.SIGNUP}
          className="font-semibold text-blue-600 dark:text-blue-400 transition hover:text-indigo-600 dark:hover:text-blue-300"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;