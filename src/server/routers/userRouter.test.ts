import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { app } from "../index.js";
import bcryptjs from "bcryptjs";
import { User } from "../../database/models/User";
import connectDatabase from "../../database/connectDatabase.js";

let mongodbServer: MongoMemoryServer;

beforeAll(async () => {
  mongodbServer = await MongoMemoryServer.create();
  const mongoServerUrl = mongodbServer.getUri();

  await connectDatabase(mongoServerUrl);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongodbServer.stop();
});

afterEach(async () => {
  await User.deleteMany();
  jest.clearAllMocks();
});

describe("Given a POST /user/register endpoint", () => {
  const register = "/users/register";

  describe("When it receives a request with a non-regisered username 'Alexander', password '123123123', email 'aguillenhernandez@gmail.com'", () => {
    test("Then it should response with status code 201 and username 'Alexander', password '4139048023804', email 'aguillenhernandez@gmail.com'", async () => {
      bcryptjs.hash = jest.fn().mockReturnValue("4139048023804");
      const password = "4139048023804";
      const username = "Alexander";

      const response = await request(app)
        .post(register)
        .set({
          "Content-Type": "multipart/form-data",
        })
        .field("username", "Alexander")
        .field("password", "4139048023804")
        .expect(201);

      expect(response.body).toHaveProperty(
        "user",
        expect.objectContaining({
          password,
          username,
        })
      );
    });
  });
});
