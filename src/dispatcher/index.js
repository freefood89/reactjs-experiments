const DEFAULT_TIMEOUT = 5000

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

    handler(this.timeouts)
  }

  deregister(name) {
    clearTimeout(this.timeouts[name])
  }
}
