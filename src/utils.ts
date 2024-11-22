import { newToolEntry } from "./types";

const parseCommand = (commandFromRequest: any): string => {
    if (typeof commandFromRequest !== 'string' || !commandFromRequest) {
        throw new Error('Incorrect or missing command: ');
    }

    return commandFromRequest;
}

const isString = string => {
    return (typeof string === 'string' || string instanceof String)
}

const toNewToolEntry = (object: any): newToolEntry => {
    const newToolEntry: newToolEntry = {
        name: parseString(object.name, 'name'),
        description: parseString(object.description, 'description'),
        command: parseCommand(object.command)
    }
    return newToolEntry;
}

export default toNewToolEntry;