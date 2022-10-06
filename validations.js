import { body } from 'express-validator';

export const loginValidation = [
  body("email", "Uncorrect format email").isEmail(),
  body("password", "The password could minimal 5 symbols").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", 'Uncorrect format email').isEmail(),
  body("password", 'The password could minimal 5 symbols').isLength({ min: 5 }),
  body("fullName", 'Entry name').isLength({ min: 3 }),
  body("avatarUrl", 'Uncorrect link for avatar').optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Entry title of the article").isLength({ min: 3 }).isString(),
  body("text", "Entry text of the article").isLength({ min: 10 }).isString(),
  body("tags", "Incorrect formal of tags (specify an array)")
    .optional()
    .isString(),
  body("imageUrl", "Incorrect link of the image").optional().isString(),
];