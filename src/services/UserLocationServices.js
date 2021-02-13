
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

const USER_RESOURCES_BY_LOCATION = [
    {
        id: "BG001",
        resources: [
            {
                id: "COURT001",
                name: "Cancha múltiple"
            },
            {
                id: "GYM001",
                name: "Gimnasio 1"
            },
            {
                id: "GYM002",
                name: "Gimnasio 2"
            }
        ]
    }
];

export const getUserLocations = (user, onSuccess, onError) => {
    console.log("loading avaliable locations for " + user.email);
    onSuccess(USER_LOCATIONS);
};

export const getUserResourcesInLocation = (locationId, onSuccess, onError) => {
    var resources = USER_RESOURCES_BY_LOCATION.filter((location) => location.id === locationId);
    onSuccess(resources != null && resources !== 'undefined' && resources.length > 0 ? resources[0].resources : []);
};
