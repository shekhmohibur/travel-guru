import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NavBar from "../components/NavBar";

export default function Profile() {
    const { user } = use(AuthContext);
  return (
    <div>
      <NavBar/>
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Profile Card */}
      <div className="w-full max-w-3xl bg-white border rounded-lg shadow-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-500 text-sm">{user?.email}</p>
            </div>
          </div>

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded transition">
            Edit Profile
          </button>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoItem label="Username" value={user?.displayName} />
          <InfoItem label="Phone" value={user?.phone} />
          <InfoItem label="Location" value={user?.location} />
          <InfoItem label="Member Since" value={user?.memberSince} />
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto border border-orange-400 text-orange-400 px-6 py-2 rounded hover:bg-orange-50 transition">
            Change Password
          </button>
          <button className="w-full sm:w-auto border px-6 py-2 rounded hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
    </div>

  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
