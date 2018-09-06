const projectConfig:IProjectSettings = {
    externals: {
		'externals/CSRFToken': 'csrftoken', //now import xyz from 'myExternal' should work
		'externals/RemoteRoutes': 'RemoteRoutes',
		'externals/SiteConfig': 'siteConfig',
		'jquery':'jQuery'
	}
};