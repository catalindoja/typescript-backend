import { ToolEntry, NonSensitiveToolEntry, newToolEntry } from '../types';
import toolsData from './tools.json';


const tools: ToolEntry[] = toolsData as ToolEntry[]; //as Array<ToolEntry>; // needed when using tools.json

export const getTools = (): ToolEntry[] => tools;

export const findById = (id: number): NonSensitiveToolEntry | undefined => {
    const entry = tools.find(t => t.id === id);
    if (entry !== undefined) {
        const { command, ...nonSensitiveEntry } = entry;
        return nonSensitiveEntry;
    }

    return undefined
}

export const getToolsWithoutSensitiveInfo = (): NonSensitiveToolEntry[] => {
    return tools.map(({ id, name, description }) => ({ id, name, description }));
}

export const toolsWithoutSensitiveInfo = getToolsWithoutSensitiveInfo()

export const addTool = (newToolEntry: newToolEntry /*name: string, description: string, command: string*/): ToolEntry => {
    const newTool = {
        id: Math.max(...tools.map(t => t.id)) + 1,
        //name,
        //description,
        //command
        ... newToolEntry
    }

    tools.push(newTool);
    return newTool;
}
