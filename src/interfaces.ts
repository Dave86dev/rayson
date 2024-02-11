export interface StackElement {
    keyName: string
    value: string | number | boolean | null
    parentKey?: string
}

export interface ArraysComponentProps {
    keyName: string 
    value: any[] 
    depth?: number
}

export interface ObjectsComponentProps {
    // keyName: string
    value: { [key: string]: any}
    depth?: number 
}

export interface PrimitivesComponentProps {
    keyName: string
    value: string | number | boolean | null
}
