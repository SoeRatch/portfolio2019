const dashboardStyle=(theme)=>({
	body:{
		margin:"0",
		padding:"0",
		backgroundColor:"#2fa19b",
		height:"100vh"
	},
	background:{
    position:"fixed",
    height: "100%",
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
  icondivdown:{
    display:"block",
    position:"fixed",
    bottom:"0px",
    width:"100vw",
    margin:"auto"

  },
  icondivup:{
    display:"block",
    position:"fixed",
    top:"50px",
    width:"100vw",
    height:"20vh",
    margin:"auto"

  }
});

export default dashboardStyle;