import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import OrganizationRecords from'./OrganizationRecords';
import Pagination from './Pagination';

 class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state={
            recordsPerPage: 3,
            currentPage: 1,
            currentCollection: null
        }
        this.lastIndex = this.state.currentPage * this.state.recordsPerPage;
        this.firstIndex = this.lastIndex - this.state.recordsPerPage;
        this.currentRecords = null;
    }
  
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.foundations !== this.props.foundations) {
            this.setState({currentCollection: this.props.foundations})
        }
        // if (prevState.currentPage !== this.state.currentPage) {
        //     this.splitCollection(this.currentCollection);
        // }
    }


    changeCollection = e => {
        this.setState({currentCollection: this.props[e.target.id]})
    }

    // splitCollection = (collection) => {
    //     this.currentRecords = [...collection];
    //     this.lastRecordIndex = this.state.currentPage * this.state.recordsPerPage;
    //     this.firstRecordIndex = this.lastRecordIndex - this.state.recordsPerPage;
    //     return this.currentRecords = this.currentRecords.slice(this.firstRecordIndex, this.lastRecordIndex);
    // }

    paginate = (pageNr) => this.setState({currentPage: pageNr});
    
    render() {
        const {foundations, ngos, locals} = this.props;
        const {currentCollection, recordsPerPage} = this.state;
        console.log(this.state.currentCollection);
        return (
            <section className="organizations" name="organizations">
                <h2 className="title organizations__title">Komu pomagamy?</h2>
                <div className="organization-types">
                    <div 
                        className={currentCollection === foundations ? 'organization-type-1 active-type' : "organization-type-1"} id="foundations" onClick={this.changeCollection}>Fundacjom</div>
                    <div className={currentCollection === ngos ? 'organization-type-2 active-type' : "organization-type-2"} id="ngos" onClick={this.changeCollection}>Organizacjom pozarządowym</div>
                    <div className={currentCollection === locals ? 'organization-type-3 active-type' : "organization-type-3"} id="locals" onClick={this.changeCollection}>Lokalnym zbiórkom</div>
                </div>
                <p className="organizations__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                {currentCollection && 
                    <OrganizationRecords collection={currentCollection}/>}
                {currentCollection && 
                    <Pagination 
                        paginate={this.paginate} 
                        numOfRecords={currentCollection.length} 
                        recordsPerPage={recordsPerPage}
                    />}
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