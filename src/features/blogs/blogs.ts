import { faker } from '@faker-js/faker';
import { Blog } from './blog-schema';

export const blogs: Blog[] = Array.from({ length: 20 }, () => {
  const title = faker.commerce.productDescription();
  const author = faker.book.author();
  return {
    id: faker.string.uuid(),
    title,
    author,
    status: faker.helpers.arrayElement([
      'active',
      'inactive',
      'invited',
      'suspended'
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    photo_url: faker.image.avatar(),
  };
});
