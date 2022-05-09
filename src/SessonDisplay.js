import React from "react";
import './SessonDispaly.css';

const sesonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
      text: 'Burr it is cold',
        iconName: 'snowflake'
    }
}



const getSesone = (lat, month) => {
if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
    return lat > 0 ? 'winter' : 'summer' ;
    }
}



const SessonDisplay = (props) => {

 const season = getSesone(props.lat, new Date().getMonth())
const {text, iconName} = sesonConfig[season]

    return <div className={`season-display ${season}`}>
        < i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}
            </h1>
        <i className={`icon-riht massive ${iconName} icon`} />
        </div>
};

export default SessonDisplay;