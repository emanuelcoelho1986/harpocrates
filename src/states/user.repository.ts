import {createStore, select, withProps} from "@ngneat/elf";
import {GuessGameProps} from "./guess-game.repository";

export interface UserProps {
    name: string;
    gamesPlayed: GuessGameProps[],
    currentGame: GuessGameProps | null
}

const store = createStore({name: 'user'}, withProps<UserProps>({
    name: '',
    gamesPlayed: [],
    currentGame: null
}));

export class UserRepository {
    $name = store.pipe(select(state => state.name));
    $games = store.pipe(select(state => state.gamesPlayed));
    $currentGame = store.pipe(select(state => state.currentGame));

    setName(name: string) {
        store.update(state => ({...state, name}));
    }

    addGame(game: GuessGameProps, isCurrentGame = false) {
        store.update(state => {
            const games = [...state.gamesPlayed, game];

            if (isCurrentGame) {
                return {...state, currentGame: game, gamesPlayed: games};
            }

            return {...state, gamesPlayed: games};
        });
    }

    setCurrentGame(game: GuessGameProps) {
        store.update(state => ({...state, currentGame: game}));
    }
}
