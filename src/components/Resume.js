import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillMessage = props.data.skillMessage;

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level, backgroundColor: '#740001' }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
    }

    return (
        <section id="resume">
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillMessage}</p>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
