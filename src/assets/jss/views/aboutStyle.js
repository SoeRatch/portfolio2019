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
	      opacity: "0.7"
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
  intro:{
    position:"absolute",
    backgroundColor:"rgba(0,0,0,0.5)",
     width:"90vw",
    height:"80vh",
    padding:"20px",
    margin:"auto",
    marginTop:"10vh",
    left:"0px",
    right:"0px",
    [theme.breakpoints.down("sm")]: {
        marginTop:"5vh",
         width:"100vw",
        height:"90vh",
        padding:"10px"
        }    
    },
  introhead:{
    fontFamily:"Rubik,Arial,sans-serif",
    fontWeight:"400",
    letterSpacing:"2px",
    zIndex:'2',
    fontSize:'3rem',
    color:'#fff',
    textDecorationStyle:'solid',
    [theme.breakpoints.down("sm")]: {
        fontSize:'2rem',
        }    

  },
  introdesc:{
    fontFamily:"-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight:"400",
    letterSpacing:"2px",
    zIndex:'2',
    fontSize:'1.5rem',
    color:'#fff',
    textDecorationStyle:'solid',
    [theme.breakpoints.down("md")]: {
        fontSize:'1.4rem',
        },
    [theme.breakpoints.down("sm")]: {
        fontSize:'1.2rem',
        },
    [theme.breakpoints.down("xs")]: {
        fontSize:'1rem',
        }     

  }

});

export default aboutStyle;