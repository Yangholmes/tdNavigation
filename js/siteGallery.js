/**
 *
 */
function yangSiteGallery(href, title, favicon, thumb){
  this.href = href ? href : '#';
  this.title = title ? title : 'no title';
  this.favicon = favicon ? favicon : '';
  this.thumb = thumb ? thumb : '';

  this.singleSiteHTML =
                    // '<a class="site-link title" id="" href="#" title="">' + // * site anchor
                      '<div class="bar">' + // gray bar
                        '<div class="site-favicon">' +
                          '<img src="">' + // * site icon
                        '</div>' +
                        '<div class="site-title"></div>' + // * site title
                        '<div class="site-x" title="Do not show this site!"></div>' + // reserve
                      '</div>' +
                      '<div class="site-thumb">' +
                        '<img class="" src="" title="" alt="">' + // * site thumb
                      '</div>'; // +
                    //'</a>';
  this._singleSite = this._init(); // initial
  this.setHref(href).setIcon(favicon).setTitle(title).setThumb(thumb); // set attributes~
}

yangSiteGallery.prototype = {
  /**
   * Initial: Generate a <a> tag~
   */
  _init: function(){
    var singleSite = document.createElement('a');
    singleSite.setAttribute('class', 'site-link title');
    singleSite.setAttribute('href', this.href);
    singleSite.innerHTML = this.singleSiteHTML;
    return singleSite;
  },

  /**
   * a useful method, get child element by class name~
   */
  _getChildByClassName: function(className){

  },

  /**
   * set the gallery attributes
   */
  setHref: function(href){
    if(!href){}
    this._singleSite.href = href;
    return this;
  },
  setIcon: function(icon){
    if(!icon){}
    this._singleSite.getElementsByTagName('img')[0].src = icon;
    return this;
  },
  setTitle: function(title){
    if(!title){}
    this._singleSite.firstElementChild.childNodes[1].innerHTML = title;
    return this;
  },
  setThumb: function(thumb){
    if(!thumb){}
    this._singleSite.getElementsByTagName('img')[1].src = thumb;
    return this;
  },

  _render: function(){
    var sitesNum = document.getElementsByClassName('single-site').length;
    this._singleSite.getElementsByTagName('a')[0].id = 'site' + sitesNum;
  },

  /**
	 * methos that be used to insert self into document
	 */
	insert: function(e){
		e.appendChild(this._singleSite); //append self into e
	},
	insertBefore: function(e){
		e.parentNode.insertBefore(this._singleSite, e);
	},
	insertAfter: function(e){
		e.parentNode.insertBefore(this._singleSite, e.nextElementSibling());
	},
};


/**
 * test for the gallery object
 */
var sites =
            [{
              href: 'http://www.td123.td:8080/td',
              title: '通导OA',
              favicon: 'site-favicon/TD_OA_144.ico',
              thumb: 'site-thumb/TD_OA.png',
            },{
              href: 'http://www.srrc.org.cn/WP_Search.aspx',
              title: '型号核准证书查询',
              favicon: 'site-favicon/srrc.ico',
              thumb: 'site-thumb/srrc.png',
            },{
              href: 'http://srta.cn/index.action',
              title: '无线电设备型号核准行政许可受理网',
              favicon: 'site-favicon/test.ico',
              thumb: 'site-thumb/srta.png',
            },{
              href: 'https://exmail.qq.com/cgi-bin/loginpage',
              title: '登陆企业邮箱',
              favicon: 'site-favicon/exmailqq.ico',
              thumb: 'site-thumb/exmailqq.png',
            },{
              href: 'http://xmgl.gz.gov.cn/',
              title: '广州市政府投资信息化项目管理系统',
              favicon: 'site-favicon/test.ico',
              thumb: 'site-thumb/xmgl.png',
            },{
              href: 'http://gzteleader.com/',
              title: '广州通导信息技术服务有限公司',
              favicon: 'site-favicon/gzteleader.ico',
              thumb: 'site-thumb/gzteleader.png',
            },{
              href: 'http://www.td123.td/searcheverything',
              title: '淘文档',
              favicon: 'site-favicon/searcheverything.ico',
              thumb: 'site-thumb/searcheverything.png',
            },{
              href: '#',
              title: '无',
              favicon: 'site-favicon/searcheverything.ico',
              thumb: 'site-thumb/test.png',
            }],

    galleryDOM = document.getElementById('site-gallery');

for(var i=0;i<sites.length;i++){
  var href = sites[i].href,
      title = sites[i].title,
      favicon = sites[i].favicon,
      thumb = sites[i].thumb,

      site = new yangSiteGallery(href, title, favicon, thumb);

  site.insert(galleryDOM);
}
