export interface IGetDataParams {
  endPoint: string;
  getParams?: any;
}

export interface IDataResponse {
  data: any;
}

export interface ILoginData {
  username: string;
  telegram_id: number;
}

export interface ISignUpData {
  username: string;
  first_name: string;
  last_name: string;
  telegram_id: number;
  language_code: string;
}

export interface IReferralData {
  telegram_id: number;
  referral_id: number;
}
