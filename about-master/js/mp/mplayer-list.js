/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 * slrc为歌词文件路径 可有可无
 */
//获取网易云音乐
function music163(i) {
	return "http://music.163.com/song/media/outer/url?id=" + i + ".mp3"
}
var mplayer_song = [
	[
		{
			"basic": true,
			"name": "Liella",
			"singer": "Liella!",
			"img": "image/pic/head.jpg"
		},
		{
			"name": "未来如风",
			"singer": "Liella!",
			"img": "http://p2.music.126.net/iWt0q0ersvH7LNqouZabDA==/109951166246695724.jpg?param=177y177",
			"src": music163("1866489156"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc": ""
		},
		{
			"name": "绝非虚构！",
			"singer": "Liella!",
			"img": "http://p1.music.126.net/usUDtLqXFjiVLRqDExRXOQ==/109951166720323690.jpg?param=177y177",
			"src": music163("18886726461"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc": ""
		},
		{
			"name": "起点就是你的天空",
			"singer": "Liella!",
			"img": "http://p1.music.126.net/uL1DJg75AXVNDmI1vu85pg==/109951165868773832.jpg?param=177y177",
			"src": music163("1835406296"),
			"lrc": "[00:00.00]歌词加载中...",
			"slrc": ""
		}
	],
	[
		{
			"basic": true,
			"name": "Red",
			"singer": "每一个人",
			"img": "image/pic/head.jpg"
		},
		{
			"name": "团结的人民永不被击溃！",
			"singer": "奶酪AmerUzily",
			"img": "http://p1.music.126.net/TvGC0VkFSygyQRV-vTCAow==/109951166248896981.jpg?param=117y117",
			"src": music163("1817400204"),
			"lrc": "",
			"slrc": ""
		}

	]
];
