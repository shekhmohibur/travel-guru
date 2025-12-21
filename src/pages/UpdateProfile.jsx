import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

export default function UpdateProfile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-3xl bg-white border rounded-lg shadow-sm p-6 md:p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150"
              alt="Avatar"
              className="w-20 h-20 rounded-full border"
            />
            <label className="cursor-pointer text-orange-400 font-medium">
              Change Photo
              <input type="text" className="" />
            </label>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Username" placeholder="johndoe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input label="Phone" placeholder="+880 1234 567890" />
            <Input label="Location" placeholder="Dhaka, Bangladesh" />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Bio</label>
            <textarea
              rows="4"
              placeholder="Tell something about yourself"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="border px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
      />
    </div>
  );
}
