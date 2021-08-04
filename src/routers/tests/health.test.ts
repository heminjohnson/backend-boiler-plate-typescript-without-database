import app from "../../server";
import supertest from "supertest";

const request = supertest(app);

describe("routers", () => {
  describe("health", () => {
    test("it should test the endpoint GET /health", async (done) => {
      const response = await request
        .get("/health")

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: "Health OK" });

      done();
    });
  });
});
