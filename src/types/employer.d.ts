import { $Enums } from "@prisma/client";

type EmployerPayloadSchema = {
  fullName: string;
  phone: string;
  state: $Enums.State;
  job: string;
  id?: string;
};
type EmployerJoinDepartmentPayload = {
  id: string;
  departmentId: string;
};
