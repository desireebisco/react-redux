import React from "react";
import '../style/TestStyle.css'


export const Test = () => {
    const content = [
      {header: 'header 1, header 1, header 1, header 1, header 1, header 1, header 1, header 1, header 1, header 1, header 1', 
      contents: 'This is content number 1, This is content number 1, This is content number 1, This is content number 1, This is content number 1, This is content number 1, This is content number 1, This is content number 1,'},
      {header: 'header 2',contents: 'This is content number 2'},
      {header: 'header 3',contents: 'This is content number 3'}
    ]
    return (
        <div class='container' >
            {content.map((item) =>(

                 <div class='tile' >
                    <div class='header'>
                    <p>{item.header}</p>
                    </div>
                    <div class='body'>
                        <p>{item.contents}</p>
                   
                    </div>
                    <div class='footer'>
                        <button>Button 1</button>
                        <button>Button 2</button>
                    </div>
                </div>

            ))}

        </div>
    )
}