import React, { useState } from "react";
import DefaultNavbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const navigate = useNavigate();
  const [searchUser, setSearchUser] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`${searchUser}`);

    setSearchUser("");
  };

  return (
    <div className="bg-gray-300">
      <DefaultNavbar />
      <div className=" block ml-2">
        <Label htmlFor="email4" value="Your User" />
      </div>
      <form className="p-4" onSubmit={handleSearch}>
        <div className="max-w-md flex items-center">
          <TextInput
            icon={HiArrowNarrowRight}
            placeholder="Example 1-10"
            required
            onChange={(e) => setSearchUser(e.target.value)}
            value={searchUser}
          />
          <Button type="submit" className="ml-2">
            Find
          </Button>
        </div>
      </form>
      <div className=" mt-8 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
