import { Target } from 'framer-motion';
import { reduce } from 'lodash';

export enum ShapeMovingState {
  None = '',
  Home = 'home',
  Portfolio = 'portfolio',
}

export type ShapeMovingLoaderReturn = {
  state: ShapeMovingState;
};

export type Pages = ShapeMovingState;

export type AnimationType = string | number | symbol;

export type PageAnimations = Record<Pages, Target>;
export type TypeAnimations<Type extends AnimationType> = Record<Type, Target>;

export type PageBaseAnimations<Type extends AnimationType> = Record<Pages, TypeAnimations<Type>>;
export type TypeBaseAnimations<Type extends AnimationType> = Record<Type, PageAnimations>;

export class ShapeMovingLayoutAnimations<Type extends string | number | symbol> {
  private _pageBaseAnimations: PageBaseAnimations<Type>;

  constructor(animation: PageBaseAnimations<Type>) {
    this._pageBaseAnimations = animation;
  }

  page(page: Pages) {
    return this._pageBaseAnimations[page];
  }

  type(type: Type) {
    return reduce(
      this._pageBaseAnimations,
      (res, val, key) => {
        return { ...res, [key]: val[type] };
      },
      {} as PageAnimations,
    );
  }
}
