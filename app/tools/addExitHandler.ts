const addExitHandler = (handleExit: () => void | Promise<void>) => {
  process.on("exit", handleExit);
  process.on("SIGINT", handleExit);
  process.on("SIGUSR1", handleExit);
  process.on("SIGUSR2", handleExit);
  process.on("uncaughtException", handleExit);
};

export default addExitHandler;
