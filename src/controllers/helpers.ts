import { HTTPResponse, HTTPStatusCode } from "./protocols";

export const ok = <T>(body: T): HTTPResponse<T> => {
  return {
    statusCode: HTTPStatusCode.OK,
    body,
  };
};

export const created = <T>(body: T): HTTPResponse<T> => {
  return {
    statusCode: HTTPStatusCode.CREATED,
    body,
  };
};

export const badRequest = (message: string): HTTPResponse<string> => {
  return {
    statusCode: HTTPStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = (): HTTPResponse<string> => {
  return {
    statusCode: HTTPStatusCode.SERVER_ERROR,
    body: "Something went wrong.",
  };
};
