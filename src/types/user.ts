export enum UserRole {
  TALENT = 'talent',
  ADMIN = 'admin',
  SUB_ADMIN = 'sub-admin',
  REVIEWER = 'reviewer',
  EDITOR = 'editor',
  FACILITATOR = 'facilitator',
}

export type CreateUserRequest = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  password: string;
};

export type UpdateUserRequest = Partial<CreateUserRequest>;

export enum UserSortField {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  CREATED_AT = 'createdAt',
  ROLE = 'role',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export type QueryUserRequest = {
  page?: number;
  limit?: number;
  search?: string;
  role?: UserRole;
  sortField?: UserSortField;
  sortOrder?: SortOrder;
};