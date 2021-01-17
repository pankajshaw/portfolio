import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/pankajshaw'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/pankaj-shaw-se/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://join.skype.com/ULjyZebvhkWB'}
                type={'skype'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
