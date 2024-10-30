


import { StateData } from "@/data/state-data";


function getAllCities(stateData: StateData): string[] {
    let allCities: string[] = [];
    for (const state in stateData) {
        allCities = allCities.concat(stateData[state]);
    }
    return allCities;
}

export default getAllCities;