
const USER_LOCATIONS = [
    {
        id: "BG001",
        name: "Benedictine Gardens"
    },
    {
        id: "BP001",
        name: "Benedictine Park"
    }
];


export const getUserLocations = (user, onSuccess, onError) => {
    onSuccess(USER_LOCATIONS);
};