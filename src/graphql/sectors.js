
export const listSectorsQuery = `query listSectors {
	listSectors{
		idsectors
		sector
		short
		user
		active_from
	}
}`;

export const createSectorQuery = (sector) => {
	return `mutation createSector {
		createSector(
			input: {
				sector: "${sector.sector}"
				short: "${sector.short}"
				user: "${sector.emailAddress}"
			}
			) {
				idsectors
				sector
				short
				active_from
				user
			}
		}`;
	}
	
export const  deleteSectorQuery = (sectorId) => {
	return `mutation delete {
		deleteSector(
			input: {
				idsectors: ${sectorId}
			}
			)
			{
				idsectors
				sector
				short
				active_from
				user
			}
		}`;
	}
		
		
		
export const updateSectorQuery = (sector) => {
	return `mutation updateSector{
		updateSector(
			input: {
				idsectors: ${sector.idsectors}
				sector: "${sector.sector}"
				short: "${sector.short}"
				user: "${sector.emailAddress}"
			}
			) {
				idsectors
				sector
				short
				active_from
				user
			}
		}`;
	}