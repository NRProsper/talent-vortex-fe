export type CreateCategoryRequest = {
  name: string;
  description?: string;
  tags?: string[];
};

export type UpdateCategoryRequest = Partial<CreateCategoryRequest>;