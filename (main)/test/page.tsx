"use client";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const data = [
  {
    id: 1,
    image: "/placeholder.svg",
    date: "2023-05-15",
    category: "Technology",
    username: "techguru",
    tags: ["AI", "Machine Learning"],
    description: "An article about recent advancements in AI",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    date: "2023-05-16",
    category: "Travel",
    username: "wanderlust",
    tags: ["Europe", "Budget Travel"],
    description: "Tips for budget-friendly European vacations",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    date: "2023-05-17",
    category: "Food",
    username: "foodielove",
    tags: ["Recipes", "Vegan"],
    description: "Delicious vegan recipes for beginners",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    date: "2023-05-18",
    category: "Technology",
    username: "codemaster",
    tags: ["JavaScript", "React"],
    description: "Advanced React hooks and their use cases",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 7,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 8,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 9,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 10,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 11,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
  {
    id: 12,
    image: "/placeholder.svg",
    date: "2023-05-19",
    category: "Health",
    username: "fitnessguru",
    tags: ["Workout", "Nutrition"],
    description: "Balancing diet and exercise for optimal health",
  },
];

const Test = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    setSelectedRows((prev) =>
      prev.length === data.length ? [] : data.map((item) => item.id)
    );
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className=" p-4">
      <Table>
        <TableCaption>A list of your recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedRows.length === data.length}
                onCheckedChange={handleSelectAllRows}
              />
            </TableHead>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(item.id)}
                  onCheckedChange={() => handleSelectRow(item.id)}
                />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Image
                  src="/test/user.png"
                  alt="Placeholder"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.tags.join(", ")}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {item.description}
              </TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40" align="end">
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-red-600 hover:text-red-600 hover:bg-red-100"
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {selectedRows.length} of {data.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2 py-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Test;
