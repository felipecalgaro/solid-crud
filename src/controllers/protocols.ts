export interface HTTPResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HTTPRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IController {
  handle(httpRequest: HTTPRequest<unknown>): Promise<HTTPResponse<unknown>>;
}
