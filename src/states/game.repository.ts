import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities, addEntities, updateEntities, withActiveId, selectActiveEntity, setActiveId } from '@ngneat/elf-entities';
import {localStorageStrategy, persistState} from "@ngneat/elf-persist-state";
import {syncState} from "elf-sync-state";

export enum GameStatusEnum {
  WIN,
  LOSE,
  ABANDONED,
  OM_GOING
}

export interface Game {
  id: number;
  username: string;
  status: GameStatusEnum
}

export const gameStore = createStore(
    { name: 'game' },
    withEntities<Game>(),
    withActiveId()
);

// Use localStorage to persist the data
persistState(gameStore, {
  key: 'auth',
  storage: localStorageStrategy,
});

// Sync Across Tabs
syncState(gameStore);

export const activeGame$ = gameStore.pipe(selectActiveEntity());

export const game$ = gameStore.pipe(selectAllEntities());

export function addGame(game: Game) {
  gameStore.update(addEntities(game));
}

export function updateGame(id: Game['id'], game: Partial<Game>) {
  gameStore.update(updateEntities(id, game));
}

export function setActiveGameId(id: Game['id']) {
  gameStore.update(setActiveId(id));
}
