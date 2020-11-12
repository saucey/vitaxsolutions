  
  
export const LOGIN_USER = (user) => {
    return {
        type: 'LOGIN',
        userLoggedIn: user
    }
}

export const LOGOUT_USER = () => {
    return {
        type: 'LOGOUT',
        userLoggedIn: null
    }
}

export const GET_SECTORS = () => {
    return { type: 'GET_SECTORS' };
}

export const INSERT_SECTORS = (sectors) => {
    return {
        type: 'INSERT_SECTORS',
        listSectors: sectors
    }
};

export const INSERT_SECTOR = (sectors) => {
    return {
        type: 'INSERT_SECTOR',
        listSectors: sectors
    }
};

export const TRANSFORM_SECTORS = (sectors) => {
    return {
        type: 'TRANSFORM_SECTORS',
        listSectors: sectors
    }
};

export const CLOSE_MODAL = (isOpen) => {
    return {
        type: 'CLOSE_MODAL',
        modalOpen: isOpen
    }
}

export const DELETE_SECTOR = (sectorId) => {
    return {
        type: 'DELETE_SECTOR',
        sectorId
    }
}

