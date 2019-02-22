import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Loading from "../../components/Loading";
import dashboardStyle from "../../assets/jss/layouts/dashboardStyle";
import Cubic from "../../components/Cubic";
import classNames from 'classnames';
import s from '../../assets/css/layouts/dashboard.css';
import changebg from "../../views/Home/changebg";

class Dashboard extends React.Component{
	state={
			initialloading:true,
			deg:0
		}

		componentDidMount(){
			setTimeout(()=>{
			this.setState({
					initialloading:false
				});
			},2000);

			document.addEventListener('keydown',this.handleKeyPress);
			changebg();

		}

		  handleKeyPress=()=>{
		  	switch (window.event.keyCode) {
		        case 37:
		         console.log("left"); 
		         break;
		        case 38:
		         this.handlecssup(window.event);
		         break;
		        case 39:
				 console.log("right");
		         break;
		        case 40:
				  	this.handlecssdown(window.event);
		         	break;
		        
		    }
		  }


		handlecssdown=e=>{
			e.preventDefault();
			this.setState({
				deg:this.state.deg+90
			},function(){
				let cube=document.getElementById("cube");
				cube.style.transform='translate3d(0,0,-50vh) rotateX('+this.state.deg+'deg)';
				cube.style.transition="all 1s cubic-bezier(0.175,0.885,0.320,1.275)";

			});
		}

		handlecssup=e=>{
			e.preventDefault();
			this.setState({
				deg:this.state.deg-90
			},function(){
				let cube=document.getElementById("cube");
				cube.style.transform='translate3d(0,0,-50vh) rotateX('+this.state.deg+'deg)';
				cube.style.transition="all 1s cubic-bezier(0.175,0.885,0.320,1.275)";

			});
		}

	render(){
			const {classes,...rest}=this.props;
			const {initialloading,deg}=this.state;
			console.log(deg);
			return(
				<div className={classes.body}>
						{initialloading && <Loading/>}
						{!initialloading &&
							<div className={classes.root}>
								
								<Cubic/>
								{!((this.state.deg%360)==0)&&<div className={classes.icondivup} onClick={this.handlecssup}>
								  		<div className={s.arrowup}>
										                <span style={{borderTop:'5px solid #FFF',
										                			  borderLeft: '5px solid #FFF'}}>
										                </span>
										                <span style={{borderTop:'5px solid #06A8FF',
										                			  borderLeft: '5px solid #06A8FF'}}>
										                </span>
										                <span style={{borderTop:'5px solid #000',
										                			  borderLeft: '5px solid #000'}}>
										                </span>
										</div>
								</div>
								}

								<div className={classes.icondivdown} onClick={this.handlecssdown}>
								  		<div className={s.arrowdown}>
										                <span style={{borderBottom:'5px solid #FFF',
										                			  borderRight: '5px solid #FFF'}}>
										                </span>
										                <span style={{borderBottom:'5px solid #06A8FF',
										                			  borderRight: '5px solid #06A8FF'}}>
										                </span>
										                <span style={{borderBottom:'5px solid #000',
										                			  borderRight: '5px solid #000'}}>
										                </span>
										  
										</div>
								</div>
								
							</div>
						}

						<div id="aboutbody" 
							 style={{
								position:"fixed",
								height:"20px",
								width:"150px",
								color:"#000",
								bottom:"0px",
								right:"0px",
								fontFamily:"Montserrat,helvetica neue,Helvetica,Arial,sans-serif"
							}}>
							Hit down or up arrow
						</div>
				</div>
				);
	}
}



export default withStyles(dashboardStyle)(Dashboard);