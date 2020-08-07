/*
 * @Author        : djkloop
 * @Date          : 2020-08-07 12:01:36
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-08-07 12:23:13
 * @Description   : 头部注释
 * @FilePath      : /vue3.x/src/views/Home/useHome.ts
 */
import { HomeState } from "./home.type";

export const useInc = (state: HomeState) => {
  state.count++;
};

export const useDec = (state: HomeState) => {
  state.count--;
};
