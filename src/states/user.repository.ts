import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, withUIEntities } from '@ngneat/elf-entities';

export interface UserUI {
  id: number;
}

export interface User {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserProps {
}

export const store = createStore({ name: 'user' }, withProps<UserProps>({}), withEntities<User>(), withUIEntities<UserUI>());

export const user$ = store.pipe(selectAllEntities());

export function setUser(user: User[]) {
  store.update(setEntities(user));
}

export function addUser(user: User) {
  store.update(addEntities(user));
}

export function updateUser(id: User['id'], user: Partial<User>) {
  store.update(updateEntities(id, user));
}
