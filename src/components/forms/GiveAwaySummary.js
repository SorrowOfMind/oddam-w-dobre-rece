import React from 'react'

const GiveAwaySummary = ({values}) => {
    return (
        <div className="giveaway-summary">
            <h1 className="step__title">Podsumowanie Twojej darowizny</h1>
            <div className="giveaway-summary__details">
                <h2>Oddajesz</h2>
            </div>
            <div className="giveaway-summary__delivery">
                <div className="giveaway-summary__address">
                    <h2>Adres odbioru:</h2>
                </div>
                <div className="giveaway-summary__date">
                    <h2>Termin odbioru:</h2>
                </div>
            </div>
        </div>
    )
}

export default GiveAwaySummary;
