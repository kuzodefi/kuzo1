import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { useMediaQuery } from 'react-responsive'

interface BackgroundProps {
    enableConsent?:boolean
}

const BG: React.FC<BackgroundProps> = (props) => {
	const {enableConsent} = props;
	const opacity = enableConsent? .1 : .3;
  
	const isDesktopOrLaptop = useMediaQuery({
	  query: '(min-device-width: 1224px)'
	})
  
	return (
	  <>
	  {isDesktopOrLaptop?
	  <Particles
		params={{
		  fullScreen: {
			enable: true,
		  },
		  particles: {
			lineLinked:{
			  enable:true,
			  triangles:{
				enable:false
			  }
  
			},
			orbit:{
			  enable:true,
			   opacity:0
  
			},
			life:{
			  count:30,
			  duration:{
				value:500000
			  }
			},
			shape: {
			  type: "none",
			},
			links: {
			  frequency:10000,
			  consent:enableConsent,
			  enable: true,
			  distance:340,
			  color:'random',
			  width:3,
			  opacity,
			  blink:false,
			  warp:true,
  
			  triangles:{
				enable:false,
				frequency:100000,
				opacity:0.1,
			  }
			},
			color: {
			  value: [
				"#ac30ff",
				"#7943ff",
				"#87bbde",
				"#fa7db1",
				"#f57179",
				"#ff8534",
				"#3f48f2",
  
			  ],
			},
			opacity:{
			  value:{
				min:opacity/10,
				max:opacity/10+.01
			  },
			  random:true
			},
			number: {
			  value: 30,
			},
			size: {
			  value: {
				min:3,
				max:16
			  },
			},
			move: {
			  enable: true,
			  speed: {min:.1,max:.4},
			  collisions:true,
			  outMode: "bounce",
			},
		  },
		  interactivity: {
			events: {
			  onhover: {
				enable: true,
				mode: 'repulse',
			  },
  
			},
		  },
		}}
		/>:null
	   }
		</>
	)
  }
 
  export default BG