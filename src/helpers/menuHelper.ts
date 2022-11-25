type MenuOptions = 'home' | 'clients' | 'equipaments';
type sortOption = 'name' | 'type' | 'brand';

export const selectedMenu = (activeMenu: MenuOptions) => {
    let returnObject = {
        home: false,
        clients: false,
        equipaments: false
    }

    if(activeMenu){
        returnObject[activeMenu] = true;
        return returnObject;
    }
}

export const selectedSort = (sortOption: sortOption) => {
    let returnSort = {
        name: false,
        type: false,
        brand: false
    }
    if(sortOption){
        returnSort[sortOption] = true;  
        return returnSort;
    }
}
