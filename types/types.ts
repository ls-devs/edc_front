export type Inputs = {
  ID: bigint;
  user_login: string;
  user_pass: string;
  user_nicename: string;
  user_email: string;
  user_url: string;
  user_registered: Date;
  user_activation_key: string;
  user_status: number;
  display_name: string;
  pro: boolean;
  partenaire: boolean;
  firstConnAfterRework: boolean;
};

export type PostUser = {
  User?: User;
  Message?: string;
};

export type User = {
  ID: string;
  display_name: string;
  firstConnAfterRework: boolean;
  partenaire: boolean;
  pro: boolean;
  user_activation_key: string;
  user_email: string;
  user_login: string;
  user_nicename: string;
  user_pass: string;
  user_registered: string;
  user_status: number;
  user_url: string;
};

export interface FetchUser {
  Message?: string;

  User: User[];
}
