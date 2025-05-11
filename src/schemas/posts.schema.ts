import { z } from "zod";

const PhotoSchema = z.object({
  id: z.number().optional(),
  url: z.string().url(),
  caption: z.string().optional(),
  displayOrder: z.number().optional(),
});

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  photos: z
    .array(
      z.object({
        url: z.string().url(),
      })
    )
    .default([]),
});

export const postSchema = z.object({
  id: z.number(),
  title: z.string().default(""),
  content: z.string(),
  createdAt: z.string().datetime(),
  creator: UserSchema,
  photos: z.array(PhotoSchema).default([]),
});

export const postsSchema = z.array(postSchema);

export type Post = z.infer<typeof postSchema>;
