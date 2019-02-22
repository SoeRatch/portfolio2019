import styled,{css,keyframes} from 'styled-components';

const load = keyframes`
		    0%   {
    			width: 0px;
    			margin-left:-50px;
    		}
    		25%  {
    			width: 50px;
    			margin-left:-50px;
    		}
    		50% {
		  		width:100px;
		  		margin-left:-50px;
    		}
    		75% {
    			margin-left:0px;
		  		width:50px;
    		}
		  	100% {
    			margin-left:50px;
		  		width:0px;
		  	}
	`;
export const Loading = styled.div`
	position:absolute;
	background-color:#fff;
	opacity:0.7;
	width:0px;
    height:5px;
    position:absolute;
    left:50%;
    top:50%;
    margin:-2.5px 0 0 -50px;
	
	 -webkit-animation: ${load} 1s infinite;  
	  animation: ${load} 1s infinite;
	  animation-timing-function:linear;
	`;
