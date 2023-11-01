"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

export function ProfileCard({ id }) {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState({});

  const functionFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    functionFetchData();
  }, []);

  useEffect(() => {
    if (id) {
      const foundUser = user.find((list) => list.id === parseInt(id));
      setFilteredUser(foundUser || {});
    }
  }, [id, user]);

  return (
    <Card className="max-w-xs mt-8 po max-h-36 bg-gray-200">
      <h1>Welcome, User ID : {filteredUser.id}</h1>
      <div className="flex flex-col pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {filteredUser.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {filteredUser.email}
        </span>
      </div>
    </Card>
  );
}
