import React,{Component} from 'react'

class City extends Component{
    render(){
        return(
            <div>
                <input onChange={(event)=> this.props.enterCity(event.target.value)} value={this.props.city} className="form-control mt-2" placeholder="Enter City"></input>
            </div>
        )
    }
}

export default City