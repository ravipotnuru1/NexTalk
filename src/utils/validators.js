// Email Validation
export const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

// Password Validation
export const validatePassword = (password) => {
  if (!password.trim()) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
};

// Confirm Password Validation
export const validateConfirmPassword = (
  password,
  confirmPassword
) => {
  if (!confirmPassword.trim()) {
    return "Confirm Password is required";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "";
};

// Full Name Validation
export const validateName = (name) => {
  if (!name.trim()) {
    return "Full Name is required";
  }

  if (name.trim().length < 3) {
    return "Name must contain at least 3 characters";
  }

  return "";
};

// Required Field Validation
export const validateRequired = (
  value,
  fieldName = "Field"
) => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }

  return "";
};

// Phone Validation
export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return "Phone number is required";
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    return "Enter a valid 10-digit phone number";
  }

  return "";
};