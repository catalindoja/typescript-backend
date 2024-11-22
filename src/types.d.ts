export interface ToolEntry {
    id: number
    name: string
    description: string
    command: string
}

//export type NonSensitiveToolEntry = Pick<ToolEntry, 'id' | 'name' | 'description'>;
export type NonSensitiveToolEntry = Omit<ToolEntry, 'command'>;
export type newToolEntry = Omit<ToolEntry, 'id'>;