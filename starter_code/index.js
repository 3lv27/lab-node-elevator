'use strict';

const Elevator = require('./elevator.js');
const Person = require('./person.js');


const elevator = new Elevator();
const person = new Person('Elvin', 2, 9);

elevator.start();
elevator.floorUp();
elevator.floorUp();
elevator.floorUp();


elevator.log();
elevator.call(person);
elevator._passengersEnter(person);
