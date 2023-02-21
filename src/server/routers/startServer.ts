import { app } from "../index.js";
import { type CustomError } from "../../CustomError/CustomError.js";

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server is listening requests from ${port} port.`);
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      let errorMessage = "Error on starting server";

      if (error.code === "EADDRINUSE") {
        errorMessage += `Port ${port} is already in use`;
      }

      reject(new Error(errorMessage));
    });
  });
