import { faker } from '@faker-js/faker';

// export const users = Array.from({ length: 20 }, () => {
//   const firstName = faker.person.firstName()
//   const lastName = faker.person.lastName()
//   return {
//     id: faker.string.uuid(),
//     firstName,
//     lastName,
//     username: faker.internet
//       .username({ firstName, lastName })
//       .toLocaleLowerCase(),
//     email: faker.internet.email({ firstName }).toLocaleLowerCase(),
//     phoneNumber: faker.phone.number({ style: 'international' }),
//     status: faker.helpers.arrayElement([
//       'active',
//       'inactive',
//       'invited',
//       'suspended',
//     ]),
//     role: faker.helpers.arrayElement([
//       'superadmin',
//       'admin',
//       'cashier',
//       'manager',
//     ]),
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.recent(),
//   }
// })

export const users = [
  {
    id: 'b1a8f6b0-3c76-4ec1-953d-401c8e2b6d10',
    firstName: 'Alice',
    lastName: 'Johnson',
    username: 'alice.johnson',
    email: 'alice.johnson@example.com',
    phoneNumber: '+1 202 555 0147',
    status: 'active',
    role: 'admin',
    createdAt: '2022-09-15T10:24:00.000Z',
    updatedAt: '2025-08-15T08:12:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: 'd4c81207-7e1d-4a8e-b288-17c9f912b113',
    firstName: 'Michael',
    lastName: 'Anderson',
    username: 'michael.anderson',
    email: 'michael.anderson@example.com',
    phoneNumber: '+44 7700 900321',
    status: 'inactive',
    role: 'cashier',
    createdAt: '2021-12-02T14:45:00.000Z',
    updatedAt: '2025-08-10T09:20:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: 'b25e0465-a659-456a-a5c8-db04395d38dd',
    firstName: 'Sophia',
    lastName: 'Martinez',
    username: 'sophia.martinez',
    email: 'sophia.martinez@example.com',
    phoneNumber: '+33 6 12 34 56 78',
    status: 'invited',
    role: 'manager',
    createdAt: '2020-07-11T08:17:00.000Z',
    updatedAt: '2025-08-14T12:32:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '6a7fc1a4-1db0-458a-9b7f-6504051cb09f',
    firstName: 'Ethan',
    lastName: 'Walker',
    username: 'ethan.walker',
    email: 'ethan.walker@example.com',
    phoneNumber: '+49 160 98765432',
    status: 'suspended',
    role: 'superadmin',
    createdAt: '2019-03-20T12:00:00.000Z',
    updatedAt: '2025-08-12T07:42:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '05b61483-4ff4-41b5-bc15-2737acefd095',
    firstName: 'Olivia',
    lastName: 'Brown',
    username: 'olivia.brown',
    email: 'olivia.brown@example.com',
    phoneNumber: '+1 303 555 0199',
    status: 'active',
    role: 'manager',
    createdAt: '2023-01-25T09:14:00.000Z',
    updatedAt: '2025-08-16T11:51:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '21c92af8-48f0-4a6f-8b8d-1ed5093cf876',
    firstName: 'James',
    lastName: 'Taylor',
    username: 'james.taylor',
    email: 'james.taylor@example.com',
    phoneNumber: '+61 412 345 678',
    status: 'inactive',
    role: 'cashier',
    createdAt: '2022-04-10T15:05:00.000Z',
    updatedAt: '2025-08-11T06:27:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '3f291d65-8e48-40c7-b4c8-9df29fa9798f',
    firstName: 'Isabella',
    lastName: 'Miller',
    username: 'isabella.miller',
    email: 'isabella.miller@example.com',
    phoneNumber: '+34 612 987 654',
    status: 'invited',
    role: 'admin',
    createdAt: '2021-02-19T11:11:00.000Z',
    updatedAt: '2025-08-10T10:41:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: 'e13bcccb-4ef3-4d32-9a3b-17c7d3a29c29',
    firstName: 'William',
    lastName: 'Davis',
    username: 'william.davis',
    email: 'william.davis@example.com',
    phoneNumber: '+1 408 555 0193',
    status: 'suspended',
    role: 'superadmin',
    createdAt: '2018-12-01T07:56:00.000Z',
    updatedAt: '2025-08-13T14:29:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '155d016d-93e1-45d6-b501-d6b96dbf7d87',
    firstName: 'Mia',
    lastName: 'Wilson',
    username: 'mia.wilson',
    email: 'mia.wilson@example.com',
    phoneNumber: '+81 90 1234 5678',
    status: 'active',
    role: 'manager',
    createdAt: '2020-10-05T13:42:00.000Z',
    updatedAt: '2025-08-15T09:47:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  },
  {
    id: '2c5e5b7c-ef09-4fb9-b51a-557bcf68c00f',
    firstName: 'Benjamin',
    lastName: 'Thomas',
    username: 'benjamin.thomas',
    email: 'benjamin.thomas@example.com',
    phoneNumber: '+1 646 555 0190',
    status: 'inactive',
    role: 'cashier',
    createdAt: '2021-09-14T17:39:00.000Z',
    updatedAt: '2025-08-16T10:15:00.000Z',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    label: 'documentation',
    priority: 'medium'
  }
];
