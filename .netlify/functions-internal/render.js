const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["articles/1_EndFirstPhase/Opens in new window (1).pdf","articles/1_EndFirstPhase/Opens in new window.pdf","articles/1_EndFirstPhase/evolution.png","articles/1_EndFirstPhase/thumbnail.jpg","favicon.ico","logo.png","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		entry: {"file":"start-2c383f44.js","js":["start-2c383f44.js","chunks/index-4c4498cd.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
