import React, { useEffect, useState } from "react";
import checkDone from "../icons/checkDone.png";
import unDone from "../icons/full-moon_3120504.png";
import { useParams } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";
import { HiTrash, HiPencil } from "react-icons/hi";
import { Button } from "flowbite-react";

const Card = () => {
  const { id } = useParams();
  const [lists, setLists] = useState([]);

  const functionFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setLists(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    functionFetchData();
  }, []);

  // untuk mengatur complete
  const handleToggleCompletion = (listIndex) => {
    const updatedLists = [...sortedLists];
    updatedLists[listIndex].completed = true;
    setLists(updatedLists);
  };

  // untuk mengatur delete
  const handleTitleDelete = (listIndex) => {
    const updatedLists = [...sortedLists];
    updatedLists.splice(listIndex, 1);
    setLists(updatedLists);
  };

  // untuk mengatur edit title
  const handleTitleEdit = (listIndex, newTitle) => {
    const updatedLists = [...sortedLists];
    updatedLists[listIndex].title = newTitle;
    setLists(updatedLists);
  };

  const filteredLists = lists.filter((list) => list.userId === parseInt(id));

  // untuk mengatur complete dan uncomplete
  const sortedLists = filteredLists.slice().sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div className="flex justify-around ">
      <ProfileCard id={id} />
      <div className="w-2/4 text-center rounded-xl bg-gray-200  ">
        <p className="mb-8 mt-8">Here's your Todolist</p>
        <hr className="my-4 border-t-4 border-black" />
        {sortedLists.slice(0, 10).map((list, index) => (
          <div
            key={list.id}
            className="mb-4  flex w-96 items-center gap-4 mx-auto"
          >
            <img
              onClick={() => handleToggleCompletion(index)}
              src={list.completed ? checkDone : unDone}
              alt={list.completed ? "checkDone" : "check"}
              className="w-7 h-7"
            />
            <div
              className={`bg-gray-200 rounded-2xl w-full p-4 text-center ${
                list.completed ? "line-through" : ""
              }`}
            >
              <p className="text-xs">{list.title}</p>
            </div>
            <Button
              onClick={() =>
                handleTitleEdit(index, prompt("Edit the title:", list.title))
              }
            >
              <HiPencil size={16} />
            </Button>
            <Button onClick={() => handleTitleDelete(index)}>
              <HiTrash size={16} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
