import { CustomConstant } from "../../../src/common/config/constants";
import testRouter from "../../../src/template/routes/template.routes";

jest.mock("express", () => {
  const originalExpress = jest.requireActual("express");
  const mockRouter = () => ({
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  });

  return {
    ...originalExpress,
    Router: jest.fn(mockRouter),
  };
});

jest.mock("../../../src/template/controllers/template.controllers", () => ({
  TemplateController: {
    addNewTest: jest.fn(),
    readTest: jest.fn(),
    deleteTest: jest.fn(),
    modifyTest: jest.fn(),
  },
}));

describe("testRouter", () => {
  test("should call TemplateController.readTest when GET /template route is hit", async () => {
    const mockRequestHandler = jest.fn();
    await testRouter.get(
      `${CustomConstant.TEMPLATE_BASE_URL}`,
      mockRequestHandler
    );
  });
});
