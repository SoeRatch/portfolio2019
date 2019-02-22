import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Loading,Rootdiv} from '../../assets/styledcomponent/components/Cubic';
import cubicStyle from "../../assets/jss/components/cubicStyle";
import classNames from 'classnames';
import Home from '../../views/Home';
import About from '../../views/About';
import Work from '../../views/Work';
import Detail from '../../views/Detail';

class Cubic extends React.Component{
	

	render(){
		const {classes}=this.props;
			return(
				<div className={classes.wrapper}>
					<div className={classes.scene}>
						<div className={classes.cube} id="cube">
						    <div className={classNames(classes.cubeface,classes.cubefacefront)}>
						    	<Home/>
						    </div>
						    <div className={classNames(classes.cubeface,classes.cubefaceback)}>
						    	<About/>
						    </div>
						    <div className={classNames(classes.cubeface,classes.cubefacetop)}>
						    	<Detail/>
						    </div>
						    <div className={classNames(classes.cubeface,classes.cubefacebottom)}>
						    	<Work/>
						    </div>
						 </div>
					</div>
				</div>
				);
		
	}
}



export default withStyles(cubicStyle)(Cubic);