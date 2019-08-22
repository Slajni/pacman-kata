import PacMan from '../src/pacman-core/PacMan';


test('tick pacman when is in super state', () => {
    const pacman = new PacMan({ state: true, superTime: 200 });
    pacman.tick();
    expect(pacman.state).toBe(true);
    expect(pacman.superTime).toBe(199);
});
test('tick pacman when state super time one', () => {
    const pacman = new PacMan({ state: true, superTime: 1 });
    pacman.tick();
    expect(pacman.state).toBe(false);
    expect(pacman.superTime).toBe(0);
});
test('tick pacman when state normal time zero', () => {
    const pacman = new PacMan({ state: false, superTime: 0 });
    pacman.tick();
    expect(pacman.state).toBe(false);
    expect(pacman.superTime).toBe(0);
});


test('eat ball when balls < 40', () => {

    const pacman = new PacMan({ballCount:20});
    pacman.eatBall(false);
    expect(pacman.ballCount).toBe(21);

})

test('eat ball when balls > 40', () => {

    const pacman = new PacMan({ballCount:41, level: 1});
    let current_level = pacman.level;
    pacman.eatBall(false);
    expect(pacman.ballCount).toBe(0);
    expect(pacman.level).toBe(2);
    

})
