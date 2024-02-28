export interface Tarif {
    id: number,
    name: string,
    benefit: string[],
    price: number,
    debit: Debit
}
interface Debit {
    download: number,
    upload: number
}