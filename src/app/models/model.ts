export interface Entry {
    value: string
}

export interface EntryWithID extends Entry{
    id: number;
}

export interface Record {
    entires: Entry[];
}

export interface Data {
    records: Record[];
}