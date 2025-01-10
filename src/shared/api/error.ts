export const errorCatch = (error: any): string => {
  const message = error.response.data;
  return message
    ? typeof error.response.data === "object"
      ? message[0]
      : message
    : error.data;
};
