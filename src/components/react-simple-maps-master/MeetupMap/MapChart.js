import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";
import classNames from 'classnames';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const innerClasses = classNames(
    'hero-inner section-inner'
  );

const MapChart = () => {
  return (
    
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-4.0, -8.0, 0],
        scale: 140
      }}
    >
      <Geographies
        geography={geoUrl}
        fill="#3366cc"
        stroke="#f9f9f9"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* TODO: Do Annotations better */}
      {/* <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        
        <text x="4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Toronto, Canada"}
        </text>
        
      </Annotation>

      <Annotation
        subject={[-1.243, 20]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"London, Canada"}
        </text>        
      </Annotation>

      <Annotation
        subject={[18.0, -80.0]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Dehli, India"}
        </text>        
      </Annotation>

      <Annotation
        subject={[-40.0, -10.0]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Buenos Aires"}
        </text>        
      </Annotation>

      <Annotation
        subject={[-68, -900.0]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Singapore"}
        </text>        
      </Annotation>

      <Annotation
        subject={[800.0, 200.0]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFF",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#FFFF">
          {"Tokyo, Japan"}
        </text>        
      </Annotation> */}

    </ComposableMap>
  );
};

export default MapChart;
