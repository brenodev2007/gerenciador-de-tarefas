export const freeAccess = (originalUrl: string) => {
  console.log("URL", originalUrl);
  const free = ["/users/create"];

  return free.includes(originalUrl);
};
