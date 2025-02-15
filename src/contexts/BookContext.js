import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Name of the Wind', id: 1 },
        { title: 'The Way of Kings', id: 2 },
        { title: 'The Hero of Ages', id: 3 },       
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
