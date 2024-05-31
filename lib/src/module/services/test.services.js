"use strict";
/**
 * @description This file contains a service file for test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 *
 * @requires fs
 * @requires path
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
exports.fetchTest = exports.deleteTest = exports.updateTest = exports.addTest = void 0;
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const format_repsonse_1 = require("../../common/utils/format-repsonse");
/**
 * @function: addTest
 * @description: Service function to add test
 * @param: [data] data to be processed
 * @returns: New added data
 * @author: Manisha Jadhav
 */
const addTest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform databse operation
        return (0, format_repsonse_1.sendSuccessResponse)(status_codes_1.STATUS_CODE.CREATED, messages_1.MESSAGES.SUCCESS_TO_CREATE, [{ testTitle: "test Title", testQualityIndex: 80 }]);
    }
    catch (error) {
        return (0, format_repsonse_1.sendErrorResponse)(messages_1.MESSAGES.FAILED_TO_CREATE, error);
    }
});
exports.addTest = addTest;
/**
 * @function: updateTest
 * @description: Service function to update incoming test data
 * @param: [data] data to be processed
 * @param: id
 * @returns: Updated Data
 * @author: Manisha Jadhav
 */
const updateTest = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform databse operation
        return (0, format_repsonse_1.sendSuccessResponse)(status_codes_1.STATUS_CODE.OK, messages_1.MESSAGES.SUCCESS_TO_UPDATE, [
            { testTitle: "test Title", testQualityIndex: 80 },
        ]);
    }
    catch (error) {
        return (0, format_repsonse_1.sendErrorResponse)(messages_1.MESSAGES.FAILED_TO_UPDATE, error);
    }
});
exports.updateTest = updateTest;
/**
 * @function: deleteTest
 * @description: Service function to delete test data
 * @param: [data] data to be processed
 * @returns: deleted data
 * @author: Manisha Jadhav
 */
const deleteTest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform databse operation
        return (0, format_repsonse_1.sendSuccessResponse)(status_codes_1.STATUS_CODE.OK, messages_1.MESSAGES.SUCCESS_TO_DELETE, [
            { testTitle: "test Title", testQualityIndex: 80 },
        ]);
    }
    catch (error) {
        return (0, format_repsonse_1.sendErrorResponse)(messages_1.MESSAGES.FAILED_TO_DELETE, error);
    }
});
exports.deleteTest = deleteTest;
/**
 * @function: fetchTest
 * @description: Service function to fetch all test data
 * @returns: All fetched data
 * @author: Manisha Jadhav
 */
const fetchTest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform databse operation
        return (0, format_repsonse_1.sendSuccessResponse)(status_codes_1.STATUS_CODE.OK, messages_1.MESSAGES.SUCCESS_TO_FETCH, [
            { testTitle: "test Title", testQualityIndex: 80 },
        ]);
    }
    catch (error) {
        return (0, format_repsonse_1.sendErrorResponse)(messages_1.MESSAGES.FAILED_TO_FETCH, error);
    }
});
exports.fetchTest = fetchTest;
