export interface OfferActionOptions {
    value: string;
    label: string;
}

export const offerActionOptions: OfferActionOptions[] = [
    { value: "edit", label: "Düzenle" },
    { value: "delete", label: "Sil" }
]