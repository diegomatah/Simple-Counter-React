import React from "react";



//create your first component
const Home = (props) => {
	return (
		<div className="bigcounter d-flex flex-direction-row justify-content-evenly" style={{"font-size":"90px","backgroundColor":"blue","display":"inline-block","color":"white","height":"120px","lineHeight":"120px"}}>
		<div className="calendar"><i class="fas fa-clock"></i></div>
		<div className="four">{props.digitfour % 10}</div>
		<div className="three">{props.digitthree % 10}</div>
		<div className="two">{props.digittwo % 10}</div>
		<div className="one">{props.digitone % 10}</div>
		</div>
	);
};


export default Home;
