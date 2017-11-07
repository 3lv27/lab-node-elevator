'use strict';


class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = null;
    this.MAXFLOOR = 10;

    this.requests = [];
    this.waitingList = [];
    this.passengers = [];

    this._intervalID = null;
  }

  start() {
    this._intervalID = setInterval(this.update, 1000);
  }
  stop() {
    clearInterval(this._intervalID);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    if (this.floor === this.requests) {
      this.passengers.push(person.name);
      this.waitingList.shift();
      this.requests.push(person.destinationFloor);
      console.log(`${person.name} has enter the elevator`);
    }

  }
  _passengersLeave(person) {
    if (person.destinationFloor === this.floor) {
      let passenger = this.passengers.indexOf(person.name);
      this.passengers.splice(passenger, 1);
    }

  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = 'UP';
    }
  }
  floorDown() {
    if (this.floor < 0) {
      this.floor--;
      this.direction = 'DOWN';
    }
  }
  call(person) {

    this.requests.push(person.originFloor);
    this.waitingList.push(person.name);

  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
