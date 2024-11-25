export type accessType = 'admin' | 'moderator' | 'normal';

export type user = {
  id: number;
  name: string;
  access: accessType;
};
