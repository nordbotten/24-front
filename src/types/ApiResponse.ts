type TAPIResponse<T = any> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      message: string;
    };
