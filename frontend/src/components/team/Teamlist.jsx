import React from 'react'
import { useState, useEffect } from 'react'
import TeamCard from './TeamCard'

const Teamlist = () => {

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridGap: '1rem',
            padding: '1rem'
        }
    }
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch data
    const fetchData = async () => {
        setLoading(true);
        const url = " https://api.github.com/users";
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setLoading(false);
            setUsers(data);
           
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    

    useEffect(() => {
        fetchData();
    }, []);

  

    return (
        <div>
            <h2>Car Bay Team</h2>
            {loading && <p>Loading...</p>}
            
            <div style={styles.grid}>

                {users.map((user) => (
                    <TeamCard 
                    key={user.id} 
                    imgUrl={user.avatar_url}
                    username={user.login}
                    link={user.html_url}
                     />

              ))}
            </div>
            
            

        </div>
    )
}

export default Teamlist