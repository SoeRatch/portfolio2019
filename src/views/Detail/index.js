import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import detailStyle from "../../assets/jss/views/detailStyle";
import image from "../../assets/img/conversation.svg";
import s from '../../assets/css/views/detail.css';
class Detail extends React.Component{

	render(){
		const {classes}=this.props;
		return(
				<div>
				{image !== undefined ? (
			            <div
			              className={classes.backgroundimg}
			              style={{ backgroundImage: "url(" + image + ")" }}
			            />
		          ) : null}

					<div className={classes.name}>MORE</div>
					<div className={classes.container}>
						
							<h2 className={classes.subhead}>TECHNICAL SKILLS</h2>
						
							
							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>Javascript</span></div>
									<div><span>80%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'80%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>
							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>React</span></div>
									<div><span>80%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'80%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>
							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>HTML / CSS</span></div>
									<div><span>80%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'80%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>

							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>Node</span></div>
									<div><span>70%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'70%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>

							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>Java / Python / C++</span></div>
									<div><span>70%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'70%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>

							<div className={classes.barwrap} style={{width:'60%'}}>
								<div className={classes.skilltype}>
									<div><span>Mongo / Mysql</span></div>
									<div><span>60%</span></div>
								</div>
				   				<div className={classes.progress} style={{height:'20px'}}>
		                          <div className={classes.progressbar} style={{width:'60%',height:'100%'}}>
        		                  </div>
                                </div>
							</div>

							<h2 className={classes.subhead}>Contact Details</h2>
							<div className={classes.contactwrap} style={{width:'80%',justifyContent:'space-around'}}>
								<p className={classes.contactdetails}><b>Email:</b> surajs787@gmail.com</p>
								<p className={classes.contactdetails}><b>Phone number:</b> 7002524460</p>
							</div>
							
							
							
					</div>
						<a href="/SurajSharma.pdf" download>
							<div className={classNames(s.contac,classes.contac)}>
				                        <div className={classNames(s.over,classes.over)}>Download Resume</div>
				             </div>
			             </a>
				</div>
			);
	}


}

export default withStyles(detailStyle)(Detail);