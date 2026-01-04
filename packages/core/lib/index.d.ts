export declare class Core {
    private name;
    constructor(name: string);
    getName(): string;
    greet(): string;
}
export declare function createCore(name: string): Core;
export declare const VERSION = "0.0.0";
