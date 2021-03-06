import React, { Component } from 'react';
import '../../style/Main.css'

class UploadMethodCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            text: props.text,
            link: props.link
        }
    }

    render() { 
        return ( 
            <div className='card upload-card'>
                <div className='card-body'>
                    <h5 className='card-title'>{this.state.title}</h5>
                    <p className='card-text'>{this.state.text}</p>
                    <a className='button' href={this.state.link}>select</a>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodCard;