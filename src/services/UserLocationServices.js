
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

export const getScheduleForDate = (date, onSuccess, onError) => {

    onSuccess(
        {
        date: new Date(),
        schedule: [
                {
                    hour: 5,
                    status: "occupied"
                },
                {
                    hour: 6,
                    status: "occupied"
                },
                {
                    hour: 7,
                    status: "free"
                },
                {
                    hour: 8,
                    status: "free"
                },
                {
                    hour: 9,
                    status: "free"
                },
                {
                    hour: 10,
                    status: "free"
                },
                {
                    hour: 11,
                    status: "free"
                },
                {
                    hour: 12,
                    status: "free"
                },
                {
                    hour: 13,
                    status: "free"
                },
                {
                    hour: 14,
                    status: "free"
                },
                {
                    hour: 15,
                    status: "free"
                },
                {
                    hour: 16,
                    status: "occupied"
                },
                {
                    hour: 17,
                    status: "occupied"
                },
                {
                    hour: 18,
                    status: "occupied"
                },
                {
                    hour: 19,
                    status: "occupied"
                },
                {
                    hour: 20,
                    status: "free"
                }
            ]
        }
    );

};