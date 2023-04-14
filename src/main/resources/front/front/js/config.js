
var projectName = '红盖头婚恋交友';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '我的佳缘',
	url: './pages/wodeliangyuan/list.html'
}, 
{
	name: '婚恋课堂',
	url: './pages/hunlianketang/list.html'
}, 
{
	name: '礼物商城',
	url: './pages/liwushangcheng/list.html'
}, 
{
	name: '电影信息',
	url: './pages/dianyingxinxi/list.html'
}, 
{
	name: '景点信息',
	url: './pages/jingdianxinxi/list.html'
}, 

{
	name: '系统公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/honggaitousystem/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"地区","menuJump":"列表","tableName":"diqu"}],"menu":"地区管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除","查看评论"],"menu":"我的佳缘","menuJump":"列表","tableName":"wodeliangyuan"}],"menu":"我的佳缘管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"婚恋课堂","menuJump":"列表","tableName":"hunlianketang"}],"menu":"婚恋课堂管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"商品分类","menuJump":"列表","tableName":"shangpinfenlei"}],"menu":"商品分类管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除","查看评论"],"menu":"礼物商城","menuJump":"列表","tableName":"liwushangcheng"}],"menu":"礼物商城管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"电影分类","menuJump":"列表","tableName":"dianyingfenlei"}],"menu":"电影分类管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除","查看评论"],"menu":"电影信息","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除"],"menu":"电影购票","menuJump":"列表","tableName":"dianyinggoupiao"}],"menu":"电影购票管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"景点分类","menuJump":"列表","tableName":"jingdianfenlei"}],"menu":"景点分类管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","查看评论"],"menu":"景点信息","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除"],"menu":"景点购票","menuJump":"列表","tableName":"jingdiangoupiao"}],"menu":"景点购票管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看"],"menu":"我的佳缘列表","menuJump":"列表","tableName":"wodeliangyuan"}],"menu":"我的佳缘模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"婚恋课堂列表","menuJump":"列表","tableName":"hunlianketang"}],"menu":"婚恋课堂模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"礼物商城列表","menuJump":"列表","tableName":"liwushangcheng"}],"menu":"礼物商城模块"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","购票"],"menu":"电影信息列表","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","购票"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"我的佳缘","menuJump":"列表","tableName":"wodeliangyuan"}],"menu":"我的佳缘管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","支付"],"menu":"电影购票","menuJump":"列表","tableName":"dianyinggoupiao"}],"menu":"电影购票管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","支付"],"menu":"景点购票","menuJump":"列表","tableName":"jingdiangoupiao"}],"menu":"景点购票管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看"],"menu":"我的佳缘列表","menuJump":"列表","tableName":"wodeliangyuan"}],"menu":"我的佳缘模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"婚恋课堂列表","menuJump":"列表","tableName":"hunlianketang"}],"menu":"婚恋课堂模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"礼物商城列表","menuJump":"列表","tableName":"liwushangcheng"}],"menu":"礼物商城模块"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","购票"],"menu":"电影信息列表","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","购票"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
