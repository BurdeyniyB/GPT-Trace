import style from "@/styles/Team.module.css";
import React from "react";

interface Member {
    image: string;
    name: string;
    position: string;
}

interface PrideNumber {
    value: string;
    nameValue: string;
}

interface TeamProps {
    team: Member[];
    prideList: PrideNumber[];
}

const Team: React.FC<TeamProps> = ({ team, prideList }) => {
    return (
        <div id="our-team" className={style.mainContainer}>
            <div className={style.title}>
                <h2>Our Team</h2>
                <p>Best in AI Machine learning and crypto trading:</p>
            </div>
            <div className={style.teamContainer}>
                {team.map((member, index) => (
                    <div key={index} className={style.teamMember}>
                        <img src={member.image} alt={member.name} />
                        <div className={style.teamMemberOverlay}>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3>We take pride in our numbers</h3>
            <div className={style.prideContainer}>
                {prideList.map((pride, index) => (
                    <div key={index} className={style.prideItem}>
                        <span>{pride.value}</span>
                        <p>{pride.nameValue}</p>
                    </div>
                ))}
            </div>
            <button className={style.getStartedButton}>Get started</button>
        </div>
    );
};

export default Team;
