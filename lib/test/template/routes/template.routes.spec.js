"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const template_routes_1 = __importDefault(require("../../../src/template/routes/template.routes"));
const constants_1 = require("../../../src/common/config/constants");
const status_codes_1 = require("../../../src/common/config/status-codes");
jest.mock("../../../src/template/controllers/template.controllers", () => ({
    testControllerFunction: (req, res) => res.send({
        statusCode: 200,
        message: "Sucess true",
        data: [{}],
    }),
    addNewTest: (req, res) => res.status(status_codes_1.StatusCode.STATUS_CODE.CREATED).send({}),
    readTest: (req, res) => res.status(status_codes_1.StatusCode.STATUS_CODE.OK).send({}),
    removeTest: (req, res) => res.status(status_codes_1.StatusCode.STATUS_CODE.OK).send({}),
    modifyTest: (req, res) => res.status(status_codes_1.StatusCode.STATUS_CODE.OK).send({}),
}));
const app = (0, express_1.default)();
app.use("/", template_routes_1.default);
describe("testRouter", () => {
    it("should call testRouter controller function when  post /template route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).post(`${constants_1.CustomConstant.TEMPLATE_BASE_URL}`);
        expect(res.status).toEqual(status_codes_1.StatusCode.STATUS_CODE.CREATED);
    }));
    it("should call testRouter controller function when  get /template route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).get(`${constants_1.CustomConstant.TEMPLATE_BASE_URL}`);
        expect(res.status).toEqual(status_codes_1.StatusCode.STATUS_CODE.OK);
    }));
    it("should call testRouter controller function when  patch /template/:id route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).patch(`${constants_1.CustomConstant.TEMPLATE_BASE_URL}/:id`);
        expect(res.status).toEqual(status_codes_1.StatusCode.STATUS_CODE.OK);
    }));
    it("should call testRouter controller function when  delete /template/:id route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).delete(`${constants_1.CustomConstant.TEMPLATE_BASE_URL}/:id`);
        expect(res.status).toEqual(status_codes_1.StatusCode.STATUS_CODE.OK);
    }));
});
