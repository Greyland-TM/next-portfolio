import React from 'react';
import ProfilePic from '../../../media/ProfilePic.jpg';

export default function Resume () {
    return(
        <>
        <div className="Resume">

            <div className="Resume__top">
                <img src={ProfilePic} alt='HeadShot' className="Resume__top--headshot"/>
                <p className='Resume__top--head'>
                    Passionate, self-taught, and driven software developer of over 3 years, with a primary focus of 
                    working in front end web development and design. Experienced in the process of building an 
                    application from start to finish, and creating engaging content for the user.
                </p>
            </div>

            <div className="Resume__left">
                
            </div>

            <div className="Resume__right">
                
            </div>

            
            

        </div>
        </>
    );
}