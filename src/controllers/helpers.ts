import { HTTPResponse } from "./protocols";

export const ok = <T>(body: T): HTTPResponse<T> => {
  return {
    statusCode: 200,
    body,
  };
};

export const created = <T>(body: T): HTTPResponse<T> => {
  return {
    statusCode: 201,
    body,
  };
};

export const badRequest = (message: string): HTTPResponse<string> => {
  return {
    statusCode: 400,
    body: message,
  };
};

export const serverError = (): HTTPResponse<string> => {
  return {
    statusCode: 500,
    body: "Something went wrong.",
  };
};
