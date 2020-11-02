import React, { Component } from 'react'
class Skills extends Component {
    constructor(props){
        super(props);
        this.state={'myskills':['.NET CORE', 'Entity Framework', 'AngularJS', 'JS', 'SQL', 'GIT', 'LARAVEL']};
    }
    
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{return <li>{value}</li>})}
                </ul>
            </div>
        )
    }
}export default Skills