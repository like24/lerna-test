"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.Core = void 0;
exports.createCore = createCore;
class Core {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    greet() {
        return `Hello from ${this.name}!`;
    }
}
exports.Core = Core;
function createCore(name) {
    return new Core(name);
}
exports.VERSION = '0.0.0';
