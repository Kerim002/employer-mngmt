import { useDeleteWorker } from "@/entities/workers/api/useDeleteWorker";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { $Enums } from "@prisma/client";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

type Props = {
  worker: {
    fullName: string;
    job: {
      name: string;
      id: string;
    } | null;
    department: {
      name: string;
      id: string;
    } | null;
    state: $Enums.State;
    id: string;
    createdAt: Date;
    avatar: string | null;
  };
  index: number;
};

export const WorkersRow = ({ worker, index }: Props) => {
  const { handleDeleteWorker } = useDeleteWorker();
  return (
    <TableRow key={worker.id}>
      <TableCell className="font-medium">{index}</TableCell>
      <TableCell>
        <PhotoProvider
          bannerVisible={false}
          maskOpacity={0.5}
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
          photoWrapClassName="min-w-96 min-h-96 flex justify-center items-center"
        >
          <PhotoView src={worker.avatar ?? ""}>
            <div className="relative w-14 h-14  ">
              {worker.avatar && (
                <Image fill src={worker.avatar} alt="" unoptimized />
              )}
            </div>
          </PhotoView>
        </PhotoProvider>
      </TableCell>
      <TableCell>{worker.fullName}</TableCell>
      <TableCell>{worker.job?.name}</TableCell>
      {/* <TableCell>{worker.department?.name}</TableCell> */}
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            worker.state === "active"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {worker.state}
        </span>
      </TableCell>
      <TableCell>{format(worker.createdAt, "dd.MM.yyyy")}</TableCell>
      <TableCell className="text-right space-x-2">
        {/* <QueryEditBtn
          queries={[
            { key: "isModal", value: "true" },
            { key: "id", value: worker.id },
          ]}
        /> */}
        <Button
          onClick={() => handleDeleteWorker(worker.id)}
          variant="destructive"
          size="icon"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
