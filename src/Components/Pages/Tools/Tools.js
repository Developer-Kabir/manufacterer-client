import React, { useEffect, useState } from 'react';
import SingleTool from '../SingleTool/SingleTool';
import './tools.css'

const Tools = () => {

     const [tools, setTools] = useState([]);
     useEffect( () =>{
         fetch('http://localhost:5000/parts')
         .then(res=>res.json())
         .then (data => setTools(data))
     }, [])


    return (
        <div className='tools'>
             
            
        {
            tools.map( tool => <SingleTool
            
                key={tool._id}
                tool = {tool}

            ></SingleTool>)
        }


        </div>
    );
};

export default Tools;

