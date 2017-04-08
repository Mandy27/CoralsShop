import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import MainBackground from "../images/Main_background.jpg";
import MainBackground1 from "../images/Main_background_1.jpg";
import MainBackground2 from "../images/Main_background_2.jpg";

class CustomCarousel extends Component {
	render(){
		return (
			<Carousel interval={3000}>
		        <Carousel.Item>
		        	<img width={1280} height={400} alt="1280x400" src={MainBackground2}/>
		        </Carousel.Item>
		        <Carousel.Item>
		          	<img width={1280} height={400} alt="1280x400" src={MainBackground1}/>
		        </Carousel.Item>
		        <Carousel.Item>
		          	<img width={1280} height={400} alt="1280x400" src={MainBackground}/>
		        </Carousel.Item>
	    	</Carousel>	
		);
	}
}

export default CustomCarousel;