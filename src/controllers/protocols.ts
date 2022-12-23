export interface HTTPResponse<T> {
  statusCode: HTTPStatusCode;
  body: T;
}

export interface HTTPRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

export interface IController {
  handle(httpRequest: HTTPRequest<unknown>): Promise<HTTPResponse<unknown>>;
}
