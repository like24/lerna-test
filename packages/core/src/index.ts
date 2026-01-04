export class Core {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public greet(): string {
    return `Hello from ${this.name}!`;
  }

  public getUppercaseName(): string {
    return this.name.toUpperCase();
  }
}

export function createCore(name: string): Core {
  return new Core(name);
}

export const VERSION = '0.0.0';