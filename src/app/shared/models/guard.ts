import { User } from './user';

export interface Guard {
  id: number;
  name: string;
  referringOfficiers: User['id'][];
  position: number;
}
