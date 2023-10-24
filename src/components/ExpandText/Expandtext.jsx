import { useState } from "react"

const Expandtext = ({ children, maxCharacters}) => {
    // set var showFulltext with false value (boolean)
    const [showFullText, setShowFullText] = useState(false)
    
    // check if the boolean is true of false then stored to variable text the value/content of children
    const text = showFullText ? children : children.substring(0, maxCharacters)

    // Lets check if children length is less than 20
    if(children.length <= maxCharacters) return <div>{children}</div>

  return (
    <div>
        {text}...
        <br />
        <button
            className="border bg-red-600 p-2"
            onClick={() => setShowFullText(!showFullText)}
        >{showFullText ? "Less" : "More"}</button>
    </div>
  )
}

export default Expandtext

// Take Note
// import these to App.jsx, to see how it works
// <Expand maxCharacters={20}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni nulla maiores voluptatibus quod sunt incidunt numquam maxime molestias cupiditate. Doloribus quam optio deserunt id recusandae laboriosam eveniet et eius.
//         Eaque at sint, ipsa dignissimos quis fugiat explicabo corporis nulla, exercitationem, ab ipsum? Error distinctio, ad incidunt consequuntur asperiores, nam quasi quo nobis praesentium beatae dolor atque adipisci inventore temporibus!
// </Expand>