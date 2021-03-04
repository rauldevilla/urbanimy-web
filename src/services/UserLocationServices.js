
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
        resourceTypes: [
            {
                id: "RT001",
                name: "Cancha múltiple",
            },
            {
                id: "RT002",
                name: "Banda trotadora",
            },
            {
                id: "RT003",
                name: "Bicicleta spinnig",
            }
        ],
        resources: [
            {
                id: "RES001",
                resourceTypeId: "RT001",
                name: "Cancha principal"
            },
            {
                id: "RES002",
                resourceTypeId: "RT002",
                name: "Banda Gimnasio 1"
            },
            {
                id: "RES003",
                resourceTypeId: "RT002",
                name: "Banda Gimnasio 2"
            },
            {
                id: "RES004",
                resourceTypeId: "RT002",
                name: "Banda Salón social 1"
            },
            {
                id: "RES005",
                resourceTypeId: "RT003",
                name: "Bicicleta Gymnasio 1"
            },
            {
                id: "RES006",
                resourceTypeId: "RT003",
                name: "Bicicleta salón socila 1"
            }
        ]
    }
];

export const getUserLocations = (user, onSuccess, onError) => {
    console.log("loading avaliable locations for " + user.email);
    onSuccess(USER_LOCATIONS);
};

export const getUserResourceTypesInLocation = (locationId, onSuccess, onError) => {
    var resourceTypes = USER_RESOURCES_BY_LOCATION.filter((location) => location.id === locationId);
    onSuccess(resourceTypes != null && resourceTypes !== 'undefined' && resourceTypes.length > 0 ? resourceTypes[0].resourceTypes : []);
};

export const getUserResourceTypesByTypeId = (resourceTypeId, onSuccess, onError) => {
    var resources = USER_RESOURCES_BY_LOCATION[0].resources.filter((resource) => resource.resourceTypeId === resourceTypeId);
    onSuccess(resources != null && resources !== 'undefined' && resources.length > 0 ? resources : []);
}

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