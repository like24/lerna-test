"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTILS_VERSION = void 0;
exports.createGreeting = createGreeting;
exports.formatMessage = formatMessage;
exports.createMultiCore = createMultiCore;
const core_1 = require("@example/core");
function createGreeting(name) {
    const core = (0, core_1.createCore)(name);
    return core.greet();
}
function formatMessage(core, message) {
    return `${core.getName()}: ${message}`;
}
function createMultiCore(names) {
    return names.map(name => (0, core_1.createCore)(name));
}
exports.UTILS_VERSION = '0.0.0';
