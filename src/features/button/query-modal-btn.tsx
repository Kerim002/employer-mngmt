"use client";
import { useQueryParam } from "@/shared/hook";
import { Button } from "@/shared/ui/button";
import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

const ButtonComponent = ({ children }: Props) => {
  const { setQuery } = useQueryParam();
  const handleSetQuery = () => {
    setQuery([{ key: "isModal", value: "true" }]);
  };
  return <Button onClick={handleSetQuery}>{children}</Button>;
};

export const QueryModalBtn = ({ children }: Props) => {
  return (
    <Suspense>
      <ButtonComponent>{children}</ButtonComponent>
    </Suspense>
  );
};
