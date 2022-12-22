export interface HTTPResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HTTPRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}
