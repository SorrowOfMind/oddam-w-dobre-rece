import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';

import OrganizationRecords from'./OrganizationRecords';
import Pagination from './Pagination';

const Organizations = () => {
    const [recordsPerPage, setRecordsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCollection, setCurrentCollection] = useState(null);
    const [currentRecords, setCurrentRecords] = useState(null);

    const foundations = useSelector(state => state.firestore.ordered.foundations);
    const ngos = useSelector(state => state.firestore.ordered.ngos);
    const locals = useSelector(state => state.firestore.ordered.locals);

    useFirestoreConnect([
        {collection: 'foundations'},
        {collection: 'ngos'},
        {collection: 'locals'}
    ]);

    useEffect(() => {
        if (foundations) setCurrentCollection(foundations);
    }, [foundations]);

    useEffect(() => {
        if (currentCollection) splitCollection(currentCollection)
    }, [currentCollection, currentPage])

    const changeCollection = e => {
        const {id} = e.target;
        setCurrentCollection(id === 'ngos' ? ngos : id === 'locals' ? locals : foundations );
        setCurrentPage(1);
    };

    const splitCollection = (collection) => {
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
        const splitArr = collection.slice(firstIndex, lastIndex);
        setCurrentRecords(splitArr);
    }

    const paginate = pageNr => setCurrentPage(pageNr);
    
    return (
        <section className="organizations" name="organizations">
                <h2 className="title organizations__title">Komu pomagamy?</h2>
                <div className="organization-types">
                    <div className={currentCollection === foundations ? 'organization-type-1 active-type' : "organization-type-1"} id="foundations" onClick={changeCollection}>Fundacjom</div>
                    <div className={currentCollection === ngos ? 'organization-type-2 active-type' : "organization-type-2"} id="ngos" onClick={changeCollection}>Organizacjom pozarządowym</div>
                    <div className={currentCollection === locals ? 'organization-type-3 active-type' : "organization-type-3"} id="locals" onClick={changeCollection}>Lokalnym zbiórkom</div>
                </div>
                <p className="organizations__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                {currentRecords && 
                    <OrganizationRecords records={currentRecords}/>}
                {currentCollection && 
                    <Pagination 
                        paginate={paginate} 
                        numOfRecords={currentCollection.length} 
                        recordsPerPage={recordsPerPage}
                        currentPage={currentPage}
                    />}
            </section>
    )
}

export default Organizations;