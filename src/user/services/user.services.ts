/**
 * @file user.services.ts
 * @description This file contains user service code
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { CustomResponse } from "../../common/utils/format-repsonse";
import { CustomMessage } from "../../common/config/messages";
import { StatusCode } from "../../common/config/status-codes";

require("dotenv").config({ path: process.env.PWD + "/.env" });

const SALT_ROUNDS: any = process.env.SALT_ROUNDS;
const JWT_SECRET: any = process.env.JWT_SECRET;
const EXPIRES_IN: any = process.env.EXPIRES_IN;

export class UserService {
  static addUserToDatabase = async (data: any): Promise<any> => {
    try {
      const { username, password, role, firstName, lastName } = data;
      let finalResponse = {};
      let user: any = "";
      bcrypt.hash(password, parseInt(SALT_ROUNDS), async (err, hash) => {
        if (err) {
          throw err;
        } else {
          user = new User({
            username,
            role,
            password: hash,
            firstName,
            lastName,
          });
          await user.save();
        }
      });
      const token = await jwt.sign(
        { username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: EXPIRES_IN }
      );
      finalResponse = {
        username,
        token,
        role,
      };
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.CREATED,
        CustomMessage.MESSAGES.SUCCESS_TO_CREATE_USER,
        [finalResponse]
      );
    } catch (error) {
      console.log(error);
      return CustomResponse.sendErrorResponse(
        CustomMessage.MESSAGES.FAILED_TO_CREATE_USER,
        error
      );
    }
  };

  static removeUserFromDatabase = async (data: any): Promise<any> => {
    try {
      let finalResponse: object = {};
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_DELETE_USER,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        CustomMessage.MESSAGES.FAILED_TO_DELETE_USER,
        error
      );
    }
  };

  static updateUserFromDatabase = async (data: any): Promise<any> => {
    try {
      let finalResponse: object = {};
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_UPDATE_USER,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        CustomMessage.MESSAGES.FAILED_TO_UPDATE_USER,
        error
      );
    }
  };

  static checkUserExists = async (data: any): Promise<any> => {
    try {
      let finalResponse: object = {};
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.LOGIN_SUCCESS,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        CustomMessage.MESSAGES.FAILED_LOGIN,
        error
      );
    }
  };
}
