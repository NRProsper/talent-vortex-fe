export interface Challenge {
  id: string;
  title: string;
  skills: string[];
  level: "Junior" | "Intermediate" | "Senior";
  challengeLink: string;
  startDate: string;
  endDate: string;
  image?: string;
  companyName: string;
}

