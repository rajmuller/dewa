export const isServer = () => {
  console.log("onServer: ", typeof window === "undefined");

  return typeof window === "undefined";
};
