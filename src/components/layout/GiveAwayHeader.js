import React from 'react'

const GiveAwayHeader = () => {
    return (
        <header className="header giveaway-header">
            <div className="clearfix container">
                <div className="header__content giveaway-header__content">
                    <div className="giveaway__titles">
                        <h1 className="header__title giveaway__title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                        <h2 className="header__subtitle giveaway__subtitle">Wystarczą 4 proste kroki:</h2>
                    </div>
                        <ul className="steps-list">
                            <li className="step-item-1">Wybierz rzeczy</li>
                            <li className="step-item-2">Spakuj je w worki</li>
                            <li className="step-item-3">Wybierz fundację</li>
                            <li className="step-item-4">Zamów kuriera</li>
                        </ul>
                </div>
            </div>
        </header>
    )
}

export default GiveAwayHeader;
