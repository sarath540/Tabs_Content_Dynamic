import React from 'react';

class Tab extends React.Component { 
    constructor(props) { 
        console.log(props);
        super(props);
    }

    render() 
    { 
        console.log("props"+JSON.stringify(this.props));
        return (
            <div>
                <h4 className="text-center">{this.props.content.title}</h4>
                <p>{this.props.content.txt}</p>
            </div>
        )
    } 
} 

export default Tab;