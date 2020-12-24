import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const newsArticle = (heading, subtitle) => ( 
  <div className="widgets__article">
    <div className="widgets__articleLeft">
        <FiberManualRecordIcon />

    </div>
    <div className="widgets__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div> 
)

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgtes__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      { newsArticle('Covid 10 second wave', 'top news')}
      { newsArticle('Covid Vaccinne', 'Trending')}
      { newsArticle('Mike Tyson Bite again', 'Boxing')}
      { newsArticle('React bootcamp', 'Programming')}
      { newsArticle('Success summit morrow', 'Success')}
      { newsArticle('New Amazulu Coach', 'DSTVpsl')}
      { newsArticle('ANC in bit to capture the country', 'GUPTAS')} 
    </div>
  );
}

export default Widgets;
