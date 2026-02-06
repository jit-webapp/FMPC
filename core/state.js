// Application State Management

class ApplicationState {
    constructor() {
        this.state = {};
    }

    getState(key) {
        return this.state[key];
    }

    setState(key, value) {
        this.state[key] = value;
    }

    updateState(updater) {
        this.state = { ...this.state, ...updater(this.state) };
    }
}

export default new ApplicationState();