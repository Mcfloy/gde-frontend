import { RibbonCategory } from './ribbon-category';

export interface Ribbon {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  imageURL: string;
}
