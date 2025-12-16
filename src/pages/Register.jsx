import { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const [missMatchPass, setMissMatchPass] = useState(false);
  const [noSpecialChar, setNoSpecialChar] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const emailRegex = '@gmail.com';
  const {createUser} = useContext(AuthContext);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setMissMatchPass(true)
      return;
    }
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
      setNoSpecialChar(true);
      return;
    }
    if(!email.endsWith(emailRegex)){
      setInvalidEmail(true);
      return
  }
  console.log(firstName, lastName, email, password, confirm);
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
                className="input input-bordered w-full"
              />
            </div>

            {/* Username or Email */}
            <div>
              <label className="label">
                <span className="label-text">Username or Email</span>
                {
              invalidEmail ? <p className="text-red-500 text-sm text-center">Invalid Email</p> : <p></p>
            }
              </label>
              <input
                type="text"
                name="email"
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
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label">
                <span className="label-text">Confirm Password</span>{
              missMatchPass && <p className="text-red-500 text-sm text-center">did not matched</p>
            }
                {
              !missMatchPass && noSpecialChar && <p className="text-red-500 text-sm text-center">must contain a special character</p>
            }
                        
              </label>
              <input
                type="password"
                name="confirm"
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
              <button type="submit" to={"/auth/login"} className="link">
                Login
              </button>
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
      <div className="space-y-3 flex justify-center items-center flex-col">
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
