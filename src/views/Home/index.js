import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import homeStyle from "../../assets/jss/views/homeStyle";
import changebg from "./changebg";
class HomePage extends React.Component{
	componentDidMount(){
		changebg();
	}
	render(){
		const {classes}=this.props;
		return(
				<div className={classes.body} id="aboutbody">
					<div className={classes.header}>
						<h1 className={classes.name}>Suraj Sharma</h1>
						<p className={classes.subdesc}>
							<span>Passionate</span> •
							<span> Full Stack</span> •
							<span> Web Developer</span>
						</p>
						<div className={classes.linkcontainer}>
							<a href="https://www.linkedin.com/in/surajs787" target="=_blank">
								<div className={classes.linkbox}>
									<svg 
										fill="currentColor" 
										preserveAspectRatio="xMidYMid meet" 
										height="100%" 
										width="100%" 
										viewBox="0 0 40 40" 
										style={{verticalAlign:"middle", color:'white'}}>
	                                    <g>
	                                    	<path d="m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path>
	                                    </g>
	                                 </svg>
								</div>
							</a>

							<a href="https://github.com/SoeRatch" target="=_blank">
								<div className={classes.linkbox}>
									<svg 
										fill="currentColor" 
										preserveAspectRatio="xMidYMid meet" 
										height="100%" 
										width="100%" 
										viewBox="0 0 40 40" 
										style={{verticalAlign:"middle", color:'white'}}>
	                                    <g>
	                                    	<path d="m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"></path>
	                                    </g>
	                                 </svg>
								</div>
							</a>
							<a href="https://angel.co/suraj-sharma-14?public_profile=1" target="=_blank">
								<div className={classes.linkbox}>
									<svg 
										fill="currentColor" 
										preserveAspectRatio="xMidYMid meet" 
										height="100%" 
										width="100%" 
										viewBox="0 0 40 40" 
										style={{verticalAlign:"middle", color:'white'}}>
	                                    <g>
	                                    	<path d="m26.8 8.4l-2.6 7.4 2.6 0.4q3.7-10 3.7-11.5 0-1.3-0.8-1.3-1.3 0-2.9 5z m-6.7 15.4l0.7 1.9q0.9-0.9 1.6-1.5l-0.7-0.1-0.9-0.1-0.7-0.2z m-6.5-20q0 2.2 3.5 11.6 0.4-0.2 1.1-0.2 0.4 0 1.7 0.1l-2.7-7.8q-1.7-5-2.8-5-0.4 0-0.6 0.4t-0.2 0.9z m-1.8 16.9q0 0.8 1.2 2.7t2.6 3.4 2.2 1.5q0.3 0 0.6-0.2t0.2-0.6q0-0.6-0.7-2.3-0.3-0.7-0.7-1.6t-1-2-1.4-1.8-1.4-0.7q-0.4 0-1 0.6t-0.6 1z m-3.5 7.5q0 0.9 0.5 2.3 1.4 3.3 4.1 5.1t6.3 1.8q5.1 0 8.6-3.8 3.3-3.8 3.3-9.5 0-1 0-1.5t-0.2-1.4-0.7-1.2q-1.3-1.1-4.7-1.7t-6.1-0.6q-0.8 0-1.1 0.2-0.2 0.1-0.2 0.8 0 0.8 0.4 1.3t1.3 0.9 1.7 0.6 2 0.2 1.9 0.1 1.5 0h0.5q0.6 0 0.9 0.4 0.4 0.5 0.5 1.3-0.7 0.6-2.2 1.2-1.3 0.5-2.1 1-1.4 1-2.4 2.5t-1 3.1q0 0.7 0.4 2t0.4 1.9l0 0.3q-0.1 0.3-0.1 0.3-3.1-0.2-3.3-4.8-0.1 0-0.9 0 0.1 0.2 0.1 0.5 0 1.2-0.9 2t-2.1 0.8q-1.9 0-3.8-1.7t-1.9-3.6q0-0.7 0.8-1.5 1.1 1.5 1.3 1.7 1.7 2.3 3 2.3 0.3 0 0.6-0.2t0.3-0.4q0-0.8-1.9-3.2t-2.6-2.5q-1 0-1.6 1t-0.6 2z m-2.6 0.2q0-2.3 1-3.6t3-2q-0.6-1.7-0.6-2.3 0-1.4 1.4-2.8t2.7-1.3q0.6 0 1.6 0.3-3.7-10.3-3.7-12.7 0-1.7 0.9-2.9t2.7-1.1q2.9 0 7.3 13 0.1 0.4 0.1 0.5 0.2-0.4 0.7-1.8t0.9-2.6 1.3-2.9 1.4-2.7 1.6-2 1.7-0.8q1.6 0 2.5 1.1t0.9 2.8q0 2.4-3.6 12.2 1.4 0.4 2.3 1.1t1.3 1.7 0.6 2.1 0.1 2.5q0 3.3-1 6.2t-3 5-4.7 3.4-6.2 1.2q-2.5 0-5-0.9-3.3-1.3-5.7-4.3t-2.5-6.4z"></path>
	                                    </g>
	                                 </svg>
								</div>
							</a>
						</div>
					</div>

				</div>

			);
	}


}

export default withStyles(homeStyle)(HomePage);