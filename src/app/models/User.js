import { Schema } from "mongoose"

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String,
        required: true,
        validate: pass => {
            if(!pass?.length || pass?.length < 5) {
                new Error('password must be at least 5 characters')
            }
        }
    }
}, {timestamps: true})

export const User = models?.User || model('User', userSchema)