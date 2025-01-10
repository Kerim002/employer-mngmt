import React from "react";
import MediaCard from "./MediaCard";

const data = [
  {
    id: 1,
    image: "/test/user.png",
    date: "2023-05-15",
    category: "Technology",
    username: "techguru",
    tags: ["AI", "Machine Learning"],
    description: "An article about recent advancements in AI",
  },
  {
    id: 2,
    image: "/test/user.png",
    date: "2023-05-16",
    category: "Travel",
    username: "wanderlust",
    tags: ["Europe", "Budget Travel"],
    description: "Tips for budget-friendly European vacations",
  },
  {
    id: 3,
    image: "/test/user.png",
    date: "2023-05-17",
    category: "Food",
    username: "foodielove",
    tags: ["Recipes", "Vegan"],
    description: "Delicious vegan recipes for beginners",
  },
  {
    id: 4,
    image: "/test/user.png",
    date: "2023-05-18",
    category: "Technology",
    username: "codemaster",
    tags: ["JavaScript", "React"],
    description: "Advanced React hooks and their use cases",
  },
  {
    id: 5,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 7,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 8,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 9,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 10,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 11,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 12,
    image: "/test/user.png",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
];
const MediasCardView = () => {
  return (
    <div className="grid 2xl:grid-cols-5 gap-4 w-full overflow-auto h-full">
      {data.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MediasCardView;
