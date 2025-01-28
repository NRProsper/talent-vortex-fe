import { SortOrder } from ".";

export enum ChallengeStatus {
  OPEN = 'open',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export type Prize = {
  place: string;
  minValue: number;
  maxValue: number;
};

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