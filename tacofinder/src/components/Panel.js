import React from 'react';
import '../styles/Panel.scss';

class Panel extends React.Component {
    render() {
        return (
            <div className="panel">
                {this.props.title && 
                    <h2 className="panel__title">{this.props.title}</h2>
                }
                <div className="panel__content">{this.props.children}</div>
            </div>
        );
    }
}

export default Panel;