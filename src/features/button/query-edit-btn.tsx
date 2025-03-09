import { useQueryParam } from "@/shared/hook";
import { Button } from "@/shared/ui/button";
import { EditIcon } from "lucide-react";
import { Suspense } from "react";

type Props = {
  queries: {
    key: string;
    value: any;
  }[];
};

const EditButton = ({ queries }: Props) => {
  const { setQuery } = useQueryParam();

  return (
    <Button size="sm" onClick={() => setQuery(queries)}>
      <EditIcon />
    </Button>
  );
};

const QueryEditBtn = ({ queries }: Props) => {
  return (
    <Suspense>
      <EditButton queries={queries} />
    </Suspense>
  );
};

export default QueryEditBtn;
