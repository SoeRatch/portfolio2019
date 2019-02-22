import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import workStyle from "../../assets/jss/views/workStyle";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from "../../assets/img/Pensheel.png";
import restofants from "../../assets/img/Restofants.png";
import stockcharts from "../../assets/img/stockcharts.png";
import ifloopz from "../../assets/img/ifloopz.png";
import jobaaks from "../../assets/img/jobaaks.png";
import classNames from 'classnames';
import s from '../../assets/css/views/work.css';

class Work extends React.Component{
	state={
			slidecounter:1
		}


		
		slideleft=e=>{
			e.preventDefault();
			if(this.state.slidecounter==5)
					return;

					this.setState({
						slidecounter:this.state.slidecounter+1
					},function(){
						let cube;
						switch(this.state.slidecounter){
							case 2:
								cube=document.getElementById("cubeb");
								break;
							case 3:
								cube=document.getElementById("cubec");
								break;
							case 4:
								cube=document.getElementById("cubed");
								break;
							case 5:
								cube=document.getElementById("cubee");
								break;
						}
						
						cube.style.transform='rotateY(0deg)';
						cube.style.transition="all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)";

					});
		}

		slideright=e=>{
			e.preventDefault();
			if(this.state.slidecounter==1)
					return;
			this.setState({
				slidecounter:this.state.slidecounter-1
			},function(){
				let cube;
				switch(this.state.slidecounter){
					case 1:
						cube=document.getElementById("cubeb");
						break;
					case 2:
						cube=document.getElementById("cubec");
						break;
					case 3:
						cube=document.getElementById("cubed");
						break;
					case 4:
						cube=document.getElementById("cubee");
						break;
				}
				
				cube.style.transform='rotateY(90deg) translate3d(-38vw, 0,38vw)';
				cube.style.transition="all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)";

			});
		}
	render(){
		const {classes}=this.props;
		const {slidecounter}=this.state;
		return(
				<div className={classes.body}>
					<div className={classes.root}>

					  <div className={classes.header}><h2 className={classes.insideheader}>Projects</h2></div>
				      <div  style={{
					      	transformStyle:"preserve-3d"
					      }}>
							  <div className={classNames(classes.cardcommon)}>
							  					<Grid  container>
							  						<Grid item xs={12} sm={4}>
											          <div className={classes.projectBox}>
											          	<h4 className={classes.insideheader}>PENSHEEL<br/>A blogging platform</h4>
											          	<a style={{fontSize:'20px'}} href="https://www.pensheel.com" target="=_blank">link</a>											          									          	
											          </div>
											         </Grid>
											         <Grid xs={12} sm={8}>
											         <div className={classes.imageBox}>
											          	{image !== undefined ? (
												            <div
												              className={classes.backgroundimg}
												              style={{ backgroundImage: "url(" + image + ")" }}
												            />
											          ) : null}
											          	<div className={classes.subdesc} style={{zIndex:'0'}}>
											          		<p className={classes.subdescpara}>Pensheel is a real-time project that enables authorized user to write articles/blogs with a rich-text editor built on top of draftjs.</p>
											          		<p className={classes.subdescstack}><b>Stack:   </b>React, Redux, Draftjs, Node, Express, Mongo, Docker, Heroku</p>
											          	</div>
												            
											          </div>
											          </Grid>
										        </Grid>
								</div>

								<div id="cubeb" className={classNames(classes.cardcommon,classes.cardb)}>
							  					<Grid  container>
							  						<Grid xs={12} sm={4}>
											          <div className={classes.projectBox}>
											          	<h4 className={classes.insideheader}>RESTOFANTS- <br/>Restaurant searching application</h4>
											          	<a style={{fontSize:'20px'}} href="https://github.com/SoeRatch/FindRestaurants" target="=_blank">link</a>
											          </div>
											         </Grid>
											         <Grid xs={12} sm={8}>
											         <div className={classes.imageBox}>
											          	{restofants !== undefined ? (
												            <div
												              className={classes.backgroundimg}
												              style={{ backgroundImage: "url(" + restofants + ")" }}
												            />
											          	) : null}
												          <div className={classes.subdesc} style={{zIndex:'1'}}>
											          		<p className={classes.subdescpara}>Restofants is a demo frontend project with minimal backend . It lets user search through available cuisines and restaurants available .</p>
											          		<p className={classes.subdescstack}><b>Stack:   </b>React, Node, Express, Mongo,Material-UI</p>
											          	
												          </div>
											          </div>
											          </Grid>
										        </Grid>
								</div>

								<div id="cubec" className={classNames(classes.cardcommon,classes.cardb)}>
							  					<Grid  container>
							  						<Grid xs={12} sm={4}>
											          <div className={classes.projectBox}>
											          	<h4 className={classes.insideheader}>STOCK CHARTS<br/>historical stock data application</h4>
											          	<a style={{fontSize:'20px'}} href="https://github.com/SoeRatch/StockCharts" target="=_blank">link</a>
											          </div>
											         </Grid>
											         <Grid xs={12} sm={8}>
											         <div className={classes.imageBox}>
											          	{stockcharts !== undefined ? (
												            <div
												              className={classes.backgroundimg}
												              style={{ backgroundImage: "url(" + stockcharts + ")" }}
												            />
											          ) : null}
											          	<div className={classes.subdesc} style={{zIndex:'2'}}>
											          		<p className={classes.subdescpara}>Stock Chart is a fullstack demo project which lets user to view historical stock data for various symbols.</p>
											          		<p className={classes.subdescstack}><b>Stack:   </b>React, Node, Express, Mongo, react-stockcharts</p>
											          	</div>
											          
											          </div>
											          </Grid>
										        </Grid>
								</div>

								<div id="cubed" className={classNames(classes.cardcommon,classes.cardb)}>
							  					<Grid  container>
							  						<Grid xs={12} sm={4}>
											          <div className={classes.projectBox}>
											          	<h4 className={classes.insideheader}>IF-LOOPZ <br/>A tutorial platform</h4>
											          	<a style={{fontSize:'20px'}} href="https://soeratch.github.io/if_loopz" target="=_blank">link</a>

											          	
											          </div>
											         </Grid>
											         <Grid xs={12} sm={8}>
											         <div className={classes.imageBox}>
											          	{ifloopz !== undefined ? (
												            <div
												              className={classes.backgroundimg}
												              style={{ backgroundImage: "url(" + ifloopz + ")" }}
												            />
											          ) : null}
											          	<div className={classes.subdesc} style={{zIndex:'3'}}>
											          		<div className={classes.subdescpara} style={{paddingTop:'2px'}}>IF-LOOPZ is a realtime frontend project.It is a single-page web application
											          		 which lets programmers to quickly get started with basics of programming languages like Java,Python </div>
											          		<div className={classes.subdescstack}><br/><b>Stack:   </b>React</div>
											          	</div>
											          </div>
											          </Grid>
										        </Grid>
								</div>

								<div id="cubee" className={classNames(classes.cardcommon,classes.cardb)}>
							  					<Grid  container>
							  						<Grid xs={12} sm={4}>
											          <div className={classes.projectBox}>
											          	<h4 className={classes.insideheader}>Jobaaks<br/>A job hunting application</h4>
											          	<a style={{fontSize:'20px'}} href="https://github.com/SoeRatch/jobaaks" target="=_blank">link</a>
											          </div>
											         </Grid>
											         <Grid xs={12} sm={8}>
											         <div className={classes.imageBox}>
											          	{jobaaks !== undefined ? (
												            <div
												              className={classes.backgroundimg}
												              style={{ backgroundImage: "url(" + jobaaks + ")" }}
												            />
											          ) : null}
											          	<div className={classes.subdesc} style={{zIndex:'4'}}>
											          		<p className={classes.subdescpara}>Jobaaks is a frontend demo project listing all available jobs and its details,a profile page and an
											          		elegant dashboard where users can view their job application status</p>
											          		<p className={classes.subdescstack}><b>Stack:   </b>React, Material-UI</p>
											          	</div>
											          </div>
											          </Grid>
										        </Grid>
								</div>
					  </div>


					</div>

					{(slidecounter<5) &&
						<div className={s.slideleft} onClick={this.slideleft}>
		                  <div className={s.centerconleft}>
		                     <div className={s.round}><span className={s.sp1}></span><span className={s.sp2}></span><span className={s.sp3}></span><span className={s.sp4}></span></div>
		                  </div>
		               </div>
	           		}	

	           		{(slidecounter>1) &&
			               <div className={s.slideright} onClick={this.slideright}>
			                  <div className={s.centerconright}>
			                     <div className={s.round}><span className={s.sp1}></span><span className={s.sp2}></span><span className={s.sp3}></span><span className={s.sp4}></span></div>
			                  </div>
			               </div>
			        }
					
				</div>

			);
	}


}

export default withStyles(workStyle)(Work);

						


				       