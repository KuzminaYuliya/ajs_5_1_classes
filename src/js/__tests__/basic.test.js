import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

test('should create Bowerman player', () => {
  const bowermanPlayer = {
    name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(new Bowerman('Bowerman')).toEqual(bowermanPlayer);
});

test('should create Daemon player', () => {
  const daemonPlayer = {
    name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(new Daemon('Daemon')).toEqual(daemonPlayer);
});

test('should create Magician player', () => {
  const magicianPlayer = {
    name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(new Magician('Magician')).toEqual(magicianPlayer);
});

test('should create swordsmanPlayer player', () => {
  const swordsmanPlayer = {
    name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Swordsman('Swordsman')).toEqual(swordsmanPlayer);
});

test('should create undeadPlayer player', () => {
  const undeadPlayer = {
    name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(new Undead('Undead')).toEqual(undeadPlayer);
});

test('should create undeadPlayer player', () => {
  const zombiePlayer = {
    name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Zombie('Zombie')).toEqual(zombiePlayer);
});

test('attempt to create player with wrong name', () => {
  expect(() => new Bowerman('Bowerman9999999')).toThrow();
});

test('attempt to create player with wrong type', () => {
  expect(() => new Character('Bowerman', 66)).toThrow();
});
