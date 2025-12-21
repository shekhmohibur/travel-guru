import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router";
import NavBar from "../components/NavBar";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);
  
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const photoURL = form.photoURL.value;
    const profile = {
      displayName: name,
      photoURL: photoURL,
  };
    updateUserProfile(profile)
    .then(() => {
      alert("Profile updated successfully");
    })
    .catch((error) => {
      alert(error);
    });
  };
  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-3xl bg-white border rounded-lg shadow-sm p-6 md:p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150"
              alt="Avatar"
              className="w-20 h-20 rounded-full border"
            />
            <label className="cursor-pointer text-orange-400 font-medium">
              <input name="photoURL" type="text" className="input outline-none" placeholder="Photo URL"/>
            </label>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="fullName" label="Full Name" placeholder="John Doe" className="input outline-none"/>
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded transition cursor-pointer"
            >
              Save Changes
            </button>
            <Link
            to={`/profile`}
              type="button"
              className="border px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}