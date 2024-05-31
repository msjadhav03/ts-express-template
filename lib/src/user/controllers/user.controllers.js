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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
const user_services_1 = require("../services/user.services");
const format_repsonse_1 = require("../../common/utils/format-repsonse");
class UserController {
}
exports.UserController = UserController;
_a = UserController;
/**
 * @function: addUser
 * @description: This controller function is responsible for handing user creation request
 * @param: [req] Request Object
 * @param: [res] Response Object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
UserController.addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_services_1.UserService.addUserToDatabase(req.body);
        return format_repsonse_1.CustomResponse.sendResponse(res, response.statusCode, response.message, response.data, response.error);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_CREATE_USER, [], error);
    }
});
/**
 * @function: updateUser
 * @description: This controller function is responsible for handing user updation request
 * @param: [req] Request Object
 * @param: [res] Response Object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.OK, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_UPDATE_USER, [
            {
                name: "Manisha",
                username: "msjadhav2323@gmail.com",
            },
        ]);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_UPDATE_USER, [], error);
    }
});
/**
 * @function: deleteUser
 * @description: This controller function is responsible for handing user deletion request
 * @param: [req] Request Object
 * @param: [res] Response Object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.OK, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_DELETE_USER, [
            {
                name: "Manisha",
                username: "msjadhav2323@gmail.com",
            },
        ], undefined);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_DELETE_USER, [], error);
    }
});
/**
 * @function: loginUser
 * @description: This controller function is responsible for handing user authentication request
 * @param: [req] Request Object
 * @param: [res] Response Object
 * @returns: A success response or A error response
 * @author: Manisha Jadhav
 */
UserController.loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.CREATED, messages_1.CustomMessage.MESSAGES.LOGIN_SUCCESS, [
            {
                name: "Manisha",
                username: "msjadhav2323@gmail.com",
            },
        ], undefined);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_LOGIN, [], error);
    }
});
