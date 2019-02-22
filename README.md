

### File Setup ##
1. In the root directory make a file called .babelrc and write the below content

	{
		  "presets": [ "env","react","stage-0" ],
		  "plugins": ["react-hot-loader/babel","transform-object-rest-spread" ]
}


### Development envt setup ###

1. go to the root directory

2. install all dependencies by running the below command in a terminal(say A).
> **npm install**

3.Build  
> **npm run build**

4.start the project by running the below command in terminal(A).
> **npm run start**

5. Go to your browser and open
> **localhost:3000**