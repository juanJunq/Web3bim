import React from 'react';
import {Button} from '../../styles/LoginStyle' 

class SubmitBtn extends React.Component{
    render(){
        return(
            <div className = "submitButton">
                <Button
                    className = 'btn'
                    disabled = {this.props.disabled}
                    onClick = {()=>this.props.onClick()}
                >
                    {this.props.text}
                </Button>
            </div>
        )
    }
}

export default SubmitBtn;
