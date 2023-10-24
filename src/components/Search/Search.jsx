import React, { useRef, useState } from 'react'

const Search = () => {

    // State to manage the search input
    const [searchPerson, setSearchPerson] = useState('');

    // Ref to the input element
    const inputRef = useRef();
    
    // Sample data
    const people = [
            { id: 1, name: "alice", age: 30 },
            { id: 2, name: "bob", age: 25 },
            { id: 3, name: "charlie", age: 35 },
            { id: 4, name: "alice", age: 40 },
            { id: 5, name: "alix", age: 23 },
        ];

    // Get the user input
    const handleSearch = (e) => {
        setSearchPerson(e.target.value.toLocaleLowerCase()) // convert toLowerCase
    }

    // if input value is (" "). The value of variable findPerson is will be the value of variable people array object, because ti include method, then if the input value is not null, The value of variable findPerson is will be value of searchPerson.
    const findPerson = people.filter((person) => person.name.includes(searchPerson))

  return (
    <div>
        <input 
            ref={inputRef} 
            type="text" 
            className='border-4 mt-4 ml-4'
            onChange={handleSearch}
        />

        <ul className='flex'>
            {findPerson.map((tao, index) => (
                <li key={index} className='bg-red-300 p-2 ml-2 mt-12 rounded cursor-pointer'>
                    {tao.id} {/*" "*/}
                    {tao.name} {/*" "*/}
                    {tao.age} {/*" "*/}
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default Search


