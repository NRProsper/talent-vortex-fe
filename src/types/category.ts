export type Category = {
  _id: string;
  name: string;
  description?: string;
  slug: string;
  tags?: string[];
  updatedAt: string;
};

export type CreateCategoryRequest = {
  name: string;
  description?: string;
  tags?: string[];
};

export type UpdateCategoryRequest = Partial<CreateCategoryRequest>

