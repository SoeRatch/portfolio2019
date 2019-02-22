const aboutStyle=(theme)=>({
	backgroundimg:{
	    position:"absolute",
	    height: "100vh",
	    width: "100vw",
	    display: "block",
	    top: "0",
	    left: "0",
	    backgroundSize: "cover",
	    backgroundPosition: "center center",
	    backgroundAttachment:"fixed",
	    "&:after": {
	      position: "absolute",
	      width: "100vw",
	      height: "100vh",
	      content: '""',
	      display: "block",
	      background: "#e6ffe6",
	      opacity: "0.9"
	    }
  },
  name:{
    position:"absolute",
    borderTop:'5px solid #000',
    width:'12vw',
    padding:"5px",
    left:"20px",
    textAlign:'center',
    fontFamily:"Montserrat,helvetica neue,Helvetica,Arial,sans-serif",
    fontFeatureSetting:"kern",
    fontWeight:"700",
    letterSpacing:"4.6px",
    zIndex:'2',
    fontSize:'20px',
    fontColor:'#293347',
    textDecorationStyle:'solid',
    verticalAlign:"middle",
    [theme.breakpoints.down("md")]: {
        width:'16vw'

        },
    [theme.breakpoints.down("sm")]: {
        width:'25vw'
        },
    [theme.breakpoints.down("xs")]: {
        width:'40vw',
        fontSize:'15px'
        }  
  },
  container:{
  	position:"absolute",
     width:"90vw",
    height:"80vh",
    padding:"20px",
    margin:"auto",
    marginTop:"10vh",
    left:"0px",
    right:"0px",
    [theme.breakpoints.down("sm")]: {
        top:"5vh",
         width:"100vw",
        height:"70vh",
        padding:"30px",
        margin:"0px"
        }    
  	},
  	subhead:{
  		margin:'2% 0',
	    textAlign: 'center',
	    color: 'darkgreen',
	    fontFamily:'cursive',
	    fontWeight: 'bold'
  	},
  	skilltext:{
  		textAlign: 'center',
  		fontSize: '20px', 
  		fontFamily:'sans-serif',
  		marginBottom:'35px'
  	},
  	barwrap:{
  		margin:'0 auto',
  		marginBottom:'20px'
	},
	skilltype:{
		  display:'flex',
		  justifyContent:'space-between',
		  marginbottom:'5px',
		  fontSize:'20px',
		  fontWeight:'bold'
	},
	progress:{
		  border:'double',
		  borderColor:'grey',
		  background:'#dff9fb',
		  padding:'0'
	},
	progressbar:{
		background:'darkgreen'
	},
  contactwrap:{
    margin:'0 auto',
    display:'flex',
    justifyContent:'space-around'
  },
  contactdetails:{
    fontSize:'15px',
    [theme.breakpoints.down("xs")]: {
        fontSize:'10px'
        }  
  },
  contac:{
    position:'absolute',
    width:'120px',
    height:'45px',
    top:'0',
    right:'10px',
    background:'none',
    border:'3px solid #000',
    borderRadius:'5px',
    color:'#fff',
    fontSize:'1.2em',
    fontWeight:'700',
    textTransform:'uppercase',
    overflow:'hidden',
    "&:hover": {
      cursor:'pointer'
    },
    "&:after": {
        position:'absolute',
        height:'100%',
        background:'#fff',
        width:'0'
      },
      [theme.breakpoints.down("sm")]: {
        right:'50px',
        width:'100px',
        height:'40px',
        fontSize:'0.8em'
        }

  },
  over:{
    position:'absolute',
    fontFamily:'Hammersmith One,sans-serif',
    color:'#000',
    zIndex:'999',
    width:'100%'
  }
});

export default aboutStyle;