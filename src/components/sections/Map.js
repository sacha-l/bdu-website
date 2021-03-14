import React from "react";
import MapChart from '.././react-simple-maps-master/MeetupMap/MapChart'
const Map = () => {
    return (
        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="10px" data-reveal-delay="800">
            <div className="reveal-from-bottom" data-reveal-delay="1000">
                <MapChart />
            </div>
        </div>
    );
};

export default Map;


