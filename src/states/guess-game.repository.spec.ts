import { GuessGameRepository } from './guess-game.repository';

describe('GuessGameRepository | Unit Test', () => {
  let guessingGameRepository: GuessGameRepository;

  beforeEach(() => {
    guessingGameRepository = new GuessGameRepository();
    guessingGameRepository.initHiddenNumber();
  });

  it('should load store and have an hidden number', (done) => {
    guessingGameRepository.hiddenNumber$.subscribe({
      next: (hiddenNumber) => {
        expect(hiddenNumber).toBeDefined();
        expect(hiddenNumber).toBeGreaterThanOrEqual(0);
        expect(hiddenNumber).toBeLessThanOrEqual(10);

        done();
      },
      error: () => done.fail('Should not be here'),
    });
  });
});
