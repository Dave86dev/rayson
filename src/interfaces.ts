export interface StackElement {
    keyName: string
    value: string | number | boolean | null
    parentKey?: string
}

export interface ArraysComponentProps {
    keyName: string
    value: Array<any>
}

export interface ObjectsComponentProps {
    keyName: string
    value: { [key: string]: any}
}

export interface PrimitivesComponentProps {
    keyName: string
    value: string | number | boolean | null
}
