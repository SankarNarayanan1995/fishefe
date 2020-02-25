import React,{useState,useContext} from 'react';
import Card from './Card';
import AppContext from './AppContext';
const Fishepedia = () => {
 
    const [state,setState] = useState({fishav:false});
    const [globalState, setGlobalState] = useContext(AppContext);
    console.log("Before fetch");
    if(state.fishav)
    {
        return (
             <div className ="d-flex justify-content-center align-content-start flex-wrap">
                    {
                        
                        state.fishes.map((afeed) =>{
                            return(
                                <Card 
                                title={afeed.name}
                                image={afeed.picture[0]}
                                blabel="Learn More"
                            />
                            );
                        })
               
                    }
                </div>
        );
    }
    
        fetch('http://localhost:3010/fish/all')
        .then(response => response.json())
        .then((json) => 
        {
            console.log(json);
            if(json)
            {
                console.log("json found");
                setState({fishav:true,fishes:json});
      
            }
            else
            {
                return(<h1>No fishes</h1>);
            }
    

    }
    );
    return null;
        
    
    //alert(state.feed);
    

        //alert(state.feed);
       
 }


export default Fishepedia;