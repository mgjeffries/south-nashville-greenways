export class EventHub {
  constructor() {
    this.listeners = {};
  }

  on(event, fn) {
    (this.listeners[event] ||= []).push(fn);
  }

  off(event, fn) {
    this.listeners[event] = this.listeners[event]?.filter(f => f !== fn);
  }

  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data));
  }
}
