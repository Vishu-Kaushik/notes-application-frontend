import React from "react";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const user = {
        userEmail,
        userPassword,
      };

      const result = await axios.post("http://localhost:4000/auth/login", user);
      console.log("User Logged in successfully", result);
    } catch (error) {
      console.log("Cannot Login", error);
    }
  };

  return (
    <div className="flex h-heightWithoutNavbar w-full items-center justify-center p-5">
      {/* Login Card */}
      <form
        className="flex w-full max-w-[500px] flex-col gap-4 rounded-xl bg-slate-300 p-5 shadow-2xl"
        onSubmit={loginUser}
      >
        <h1 className="p-2 text-xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-center px-2">
            <label className="font-medium" htmlFor="userEmail">
              Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your Email"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-400"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start justify-center px-2">
            <label className="font-medium" htmlFor="userPassword">
              Password
            </label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-400"
              placeholder="Enter Your Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          className="m-2 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        <div className="flex items-center justify-between p-2 text-lg">
          <p>New to Find Notes?</p>
          <p className="font-bold">Create an Account</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
