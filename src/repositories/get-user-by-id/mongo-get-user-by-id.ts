import { ObjectId } from "mongodb";
import { IGetUserByIdRepository } from "../../controllers/get-user-by-id/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";
import { MongoUser } from "../mongo-protocols";

export class MongoGetUserByIdRepository implements IGetUserByIdRepository {
  async getUserById(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User not found.");
    }

    return MongoClient.map(user);
  }
}
