export interface IAccountUser {
  entityType: string;
  id: string;
}

export interface ITask {
  entityType: string;
  id: string;
}

export interface IModel {
  entityType: string
  id: string
}

export interface IGetActivityDetails {
  id: string;
  replacedWithId: any;
  entityType: string;
  creationDate: number;
  lastModifiedDate: number;
  lastModifiedUser: string;
  lastModifiedComment: any;
  isDeleted: boolean;
  customValues: any;
  accountUser: IAccountUser;
  title: string;
  description: string;
  tasks: ITask[];
  threadState: string;
  originalInput: string;
  guidance: string[];
  learnings: string[];
  subAgents: any;
  parentAgent: any;
  folder: any;
  associatedContent: any;
  chatHistory: any;
  objective: string;
  masterContext: any;
  userNotifications: string[];
  vectorStore: any;
  vectorStoreNeedsRefresh: boolean;
}

export interface IAgent {
  entityType: string;
  id: string;
}

export interface IParameters {
  url?: string;
  extractContentFocusedOn?: string;
  objective?: string;
  knownTasks?: string[];
  knownConstraints?: string[];
  questions?: string[];
  title?: string;
  tableOfContents?: string[];
  sourcesToCite?: string[];
  intervieweeNamesAndTitles?: string[];
  nameOrContent?: string;
  topic?: string;
  dataToFind?: string;
  sourceIfKnown: any;
  searchName?: string;
  internalOrExternal?: string;
  whatToCreate?: string;
  questionsToInclude?: string[];
}

export interface ITableOfContent {
  title: string;
  descriptionOfContent: string;
}
export interface IArtifacts {
  title: string;
  summary: string;
  tableOfContents: ITableOfContent[];
  tables: string;
  dataPoints: string;
  Introduction: string;
  "Regulatory Framework": string;
  "Compliance Policies and Procedures"?: string;
  "Code of Ethics"?: string;
  "Risk Management": string;
  "Investment Strategies"?: string;
  "Conflicts of Interest": string;
  "Insider Trading"?: string;
  "Record Keeping and Reporting"?: string;
  "Training and Education"?: string;
  "Third-Party Service Providers"?: string;
  "Testing and Monitoring"?: string;
  Enforcement?: string;
  Conclusion?: string;
  "Code of Ethics and Conduct"?: string;
  "Compliance Monitoring and Testing"?: string;
  "Recordkeeping and Reporting"?: string;
  "Enforcement and Disciplinary Actions"?: string;
  "Compliance Manual Maintenance"?: string;
  "Appendix A: Glossary of Terms"?: string;
  "Appendix B: Forms and Templates"?: string;
}

export interface IDependsOn {
  entityType: string;
  id: string;
}

export interface IactivityDetails {
  id: string;
  replacedWithId: any;
  entityType: string;
  creationDate: number;
  lastModifiedDate: number;
  lastModifiedUser: string;
  lastModifiedComment: any;
  isDeleted: boolean;
  customValues: any;
  accountUser: IAccountUser;
  actionItem: string;
  output?: string;
  learnings: any;
  agent: IAgent;
  status?: string;
  scheduledStart: any;
  command?: string;
  parameters?: IParameters;
  processorClass?: string;
  startTime: any;
  artifacts?: IArtifacts;
  endTime: any;
  context?: string;
  dependsOn?: IDependsOn[];
}

export interface IActivityDetailsData {
  detailsall: IactivityDetails[];
}
