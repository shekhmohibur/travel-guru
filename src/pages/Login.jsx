import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const { signIn, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const identifier = form.identifier.value;
    const password = form.password.value;
  
    signIn(identifier, password)
      .then((result) => {
        const user = result.user;
        setUser(user);       
      })
      .catch((error) => {
        console.log("Error during sign-in:", error);
      });}

  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 border rounded-lg shadow-sm">
        <div className="card-body p-8">
          <h2 className="text-2xl font-semibold">Login</h2>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            {/* Username or Email */}
            <div>
              <label className="label">
                <span className="label-text">Username or Email</span>
              </label>
              <input
                type="text"
                name="identifier"
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

            {/* Remember + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="remember" className="checkbox" />
                <span className="text-sm">Remember Me</span>
              </label>

              <button type="button" className="text-sm link link-hover">
                Forgot Password
              </button>
            </div>

            {/* Login button */}
            <button type="submit" className="btn btn-warning w-full">
              Login
            </button>

            {/* Switch to Register */}
            <p className="text-center text-sm mt-2">
              Don’t have an account?{" "}
              <Link to={"/auth/register"} className="link">
                Create an account
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
      <div className="space-y-3  flex justify-center items-center flex-col">
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
