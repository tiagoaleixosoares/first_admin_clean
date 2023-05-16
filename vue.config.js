module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sakai-vue' : '/',
	devServer: {
		port: 80,
		host: '0.0.0.0'
	  }
}