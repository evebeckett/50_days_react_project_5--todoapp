import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React, {useState} from "react";

function CreateArea (props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setExpanded] = useState(false)

    function handleChange (event) {
    
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true)
    }

    return (
       <div>
           <form className="create-note">
               {isExpanded && (
               <input type="text" 
                    name="title" 
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                )}

                <textarea 
                    name="content"
                    onClick={expand} 
                    rows={isExpanded ? "3":"1"}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note. . ."
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
           </form>
       </div>
        
    )
}

export default CreateArea;