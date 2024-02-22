import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState("Login")
  function changeForm()
  {
    console.log(form)
    if (form === "Login")
      setForm("Sign Up");
    else
    setForm("Login")
  }

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-b from-black to-red-950 bg-blend-multiply p-8">
      <div className='flex flex-col justify-start items-center h-[600px] w-[500px] bg-black bg-opacity-30 border-red-800 border-[1px] rounded-xl p-14'>
        <div className='flex flex-wrap justify-center items-center space-y-2 space-x-2'>
          <button onClick={changeForm} className={`${form === "Login"?"bg-red-900":""} hover:text-red-500 rounded-2xl border-red-800 border-[1px] w-28 text-white p-5`}>Sign In</button>
          <button onClick={changeForm} className={`${form === "Login"?"":"bg-red-900"} hover:text-red-500 rounded-2xl border-red-800 border-[1px] w-28 text-white p-5`}>Sign Up</button>
        </div>
        <div id='form' className='mt-10 w-full'>
          <form action="">
            <input className='bg-black rounded-xl text-white w-full border mb-10 mt-10 border-gray-300 rounded' type="email" placeholder="Enter your email" />
            <input className='bg-black rounded-xl text-white w-full border mb-10 border-gray-300 rounded' type="password" placeholder="Enter your password" />
            <input className={`${form === "Login"?"hidden":""} bg-black rounded-xl text-white w-full border mb-10 border-gray-300 rounded`} type="password" placeholder="Confirm password" />
            <center>
            <button className='hover:bg-red-800 rounded-2xl border-red-800 border-[1px] w-full text-white p-3'>
              <a href="/">{form}</a>
            </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
