import { React } from 'react'


const Tool = ({tools})  => {
    var myButtons = [];
    

        for (let i = 0; i < 4; i++)
        {
            var button = <button>{tools[i]}</button>
            myButtons.push(button)
        }

        return(
            
            <div>
                <p>{myButtons}</p>
            </div>
            
        )



    
}

export default Tool