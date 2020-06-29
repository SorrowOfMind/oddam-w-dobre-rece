import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

 class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state={
            recordsPerPage: 3,
            currentPage: 1,
            currentRecords: null
        }
        this.lastRecordIndex = this.state.currentPage * this.state.recordsPerPage;
        this.firstRecordIndex = this.lastRecordIndex - this.state.recordsPerPage;
        
    }

    render() {
        const {foundations, ngos, locals} = this.props;
        const {currentRecords} = this.state;
        
        return (
            <section className="organizations" name="organizations">
                <h2 className="title organizations__title">Komu pomagamy?</h2>
                <div className="organization-types">
                    <div className="organization-type-1 active-type">Fundacjom</div>
                    <div className="organization-type-2">Organizacjom pozarządowym</div>
                    <div className="organization-type-3">Lokalnym zbiórkom</div>
                </div>
                <p className="organizations__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        foundations: state.firestore.ordered.foundations,
        ngos: state.firestore.ordered.ngos,
        locals: state.firestore.ordered.locals
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'foundations'},
        {collection: 'ngos'},
        {collection: 'locals'}])
)(Organizations);