import React, { Component } from 'react';

import Element from '../Element';

class Fieldset extends React.Component {
    constructor(props) {
        super(props);

        const {
            config: { collapsed }
        } = this.props;

        this.state = {
            collapsed: (collapsed) ? true : false,
        };
    }

    toggle( event ) {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        const {
            config: { title, elements },
            formikProps
        } = this.props;

        return (
            <div className="card flutter-fieldset">
                { !!title &&
                    <div className="card-header" onClick={ (event) => this.toggle(event) }>
                        <i className="fa fa-align-justify"></i>
                        { title }
                        <div className="card-actions">
                            <a className="card-header-action btn btn-minimize">
                                <i className={ this.state.collapsed ? 'icon-arrow-down' : 'icon-arrow-up' }></i>
                            </a>
                        </div>
                    </div>
                }
                <div className={ 'collapse' + ( !this.state.collapsed ? 'show' : '' ) }>
                    <div className="card-block">
                        { Object.keys(elements).map( (key) =>
                            <Element key={ key } config={ elements[key] } formikProps={ formikProps } />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Fieldset;