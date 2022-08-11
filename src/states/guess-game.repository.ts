import { createStore, select, withProps } from '@ngneat/elf';

export interface GuessGameProps {
  hiddenNumber: number | undefined;
}

// Store will be private and not available for external modifications. (Not directly)
const store = createStore({ name: 'guessGame' }, withProps<GuessGameProps>({
  hiddenNumber: undefined,
}));

export class GuessGameRepository {
  hiddenNumber$ = store.pipe(select((state) => state.hiddenNumber));

  initHiddenNumber() {
    store.update((state) => ({
      ...state,
      hiddenNumber: 1,
    }));
  }
}
