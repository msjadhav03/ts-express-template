"use strict";
/**
 * @file test.controller.ts
 * @description This file contains controller level code test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyTest = exports.removeTest = exports.readTest = exports.addNewTest = exports.testControllerFunction = void 0;
const status_codes_1 = require("../../common/config/status-codes");
const messages_1 = require("../../common/config/messages");
const test_services_1 = require("../services/test.services");
const format_repsonse_1 = require("../../common/utils/format-repsonse");
/**
 * @function: testControllerFunction
 * @param: [req] Request object
 * @param: [res] Response object
 * @returns: response success or Error
 * @author: Manisha Jadhav
 */
const testControllerFunction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send({
            statusCode: 200,
            message: "Success true",
            data: [req.body],
        });
    }
    catch (error) {
        res.send({
            statusCode: 500,
            message: "Internal Server Error",
        });
    }
});
exports.testControllerFunction = testControllerFunction;
/**
 * @function: addNewTest
 * @description: Controller function to add test data
 * @param: [req] Request object
 * @param: [res] Response object
 * @returns: Success Response or Error Response
 * @author: Manisha Jadhav
 */
const addNewTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, test_services_1.addTest)(req.body);
        return (0, format_repsonse_1.sendResponse)(res, response.statusCode, response.message, response.data, response.error);
    }
    catch (error) {
        return (0, format_repsonse_1.sendResponse)(res, status_codes_1.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.MESSAGES.FAILED_TO_CREATE, [], error);
    }
});
exports.addNewTest = addNewTest;
/**
 * @function: readTest
 * @description: Controller function to read test
 * @param: [req] Request object
 * @param: [res] Response object
 * @returns: A success response or A error response
 * @author Manisha Jadhav
 */
const readTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, test_services_1.fetchTest)();
        return (0, format_repsonse_1.sendResponse)(res, response.statusCode, response.message, response.data, response.error);
    }
    catch (error) {
        return (0, format_repsonse_1.sendResponse)(res, status_codes_1.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.MESSAGES.FAILED_TO_FETCH, [], error);
    }
});
exports.readTest = readTest;
/**
 * @function: removeTest
 * @description: Controller function to remove test
 * @param: [req] Request object
 * @param: [res] Response object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
const removeTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, test_services_1.deleteTest)(req.body);
        return (0, format_repsonse_1.sendResponse)(res, response.statusCode, response.message, response.data, response.error);
    }
    catch (error) {
        return (0, format_repsonse_1.sendResponse)(res, status_codes_1.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.MESSAGES.FAILED_TO_DELETE, [], error);
    }
});
exports.removeTest = removeTest;
/**
 * @function: modifyTest
 * @description: Controller function to modify test data
 * @param: [req] Request object
 * @param: [res] Response Object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
const modifyTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, test_services_1.updateTest)(req.body, req.params.id);
        return (0, format_repsonse_1.sendResponse)(res, response.statusCode, response.message, response.data, response.error);
    }
    catch (error) {
        return (0, format_repsonse_1.sendResponse)(res, status_codes_1.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.MESSAGES.FAILED_TO_UPDATE, [], error);
    }
});
exports.modifyTest = modifyTest;
