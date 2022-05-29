import useTools from '../../Hooks/useTools';
import SingleTool from '../SingleTool/SingleTool';
import './tools.css'

const Tools = () => {

   const [tools] = useTools([]);

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

