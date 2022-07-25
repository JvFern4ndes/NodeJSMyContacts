export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', () => {});

console.log(toastEventManager);
