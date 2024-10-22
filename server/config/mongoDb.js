import mongoose from "mongoose";

export async function ConnectionsForMongoDb(url) {
    return mongoose.connect(url)
}
