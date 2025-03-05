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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ormconfig_1 = require("../config/ormconfig");
const User_1 = require("../entities/User");
const userRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
class UserService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository.findOneBy({ id });
        });
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = userRepository.create(userData);
            return yield userRepository.save(user);
        });
    }
    update(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository.findOneBy({ id });
            if (!user)
                return null;
            Object.assign(user, userData);
            return yield userRepository.save(user);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository.delete(id);
            return result.affected !== 0;
        });
    }
}
exports.UserService = UserService;
