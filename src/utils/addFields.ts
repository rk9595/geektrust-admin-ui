import { User } from '@/pages';

export interface UserWithAdditionalFields extends User {
  show: boolean;
  selected: boolean;
}

export const addFields = (users: User[]): UserWithAdditionalFields[] => {
  return users.map((user) => ({
    ...user,
    show: true,
    selected: false,
  }));
};
