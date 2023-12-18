import logo from "../images/paper 1.png";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/store.ts";
import { addUser } from "../features/auth/AuthSlice.ts";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    dispatch(addUser({ email, password }));
    navigate("/users");


    // const url = "https://reqres.in/api/register";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({email, password}),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
  };
  return (
    <div className="w-full flex justify-center items-center">
      {/* Signup prompt */}
      <div className="w-[444px] h-[576px] border rounded-[16px] shadow px-[62px] pt-[44px]">
        {/* Heading */}
        <div className="w-[159.06px] h-[45.82px] flex gap-[10.42px]">
          {/* logo */}
          <div className="w-[50.58px] h-[44px]">
            <img src={logo} alt="" className="object-cover" />
          </div>

          {/* name */}
          <h1 className="text-[28px] font-bold text-[#4E5D78]">Stack</h1>
        </div>

        {/* SignUp details */}
        <h1 className="text-[20px] font-semibold text-[#404040] mt-[20.18px] mb-[52px]">
          Sign up to join with Stack
        </h1>

        {/* Form Fillup */}

        <form onSubmit={handleRegistration}>
          {/* Email field */}
          <label htmlFor="" className="text-[14px] font-medium text-[#344054]">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-[320px] h-[44px] border rounded-[8px] drop-shadow-xl mt-[6px] mb-[46px] px-[14px] py-[10px] outline-none"
            placeholder="Enter Email"
          />

          {/* Password field */}
          <label htmlFor="" className="text-[14px] font-medium text-[#344054]">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-[320px] h-[44px] border rounded-[8px] drop-shadow-xl mt-[6px] mb-[40px] px-[14px] py-[10px] outline-none"
            placeholder="Enter Password"
          />

          <input
            type="submit"
            value="Sign Up"
            className="w-[320px] h-[44px] border rounded-[8px] py-[10px] bg-[#6941C6] text-[16px] font-semibold text-white"
          />
        </form>

        <h1 className="text-[16px] font-medium text-[#B0B7C3] mt-[27px]">
          Already have an account?{" "}
          <Link to="/SignIn" className="text-[#377DFF]">
            Sign In
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
