import { z } from 'zod';

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
  z.literal('invited'),
  z.literal('suspended')
]);
export type BlogStatus = z.infer<typeof userStatusSchema>;

const userRoleSchema = z.union([
  z.literal('superadmin'),
  z.literal('admin'),
  z.literal('cashier'),
  z.literal('manager')
]);

const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  photo_url: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
});
export type Blog = z.infer<typeof blogSchema>;

export const blogListSchema = z.array(blogSchema);