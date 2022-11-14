type MenuOptions = 'home' | 'clients' | 'equipaments';

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