import {GuessGameProps, GuessGameRepository} from "./guess-game.repository";
import {UserRepository} from "./user.repository";
import { combineLatest } from 'rxjs';

describe('User Repository | Unit Test', () => {
    let userRepository: UserRepository;

    beforeEach(() => {
        userRepository = new UserRepository();
    })

    it('should load store', (done) => {
        userRepository.$name.subscribe({
            next: (name) => {
                expect(name).toBe('');
                done();
            },
            error: (err) => {
                done.fail(err);
            }
        });
    });

    it('should set the name to "test"', (done) => {
        userRepository.setName('test');
        userRepository.$name.subscribe({
            next: (name) => {
                expect(name).toBe('test');
                done();
            },
            error: (err) => {
                done.fail(err);
            }
        });
    });

    it('should return an empty array of games', (done) => {
        userRepository.$games.subscribe({
            next: (games) => {
                expect(games).toEqual([]);
                done();
            },
            error: (err) => {
                done.fail(err);
            }
        });
    });

    it('should init one game and set it as current game', (done) => {
        const newGame: GuessGameProps = {
            hiddenNumber: 2
        };

        userRepository.addGame(newGame, true);

        combineLatest([
            userRepository.$games,
            userRepository.$currentGame
        ]).subscribe({
            next: ([games, currentGame]) => {
                expect(currentGame).toBeDefined();
                expect(games.length).toBe(1);
                expect(currentGame).toBe(games[0]);
                expect(currentGame?.hiddenNumber).toBe(newGame.hiddenNumber);
                done();
            },
            error: (err) => {
                done.fail(err);
            }
        });
    })
});
