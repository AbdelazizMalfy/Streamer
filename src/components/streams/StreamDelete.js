import React from 'react';
import {connect} from 'react-redux'

import Modal from '../model';
import history from '../../history'
import { fetchStream , deleteStream } from '../../actions'


class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id);
    }


    onCancel = () => {
        history.push('/');
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={this.onDelete} className="ui button negative">Delete</button>
                <button onClick={this.onCancel} className="ui button">Cancel</button>
            </React.Fragment>
        ) 
    }


    render(){
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Modal 
                    title="Delete Stream"
                    content={`Are your Sure you want to delete stream with title "${this.props.stream.title}"`}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return { stream : state.streams[ownProps.match.params.id] }
}



export default connect(mapStateToProps,{ fetchStream , deleteStream })(StreamDelete);