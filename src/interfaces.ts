export interface StackElement {
    keyName: string
    value: string | number | boolean | null
    parentKey?: string
}

export interface JsonSearchProps {
    dataJson: unknown,
    criteria: string
}

export interface JsonCopyProps {
    keyName: string
    data: any
}

export interface JsonRenderProps {
    data: any
}

export interface ArraysComponentProps {
    keyName: string 
    value: any[] 
    depth?: number
}

export interface ObjectsComponentProps {
    keyName: string
    value: { [key: string]: any}
    depth?: number 
}

export interface PrimitivesComponentProps {
    keyName: string
    value: string | number | boolean | null
}

export interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

export interface FetchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export interface FetchState {
    data: unknown | null; 
    error: string;
    hasFetched: boolean;
}
  
export interface TooltipPosition {
    left: number;
    top: number;
}