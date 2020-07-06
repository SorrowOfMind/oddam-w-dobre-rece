import React from 'react';
import iconShirt from '../../assets/icon-shirt.png'
import iconRefresh from '../../assets/icon-refresh.png'

const GiveAwaySummary = ({values: {bags, localization, items, helpGroups, street, city, postCode, phone, date, time, note}}) => {
    return (
        <div className="giveaway-summary">
            <h1 className="step__title">Podsumowanie Twojej darowizny</h1>
            <div className="giveaway-summary__details">
                <h2 className="step__subtitle">Oddajesz</h2>
                <div className="giveaway-summary__items">
                    <img src={iconShirt} alt="shirt" className="giveaway-summary__icon"/>
                    <p className="giveaway-summary__content">{bags} worki, {items}, {helpGroups.join(', ')}</p>
                </div>
                <div className="giveaway-summary__items">
                    <img src={iconRefresh} alt="shirt" className="giveaway-summary__icon"/>
                    <p className="giveaway-summary__content">dla lokalizacji: {localization}</p>
                </div>
            </div>
            <div className="giveaway-summary__delivery">
                <div className="giveaway-summary__address">
                    <h2 className="step__subtitle">Adres odbioru:</h2>
                    <ul className="address__details">
                        <li className="details-wrapper"><span className="details__title">Ulica</span><span className="address__content">{street}</span></li>
                        <li className="details-wrapper"><span className="details__title">Miasto</span><span className="address__content">{city}</span></li>
                        <li className="details-wrapper"><span className="details__title">Kod pocztowy</span><span className="address__content">{postCode}</span></li>
                        <li className="details-wrapper"><span className="details__title">Numer telefonu</span><span className="address__content">{phone}</span></li>
                    </ul>
                </div>
                <div className="giveaway-summary__date">
                    <h2 className="step__subtitle">Termin odbioru:</h2>
                    <ul className="delivery__details">
                        <li className="details-wrapper"><span className="details__title">Data</span><span className="address__content">{date}</span></li>
                        <li className="details-wrapper"><span className="details__title">Godzina</span><span className="address__content">{time}</span></li>
                        <li className="details-wrapper"><span className="details__title">Uwagi dla kuriera</span><span className="address__content">{note}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GiveAwaySummary;
