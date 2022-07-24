export default class EventManager {
  constructor() {
    this.listeners = {};
  }
}

const toastEventManager = new EventManager();
console.log(toastEventManager);
