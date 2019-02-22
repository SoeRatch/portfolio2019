const workStyle=(theme)=>({
	body:{
		backgroundColor:'#fafdf7',
		width:'100vw',
		margin:0,
		padding:0
	},
	root: {
	    flexGrow: 1,
	    width:"80vw",
	    top:"5vh",
	    margin:"0 auto",
	    marginTop:"10vh",
	    borderTop: '2px solid #000',
	    padding:"2vw",
	    paddingTop:'13vh',
	    [theme.breakpoints.down("sm")]: {
	    	width:"100vw",
	        top:"5vh",
	        margin:"0px"
	       }    
	  },
	  
		header:{
			position:'absolute',
			marginTop:'-80px'
			
		},
		insideheader:{
			fontWeight:'900',
			fontFamily:'Playfair Display,serif',
    		fontStyle:'italic',
    		fontSize:'2.3rem',
    		letterSpacing:'0.05ch',
    		[theme.breakpoints.down("sm")]: {
		    	fontSize:'1.3rem'
		       }
		
		},
		projectBox:{
			border: '17px solid #000',
			height:'300px',
			padding:'10px',
			margin:'10px',
			backgroundColor:'#fff',
			[theme.breakpoints.down("sm")]: {
		    	border: '8px solid #000',
				height:'150px',
				padding:'5px',
				margin:'5px',
		       }
		},
		imageBox:{
			position:'relative',
			height:'300px',
			margin:'10px',
			border: '17px solid #000',
			padding:'0px'
		},
		subdesc:{
			position:'absolute',
			bottom:'0px',
			height:'100px',
			width:'100%',
			backgroundColor:"#2fa19b",
			transition:'all 0.4s',
			"&:hover": {
		      opacity: "0"
		    }
		},
		subdescpara:{
			fontSize:'15px',
			color:'#fff',
			fontFamily:'open-sans',
			paddingLeft:'5px',
			[theme.breakpoints.down("sm")]: {
		    	fontSize:'12px'
		       },
			[theme.breakpoints.down("xs")]: {
		    	fontSize:'12px'
		       }
		},
		subdescstack:{
			fontSize:'18px',
			color:'#fff',
			fontFamily:'open-sans',
			paddingLeft:'5px',
			[theme.breakpoints.down("md")]: {
		    	fontSize:'17px'
		       },
			[theme.breakpoints.down("sm")]: {
		    	fontSize:'14px'
		       }
		},
		backgroundimg:{
			position:'absolute',
		    height: "100%",
		    width: "100%",
		    display: "block",
		    top: "0",
		    left: "0",
		    backgroundSize: "cover",
		    backgroundPosition: "center center"
		  },

		cardcommon:{
			position:'absolute',
			width:'76vw',
			[theme.breakpoints.down("sm")]: {
	    	width:"96vw"
	       }    
		},
		cardb:{
			transform:`rotateY(90deg) translate3d(-38vw, 0,38vw)`,
		}
});

export default workStyle;