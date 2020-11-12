import { listSectorsQuery, createSectorQuery, deleteSectorQuery, updateSectorQuery } from '../graphql/sectors'
import { API, graphqlOperation } from 'aws-amplify';

const getlistSectors = async () => {
    const data = await API.graphql(graphqlOperation(listSectorsQuery));
    return data;
}

const createSector = async (sector) => {
    const data = await API.graphql(graphqlOperation(createSectorQuery(sector)));
    return data;
}

const deleteSector = async (sectorId) => {
    const data = await API.graphql(graphqlOperation(deleteSectorQuery(sectorId)));
    return data

}

const updateSector = async (sector) => {
    const data = await API.graphql(graphqlOperation(updateSectorQuery(sector)));
    return data;
}



export {getlistSectors, createSector, deleteSector, updateSector}