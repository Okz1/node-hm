import Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

export const userSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required()
});

export const userValidator = createValidator();
