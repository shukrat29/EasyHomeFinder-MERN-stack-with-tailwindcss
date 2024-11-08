import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-lg font-semibold text-center my-7">My Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
        />
        <input
          type="text"
          placeholder="enter username"
          id="username"
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="enter email"
          id="email"
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="enter password"
          id="password"
          className="border p-2 rounded-lg"
        />
        <button className="bg-slate-700 text-white uppercase rounded-lg p-3">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Log Out</span>
      </div>
    </div>
  );
};

export default Profile;
