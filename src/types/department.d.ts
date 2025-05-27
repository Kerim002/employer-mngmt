type DepartmentUpdatePayload = {
  id: string;
  managerId: string;
  name: string;
};
type DepartmentCreatePayload = Omit<DepartmentUpdatePayload, "id">;
