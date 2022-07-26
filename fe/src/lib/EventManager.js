export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners.get(event);

    if (!this.listeners[event]) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners.set(event, filteredListeners);
  }
}

const toastEventManager = new EventManager();

function addToast1(payload) {
  console.log('addtoast listener1', payload);
}

function addToast2(payload) {
  console.log('addtoast listener2', payload);
}

toastEventManager.on('addtoast', addToast1);
toastEventManager.on('addtoast', addToast2);
toastEventManager.emit('addtoast', { type: 'danger', text: 'Texto' });

toastEventManager.removeListener('addtoast', addToast1);

toastEventManager.emit('addtoast', 'depois de remover...');

console.log(toastEventManager);
