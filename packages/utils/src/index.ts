import { Core, createCore } from '@example/core';

export function createGreeting(name: string): string {
  const core = createCore(name);
  return core.greet();
}

export function formatMessage(core: Core, message: string): string {
  return `${core.getName()}: ${message}`;
}

export function createMultiCore(names: string[]): Core[] {
  return names.map(name => createCore(name));
}

export const UTILS_VERSION = '0.0.0';