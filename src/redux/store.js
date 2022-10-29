import { configureStore } from '@reduxjs/toolkit';
import {filterSlice}  from './Filter/Filter-slice';
import {contactsSlice} from './Contacts/Contacts-slice';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    },
});

export default store;
