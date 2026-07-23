import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiArrowRight } from "react-icons/fi";

import Input from "../common/Input";
import PasswordInput from "./PasswordInput";
import Button from "../common/Button";

import useAuth from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";

function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      signup(
        formData.name,
        formData.email,
        formData.password
      );

      toast.success("Account created successfully");

      navigate(ROUTES.DASHBOARD);

      setLoading(false);
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-slate-900">
          Create Account
        </h2>

        <p className="mt-3 text-lg text-gray-500">
          Join NexTalk and start chatting with your friends.
        </p>
      </div>

      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Carter"
        error={errors.name}
        required
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
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

      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        required
      />
      <Button
        type="submit"
        fullWidth
        loading={loading}
        className="group h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <span className="flex items-center justify-center gap-2">
          Create Account
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-400">
            Already registered?
          </span>
        </div>
      </div>

      <p className="text-center text-base text-gray-600">
        Already have an account?{" "}
        <Link
          to={ROUTES.LOGIN}
          className="font-semibold text-blue-600 transition hover:text-indigo-600"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;