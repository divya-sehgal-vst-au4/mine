import React,{Component} from 'react'

class Cities extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.cityList.map(
                        function (elem) {
                            return(
                                <li>{elem}</li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default Cities