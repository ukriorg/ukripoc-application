export interface Organisation {
    ID: string;
    Name: string;
}

// Applications
export type Applications = Array<Application>;
type ApplicationType = "Application";

export interface Application {
    __typename: ApplicationType;
    closeApplication: string;
    openApplication: string;
    updatedAt: string;
    applicationOpportunityId: string;
    createdAt: string;
    id: string;
    rank: number;
    questions: [FundingApplicationQuestion];
};

// OpportunityTypes
type OpportunityType = "Opportunity";

export interface OpportunityWithApplication {
    __typename: OpportunityType;
    createdAt: string;
    description: string;
    name: string;
    lowestRankedApplication: Application;
};

// FundingApplications
export type FundingApplications = Array<FundingApplication | null>;

export interface FundingApplication {
    id: string;
    ownerName: string | null;
    opportunityName: string!;
    opportunityDescription: string | null;
    opportunityFunders: (string | null) [] | null;
    openDate: string | null;
    closeDate: string | null;
}

export interface FundingApplicationQuestion {
    id: string;
    owner: string;
    heading: string;
    title: string;
    subtitle: string;
    notes: string;
    wordLimit: integer;
    fundingApplication: FundingApplication;
    answer: string;
    complete: boolean;
}