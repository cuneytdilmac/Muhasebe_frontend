export const RootURL = "http://localhost:8080";
export const ApiURL = `${RootURL}/api/`;

export const EndPoints = {
    clients: `${ApiURL}all-clients`,
    numberOfClients: `${ApiURL}number-of-clients`,
    addClient: `${ApiURL}add-client`,
    updateClient: `${ApiURL}update-client`,
    deleteClient: `${ApiURL}delete-client`,
    logs: `${ApiURL}all-logs`,
    numberOfLogs: `${ApiURL}number-of-logs`,
    offers: `${ApiURL}offers`,
    numberOfOffers: `${ApiURL}number-of-offers`,
    addOffer: `${ApiURL}add-offer`,
    updateOffer: `${ApiURL}update-offer`,
    deleteOffer: `${ApiURL}delete-offer`,
}