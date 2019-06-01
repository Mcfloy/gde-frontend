import { Medal } from './medal';
import { Decoration } from './decoration';
import { Ribbon } from './ribbon';

export interface User {
  avatar: string;
  id: number;
  discordId: number;
  name: string;
  rankId: number;
  ribbonIds: Ribbon['id'][];
  decorationIds: Decoration['id'][];
  medalIds: Medal['id'][];
}
