export interface ILogin {
  email: string;
  password: string;
}

export interface IGetLogin {
  status: number;
  message: string;
  data: {
    userState: number;
    progressGeneration: number | null;
    registGeneration: number | null;
    totalGeneration: number;
  };
  token: string;
}
