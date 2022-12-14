export const getContacts = ({ contacts }) => contacts.item;

export const getState = ({ contacts }) => ({ loading: contacts.loading, error: contacts.error })

export const getFilteredContacts = ({ contacts, filter }) => {  
    
    if (!filter) {
        
        return contacts.items;
        
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.items.filter(({name, phone}) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = phone.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })
    
    return filteredContacts;
}