import {
  topdrawerHeight,
  drawerWidth,
  boxShadow,
  transition
} from "../commons.js";
const cubesize=100;
const cubicStyle=(theme)=>({
	wrapper: {
    position: "absolute",
    width:`${cubesize}vw`,
    height:`${cubesize}vh`

  },
  scene:{
    width:"inherit",
    height:"inherit",
    perspective:"1800px",
  },
  cube:{
    position:'relative',
    width:"inherit",
    height:"inherit",
    transform:`translate3d(0,0,-${cubesize/2}vh)`,
    transition:"all 3.85s cubic-bezier(0.175,0.885,0.320,1.275)",
    transformStyle:"preserve-3d"
  },
  
  cubeface:{
    width:"inherit",
    height:"inherit",
    position:"absolute",
    backgroundColor:"#fff"
  },
  cubefacefront:{
    transform:`translate3d(0, 0,${cubesize/2}vh)`
  },
  cubefaceback:{
    transform:`rotateY(180deg) translate3d(0, 0,${cubesize/2}vh)`,
    backgroundColor:'#fff'
  },
  cubefaceleft:{
    background:'green',
    transform:`rotateY(-90deg) translate3d(0, 0,${cubesize/2}vw)`  
  },
  cubefaceright:{
    background:'magenta',
    transform:`rotateY(90deg) translate3d(0, 0,${cubesize/2}vw)`  
  },
  cubefacetop:{
    transform:`rotateX(90deg) translate3d(0, 0,${cubesize/2}vh)`  
  },
  cubefacebottom:{
    transform:`rotateX(-90deg) translate3d(0, 0,${cubesize/2}vh)`
  }
});

export default cubicStyle;