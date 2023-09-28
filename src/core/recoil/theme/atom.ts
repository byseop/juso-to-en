import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { ITheme } from '@recoil/theme/types';

const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({ storage: localStorage, key: 'theme' });

const themeState = atom<ITheme | null>({
  key: 'theme',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export default themeState;
