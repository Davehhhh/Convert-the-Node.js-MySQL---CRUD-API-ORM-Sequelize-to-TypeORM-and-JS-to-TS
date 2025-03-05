import { AppDataSource } from "../config/ormconfig";
import { User } from "../entities/User";
import { Repository } from "typeorm";

const userRepository: Repository<User> = AppDataSource.getRepository(User);

export class UserService {
    async getAll(): Promise<User[]> {
        return await userRepository.find();
    }

    async getById(id: number): Promise<User | null> {
        return await userRepository.findOneBy({ id });
    }

    async create(userData: Partial<User>): Promise<User> {
        const user = userRepository.create(userData);
        return await userRepository.save(user);
    }

    async update(id: number, userData: Partial<User>): Promise<User | null> {
        const user = await userRepository.findOneBy({ id });
        if (!user) return null;
        Object.assign(user, userData);
        return await userRepository.save(user);
    }

    async delete(id: number): Promise<boolean> {
        const result = await userRepository.delete(id);
        return result.affected !== 0;
    }
}
