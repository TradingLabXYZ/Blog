const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["articles/1_EndFirstPhase/Opens in new window (1).pdf","articles/1_EndFirstPhase/Opens in new window.pdf","articles/1_EndFirstPhase/evolution.png","articles/1_EndFirstPhase/thumbnail.jpg","articles/2_FirstCompetition/btcmm.png","articles/3_CommunityPresentation/tradinglab.png","favicon.ico","logo.png","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		entry: {"file":"start-09cde379.js","js":["start-09cde379.js","chunks/index-5abacfa1.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				id: "crypto_community_presentation",
				pattern: /^\/crypto_community_presentation\/?$/,
				names: [],
				types: [],
				path: "/crypto_community_presentation",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "crypto_competition_announcement",
				pattern: /^\/crypto_competition_announcement\/?$/,
				names: [],
				types: [],
				path: "/crypto_competition_announcement",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
