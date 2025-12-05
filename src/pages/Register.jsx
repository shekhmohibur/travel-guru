import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

export default function Register({ onSwitch }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    identifier: "",
    password: "",
    confirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register Data:", form);
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 border rounded-lg shadow-sm">
        <div className="card-body p-8">
          <h2 className="text-2xl font-semibold">Create an account</h2>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Username or Email */}
            <div>
              <label className="label">
                <span className="label-text">Username or Email</span>
              </label>
              <input
                type="text"
                name="identifier"
                value={form.identifier}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-warning w-full">
              Create an account
            </button>

            {/* Switch to login */}
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <Link
              to={'/auth/login'}
                className="link"
                onClick={() => onSwitch("login")}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-base-200" />
        <div className="text-sm">Or</div>
        <div className="flex-1 h-px bg-base-200" />
      </div>

      {/* OAuth Buttons */}
      <div className="space-y-3">
        <button className="btn btn-outline btn-wide rounded-full justify-start">
          <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
            <FaFacebookF />
          </span>
          <span className="flex-1 text-center">Continue with Facebook</span>
        </button>

        <button className="btn btn-outline btn-wide rounded-full justify-start">
          <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
            <FcGoogle size={20} />
          </span>
          <span className="flex-1 text-center">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
