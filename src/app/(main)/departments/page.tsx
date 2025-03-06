import { DepartmentDialog } from "@/entities/department";
import { DepartmentsTable } from "@/entities/department/ui/departments-table";
import { Button } from "@/shared/ui/button";
import React from "react";

const Department = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-end">
        <DepartmentDialog>
          <Button>Create Department</Button>
        </DepartmentDialog>
      </div>
      <DepartmentsTable />
    </div>
  );
};

export default Department;
