import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'


class StreamShow extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    
    renderStream = () => {
        if (!this.props.stream){
            return <div>loading...</div>
        } else {
            return (
                <div>
                    <h2>{this.props.stream.title}</h2>
                    <p>{this.props.stream.description}</p>
                </div>
                )
        }
    }

    render(){
        return (
            <div>
                {this.renderStream()}
            </div>
            )
    }
}


const mapStateToProps = (state , ownProps) => {
    return { stream : state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{fetchStream})(StreamShow);