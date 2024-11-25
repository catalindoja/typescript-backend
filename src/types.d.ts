// It's better to use enum instead of export type, because it can be used in utils for type checking.
// export type MockParameter = "mock1" | "mock2" | "mock3" | "mock4" | "mock5";

/* As long as there is no need for enums in the types file it can be called types.d.ts because it's a definition file.´
*  The issue with the enums is that they can be used during runtime so they are transpiled to JavaScript.
*  If you insist on having the enums here, you must change the filename to types.ts and export the enums as const.
 */


export interface ToolEntry {
    id: number
    name: string
    description: string
    command: string
}

//export type NonSensitiveToolEntry = Pick<ToolEntry, 'id' | 'name' | 'description'>;
export type NonSensitiveToolEntry = Omit<ToolEntry, 'command'>;
export type newToolEntry = Omit<ToolEntry, 'id'>;