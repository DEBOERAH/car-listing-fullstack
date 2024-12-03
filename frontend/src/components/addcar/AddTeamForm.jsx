import React from 'react'
import {useState} from 'react'
import "./AddTeamForm.css"
import TeamCard from '../team/TeamCard'


const AddTeamForm = () => {
    const [name, setName]=useState("");
    const [link, setLink]=useState("");
    const [imgUrl,setImgUrl]=useState("");
    const [teamObj,setTeamobj]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTeam={

            name,
            link,
            imgUrl,
        };
        // updateteam object state
        setTeamobj(newTeam);

        // clear form
        setName("");
     setLink("");
    setImgUrl("")



    };
    

    return (
        <div>
            <div className="container"> 
            <h2>Add Team</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                  
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="link">Github Link:</label>
                    <input type="text" id="link" name="link"
                    placeholder="Enter GitHub link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imgUrl">Image:</label>
                    <input type="text" id="imgUrl" name="imgUrl" 
                    placeholder="Enter image url"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}/>
                </div>

                
                    <button type="submit">Add Team Member</button>
                
            </form>
            </div>

                
            <div>
          <h2>Team Card</h2>
          {teamObj.name && (
            <TeamCard
              imgUrl={teamObj.imgUrl}
              username={teamObj.name}
              link={teamObj.link}
            />
          )}
        </div>
        </div>
    )
}

export default AddTeamForm
