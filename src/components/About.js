import React from 'react';

export default function About(props) {

    if (props.data) {
        var name = props.data.name;
        var profilePic = 'images/' + props.data.image;
        var bio = props.data.bio;
        var city = props.data.address.city;
        var email = props.data.email;
        var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilePic} alt="Abdul Ahmad's Profile" />
                </div>
                <div className="nine columns main-col">
                    <h2>About</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span>
                                <br />
                                <span>{email}</span>
                                <br />
                                <span>{city}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-eye"></i>View Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

