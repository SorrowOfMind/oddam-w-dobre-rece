import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import iconShirt from '../../assets/icon-shirt.png'
import iconBag from '../../assets/icon-bag.png'
import iconGlass from '../../assets/icon-glass.png'
import iconRefresh from '../../assets/icon-refresh.png'

const Steps = () => {
    const auth = useSelector(state => state.firebase.auth);
    const path = auth.uid ? '/oddaj-rzeczy' : '/login';
    return (
        <section className="steps" name="steps">
            <h2 className="steps__title title">Wystarczą 4 proste kroki</h2>
            <div className="steps-wrapper">
                <div className="step-wrapper">
                    <img src={iconShirt} alt="shirt" className="step__icon"/>
                    <p className="step__instr">Wybierz rzeczy</p>
                    <p className="step__dscr">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step-wrapper">
                    <img src={iconBag} alt="shirt" className="step__icon"/>
                    <p className="step__instr">Spakuj je</p>
                    <p className="step__dscr">skorzystaj z worków na śmieci</p>
                </div>
                <div className="step-wrapper">
                    <img src={iconGlass} alt="shirt" className="step__icon"/>
                    <p className="step__instr">Zdecyduj komu chcesz pomóc</p>
                    <p className="step__dscr">wybierz zaufane miejsce</p>
                </div>
                <div className="step-wrapper">
                    <img src={iconRefresh} alt="shirt" className="step__icon"/>
                    <p className="step__instr">Zamów kuriera</p>
                    <p className="step__dscr">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to={path}><button className="btn steps__btn">ODDAJ RZECZY</button></Link>
        </section>
    )
}

export default Steps
