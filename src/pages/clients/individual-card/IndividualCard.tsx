import React from 'react';
import './IndividualCard.css';
import logo from '../../../assets/cüneyt-logo.png';
import { Common } from '../../../common/Common';

interface IndividualCardProps {
    name: string,
    phoneNumber: string,
    date?: Date,
}

export default function IndividualCard(props: IndividualCardProps) {
    return (
        <div className="individual-card">
            <img src={logo} alt="Cüneyt Logo" />
            <div className="info">
                <div className="info-row">
                    <label>Adı:</label>
                    <p>{props.name}</p>
                </div>
                <div className="info-row">
                    <label>Telefonu:</label>
                    <p>{props.phoneNumber}</p>
                </div>
            </div>
            <div className="date">
                {Common.tarihDegistir(props.date)}
            </div>
        </div>
    );
}
