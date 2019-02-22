import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import aboutStyle from "../../assets/jss/views/aboutStyle";
import image from "../../assets/img/programming.svg";

class About extends React.Component{

	render(){
		const {classes}=this.props;
		return(
				<div style={{transform:"rotateZ(180deg) translate3d(0,-100vh,-100vh"}}>
				{image !== undefined ? (
			            <div
			              className={classes.backgroundimg}
			              style={{ backgroundImage: "url(" + image + ")" }}
			            />
		          ) : null}

					<div className={classes.name}>ABOUT ME</div>
					<div className={classes.intro}>
						<h1 className={classes.introhead}>Hey, I'm Suraj.</h1>
						<p className={classes.introdesc}>
							A Frontend developer from Bangalore India.
							<br/>I am an inspired soul, versatile in nature and can adapt to any environment. I specialize in javascript fullstack technologies
							like <span style={{color:'#3bafda'}}>
									<b>React, Node, Express </b>
								 </span>
									 and 
								<span style={{color:'#3bafda'}}>
									<b> Mongo</b>
								 </span> and currently sharpening my
								  
								  <span style={{color:'#3bafda'}}>
									<b> javascript </b>
								 </span>
								  and 
								  <span style={{color:'#3bafda'}}>
									<b> frontend skills</b>
								 </span>.
 							<br/>
							<br/>My passion is creating, programming and thinking innovatively in each and every piece of work and I find happiness in being a better me today than the me yesterday.
							<br/>I am also a strong believer of the fact that success lies in the details and would like to combine hard technical knowledge with
							softer business, marketing and design skills.
						</p>
						<p className={classes.introdesc}>
							<br/>
							<br/>
								Have a project you'd like to discuss or are you looking for hiring?
								Here is my e-mail id - surajs787@gmail.com 
						</p>
					</div>

					
				</div>
			);
	}


}

export default withStyles(aboutStyle)(About);