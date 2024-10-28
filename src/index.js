// const { UnitCharacter } = require('./js/UnitCharacter.class.js');
// const { Team } = require('./js/Team.class.js');

import { UnitCharacter } from './js/UnitCharacter.class.js';
import { Team } from './js/Team.class.js';

const tor = new UnitCharacter('Tor', 'Magician');
const gor = new UnitCharacter('Gor', 'Bowerman');
const SuperMan = new UnitCharacter('SuperMan', 'Daemon');

const teamDreem = new Team();
const listAllUnit = [gor, tor, gor, SuperMan];
teamDreem.addAll(listAllUnit);
// console.log(teamDreem);
// const teamDreemList = teamDreem.toArray();
// console.log(teamDreemList, '- end');

// Вариант№ 1 вызова Генератора
for (const value of teamDreem) {
    console.log(`\nUnutTeam №${value.numUnit}\n`, value.item);
}

// Вариант№ 2 вызова Генератора
console.log(`\n`,...teamDreem);

 
