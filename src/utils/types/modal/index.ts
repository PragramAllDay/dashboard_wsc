export type SelectOption = {
    id: number;
    name: string;
    value: string;
}


export type FieldType = {
    id: number;
    title: string;
    alias: string;
    type: string;
    column?: number;
    columnLarge?: number,
    columnMedium?: number,
    columnSmall?: number,
    placeholder?: string;
    rows?: number;
    multiline?: boolean;
    isSelect?: boolean;
    selectField?: SelectOption[];
}

