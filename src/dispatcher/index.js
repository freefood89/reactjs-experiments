const DEFAULT_TIMEOUT = 60000

export default class Dispatcher {
  constructor() {
    this.timeouts = {}
    this.timeoutHandlers = {}
  }

  register(name, f, timeout = DEFAULT_TIMEOUT) {
    const handler = () => {
      f()
      this.timeouts[name] = setTimeout(handler, timeout)
      console.debug('timeouts: ' + JSON.stringify(this.timeouts))
    }

    if (!this.timeoutHandlers[name]) {
      this.timeoutHandlers[name] = handler
    }

    handler()
  }

  deregister(name) {
    clearTimeout(this.timeouts[name])
  }

  refresh(name) {
    const handler = this.timeoutHandlers[name]
    handler()
  }
}
