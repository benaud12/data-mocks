export {
  extractScenarioFromLocation,
  injectMocks,
  reduceAllMocksForScenario,
} from './mocks';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type MockConfig = {
  allowXHRPassthrough?: boolean;
  allowFetchPassthrough?: boolean;
  disableConsoleWarningsForFetch?: boolean;
};

export type HttpMock = {
  url: RegExp;
  method: HttpMethod;
  response: object | string;
  responseCode?: number;
  responseHeaders?: Record<string, string>;
  delay?: number;
};

export type GraphQLMock = {
  url: RegExp;
  method: 'GRAPHQL';
  operations: Array<Operation>;
};

export type Operation = {
  type: 'query' | 'mutation';
  operationName: string;
  response: object;
  responseCode?: number;
  responseHeaders?: Record<string, string>;
  delay?: number;
};

export type Mock = HttpMock | GraphQLMock;

export type Scenarios = {
  default: Mock[];
  [scenario: string]: Mock[];
};
