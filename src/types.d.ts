export type Command = "string";

export interface Tool {
    id: number;
    name: string;
    description: string;
    commands: Command[];
}