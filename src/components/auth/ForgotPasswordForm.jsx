import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../common/Input";
import Button from "../common/Button";

import ROUTES from "../../constants/routes";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      toast.success("Password reset link sent to your email.");
      setLoading(false);
      setEmail("");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Forgot Password
        </h2>

        <p className="mt-2 text-gray-500">
          Enter your registered email to receive a password reset link.
        </p>
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        placeholder="Enter your email"
        error={error}
        required
      />

      <Button
        type="submit"
        fullWidth
        loading={loading}
      >
        Send Reset Link
      </Button>

      <p className="text-center text-sm text-gray-600">
        Remember your password?{" "}
        <Link
          to={ROUTES.LOGIN}
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Back to Login
        </Link>
      </p>

    </form>
  );
}

export default ForgotPasswordForm;