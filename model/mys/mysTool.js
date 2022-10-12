const APP_VERSION = "2.38.1";
const mhyVersion = "2.11.1";
const salt = "PVeGWIZACpxXZ1ibMVJPi9inCY4Nd4y2";
const salt2 = "t0qEgfub6cvueAPgR5m9aQWWVciEer7v";
const saltWeb = "yUZ3s0Sna1IrSNfk29Vo6vRapdOyqyhB";
const oldsalt = "z8DRIUjNDT7IT5IZXvrUAxyupA1peND9";
const osSaltWeb = ''; //os 浏览帖子需要用到的salt
const web_api = `https://api-takumi.mihoyo.com`
const os_web_api = `https://api-os-takumi.mihoyo.com`
const os_hk4_api = `https://hk4e-api-os.hoyoverse.com`;
const hk4_api = `https://hk4e-api.mihoyo.com`;
const bbs_api = `https://bbs-api.mihoyo.com`;
const cloud_api = `https://api-cloudgame.mihoyo.com`
const boards = {
	honkai3rd: {
		forumid: 1,
		key: 'honkai3rd',
		biz: 'bh3_cn',
		actid: 'e202207181446311',
		name: '崩坏3',
		url: "https://bbs.mihoyo.com/bh3/",
		signUrl(data, type, api) {
			let dataUrl = {}
			switch (type) {
				case "isSign":
					dataUrl = {
						url: `${api}/event/luna/info`,
						query: `lang=zh-cn&region=${data.region}&act_id=${this.actid}&uid=${data.game_uid}`
					}
					break;
				case "sign":
					dataUrl = {
						url: `${api}/event/luna/sign`,
						body: {
							lang:'zh-cn',
							region: data.region,
							act_id: this.actid,
							uid: data.game_uid
						}
					}
					break;
				case "home":
					dataUrl = {
						url: `${api}/event/luna/home`,
						query: `lang=zh-cn&act_id=${this.actid}`
					}
					break;
			}
			dataUrl['types'] = 'sign'
			return dataUrl
		},
		getReferer() {
			return `https://webstatic.mihoyo.com/bh3/event/euthenia/index.html?bbs_presentation_style=fullscreen&bbs_game_role_required=${this.biz}&bbs_auth_required=true&act_id=${this.actid}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`
		}
	},
	genShin: {
		forumid: 26,
		key: 'genshin',
		biz: 'hk4e_cn',
		actid: 'e202009291139501',
		name: '原神',
		url: "https://bbs.mihoyo.com/ys/",
		signUrl(data, type, api) {
			let dataUrl = {}
			switch (type) {
				case "isSign":
					dataUrl = {
						url: `${api}/event/bbs_sign_reward/info`,
						query: `region=${data.region}&act_id=${this.actid}&uid=${data.game_uid}`
					}
					break;
				case "sign":
					dataUrl = {
						url: `${api}/event/bbs_sign_reward/sign`,
						body: {
							region: data.region,
							act_id: this.actid,
							uid: data.game_uid
						}
					}
					break;
				case "home":
					dataUrl = {
						url: `${api}/event/bbs_sign_reward/home`,
						query: `act_id=${this.actid}`
					}
					break;
			}
			dataUrl['types'] = 'sign'
			return dataUrl
		},
		getReferer() {
			return `https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=${this.actid}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`
		}
	},
	honkai2: {
		forumid: 30,
		biz: 'bh2_cn',
		actid: 'e202203291431091',
		name: '崩坏2',
		url: "https://bbs.mihoyo.com/bh2/",
		signUrl(data, type, api) {
			let dataUrl = {}
			switch (type) {
				case "isSign":
					dataUrl = {
						url: `${api}/event/luna/info`,
						query: `lang=zh-cn&region=${data.region}&act_id=${this.actid}&uid=${data.game_uid}`
					}
					break;
				case "sign":
					dataUrl = {
						url: `${api}/event/luna/sign`,
						body: {
							lang:'zh-cn',
							region: data.region,
							act_id: this.actid,
							uid: data.game_uid
						}
					}
					break;
				case "home":
					dataUrl = {
						url: `${api}/event/luna/home`,
						query: `lang=zh-cn&act_id=${this.actid}`
					}
					break;
			}
			dataUrl['types'] = 'sign'
			return dataUrl
		},
		getReferer() {
			return `https://webstatic.mihoyo.com/bbs/event/signin/bh2/index.html?bbs_auth_required=true&act_id=${this.actid}&bbs_presentation_style=fullscreen&utm_source=bbs&utm_medium=mys&utm_campaign=icon`
		}
	},
	tears: {
		forumid: 37,
		biz: 'nxx_cn',
		name: '未定事件簿',
		actid: 'e202202251749321',
		url: "https://bbs.mihoyo.com/wd/",
		signUrl(data, type) {
			let dataUrl = {}
			switch (type) {
				case "isSign":
					dataUrl = {
						url: `${web_api}/event/luna/info`,
						query: `lang=zh-cn&region=${data.region}&act_id=${this.actid}&uid=${data.game_uid}`
					}
					break;
				case "sign":
					dataUrl = {
						url: `${web_api}/event/luna/sign`,
						body: {
							lang: 'zh-cn',
							region: data.region,
							act_id: this.actid,
							uid: data.game_uid
						}
					}
					break;
				case "home":
					dataUrl = {
						url: `${web_api}/event/luna/home`,
						query: `lang=zh-cn&act_id=${this.actid}`
					}
					break;
			}
			dataUrl['types'] = 'sign'
			return dataUrl
		},
		getReferer() {
			return `https://webstatic.mihoyo.com/bbs/event/signin/nxx/index.html?bbs_auth_required=true&bbs_presentation_style=fullscreen&act_id=${this.actid}`
		}
	},
	/** 以下数据待定 由于并未有存在签到入口可能后续会开放*/
	house: {
		forumid: 34,
		name: '大别野',
		url: "https://bbs.mihoyo.com/dby/",
		signUrl(data, type, api) {  //预留方法方便后续迭代
			let dataUrl = {}
			return dataUrl
		},
	},
	honkaisr: {
		forumid: 52,
		name: '崩坏星穹铁道',
		url: "https://bbs.mihoyo.com/sr/",
		signUrl(data, type, api) {  //预留方法方便后续迭代
			let dataUrl = {}
			return dataUrl
		},
	},
	zzz: {
		forumid: 57,
		name: "绝区零",
		url: "https://bbs.mihoyo.com/zzz/",
		signUrl(data, type, api) {  //预留方法方便后续迭代
			let dataUrl = {}
			return dataUrl
		},
	}
}
export default {
	APP_VERSION,
	mhyVersion,
	salt,
	salt2,
	cloud_api,
	saltWeb,
	oldsalt,
	osSaltWeb,
	web_api,
	os_web_api,
	os_hk4_api,
	hk4_api,
	bbs_api,
	boards
}
