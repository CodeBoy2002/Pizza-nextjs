import { Schema } from "mongoose"
import { models, model } from "mongoose"
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
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

userSchema.post('validate', (user) => {
    const notHashedPassword = user.password
    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(notHashedPassword, salt)
})

export const User = models?.User || model('User', userSchema)