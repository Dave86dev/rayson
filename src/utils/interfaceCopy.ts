import { JsonCopyProps } from "../interfaces";

export const JsonCopy = async ({ keyName, data }: JsonCopyProps): Promise<boolean> => {
    let interfaceString = `export interface ${keyName !== "" ? keyName : "RenameThisObject"} {\n`;

    Object.entries(data).forEach(([key, value]) => {
        const valueType = typeof value;
        let tsType: string;

        switch (valueType) {
            case 'number':
                tsType = 'number';
                break;
            case 'string':
                tsType = 'string';
                break;
            case 'boolean':
                tsType = 'boolean';
                break;
            case 'object':
                if (Array.isArray(value)) {
                    tsType = 'any[]';
                } else {
                    tsType = 'object';
                }
                break;
            default:
                tsType = 'any';
        }

        interfaceString += `    ${key}: ${tsType}\n`;
    });

    interfaceString += '}';

    try {
        await navigator.clipboard.writeText(interfaceString);
        return true; 
    } catch (err) {
        console.error("Failed to copy interface to clipboard", err);
        return false; 
    }
};
