import { newToolEntry } from "./types";
import { MockParameter } from "./enums";

const isString = (string: string): boolean => {
    return (typeof string === 'string')
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

//parseCommand for now is similar to parseString, but it can be changed in the future
const parseCommand = (commandFromRequest: any): string => {
    if (!isString(commandFromRequest)) {
        throw new Error('Incorrect or missing command');
    }

    return commandFromRequest;
}

const parseString = (string: any): string => {
    if (!isString(string)) {
        throw new Error(`Incorrect or missing string`);
    }
    return string;
}

const parseDate = (dateFromRequest: any): string => {
    if (!isDate(dateFromRequest)) {
        throw new Error(`Incorrect or missing date: ${dateFromRequest}`);
    }
    return dateFromRequest;
}

const isMockParameter = (param: any): boolean => {
    return Object.values(MockParameter).includes(param);
}

const parseMockObject = (mockParameterFromRequest: any): MockParameter => {
    if (!isString(mockParameterFromRequest) || !isMockParameter(mockParameterFromRequest)) {
        throw new Error(`Incorrect or missing mockObject`);
    }

    return mockParameterFromRequest;
}

const toNewToolEntry = (object: any): newToolEntry => {
    const newToolEntry: newToolEntry = {
        name: parseString(object.name),
        description: parseString(object.description),
        command: parseCommand(object.command)
    }

    console.log(parseMockObject("mock1"))
    console.log(parseDate("2021-09-01"))
    return newToolEntry;
}

export default toNewToolEntry;