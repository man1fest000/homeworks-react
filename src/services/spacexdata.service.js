const getShips = () => {
    return fetch("https://api.spacexdata.com/v3/launches/").then((response) => response.json());
};

const getShip = (flight_number) => {
    return fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`).then((response) => response.json());
};

export { getShips, getShip };
