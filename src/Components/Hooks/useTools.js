import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() =>{
        fetch("https://gentle-fortress-48614.herokuapp.com/parts")
        .then(res=> res.json())
        .then(data => setTools(data))
    } , [])

    return [tools, setTools]
}

export default useTools;