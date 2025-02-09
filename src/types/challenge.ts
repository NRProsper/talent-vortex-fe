// file located at src/types/challenge.ts

import { Category, SortOrder } from ".";

export type CreateChallengeRequest = {
  title: string;
  description: string;
  email: string;
  tasks: string;
  prizes: Prize[];
  skillsNeeded: string[];
  juniorityLevel: string;
  startDate: Date;
  endDate: Date;
  category: string;
  applicationForm: string;
  submissionForm: string;
};

export type UpdateChallengeRequest = Partial<CreateChallengeRequest>;

export enum ChallengeSortField {
  TITLE = 'title',
  CREATED_AT = 'createdAt',
  START_DATE = 'startDate',
  END_DATE = 'status',
}

export type QueryChallengeRequest = {
  page?: number;
  limit?: number;
  search?: string;
  status?: ChallengeStatus;
  sortField?: ChallengeSortField;
  sortOrder?: SortOrder;
};


export enum ChallengeStatus {
  OPEN = "open",
  ONGOING = "ongoing",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export type Prize = {
  place: string;
  minValue: number;
  maxValue: number;
};

export interface Challenge {
  _id: string;
  slug: string;
  title: string;
  description: string;
  email: string;
  tasks: string;
  prizes: Prize[];
  skillsNeeded: string[];
  juniorityLevel: string;
  startDate: string;
  endDate: string;
  status: ChallengeStatus;
  category: Category;
  applicationForm: string;
  submissionForm: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChallengeResponse {
  message: string;
  challenges: Challenge[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}