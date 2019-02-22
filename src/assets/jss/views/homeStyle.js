const homeStyle=(theme)=>({
	body:{
    backgroundColor:'#fff',
    position:'relative',
    width:'100vw',
    height:'100vh',
    margin:0,
    padding:0
  },
  header:{
    width:'50%',
    height: '50%',
    margin:'auto',
    position:'absolute',
    textAlign:'center',
    left:'0px',
    right:'0px',
    top:'0px',
    bottom:'0px'
  },
  name:{
    padding:'20px',
    fontSize:'4.35em',
    fontWeight:"900",
    letterSpacing:"-0.035em",
    lineHeight:"1em",
    color:'#fff',
    textShadow:'rgba(2,2,2,0.1) 0em 0.05em 0.75em',
    fontFamily:'Yantramanav,sans-serif'
  },
  subdesc:{

    fontSize:'1.35em',
    letterSpacing:"-0.035em",
    lineHeight:"1em",
    color:'#fff',
    textShadow:'rgba(2,2,2,0.1) 0em 0.05em 0.75em',
    fontFamily:'Yantramanav,sans-serif'
  },
  linkcontainer:{
          width:'60%',
          margin:'0 auto',
          marginTop:'100px',
          height:'70px',
          display:'flex',
          justifyContent:'space-around',
          marginbottom:'5px'
  },
  linkbox:{
          width:'70px',
          height:'100%',
          border:'2px solid #fff',
          borderRadius:'30%',
          padding:'15px',
          "&:hover,&:focus": {
              backgroundColor:"rgba(0,0,0,0.2)",
              boxShadow:
                "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
            }
  }
});

export default homeStyle;