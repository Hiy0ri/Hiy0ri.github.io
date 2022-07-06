/**
 * type: loading 的类型，默认1
 * tipLabel: loading 内的文本，默认 loading...
 * wrap: loading 的父级
 * 
 * @param {*} config 传入对象（含type/tipLabel/wrap）
 */
 function Loading(config) {
    this.type = config.type || 1;
    this.wrap = config.wrap || document.body;
    this.loadingWrapper = null;
}

/* 初始化 loading 效果，在原型链上添加 init 方法 */
Loading.prototype.init = function () {
    this.createDom();
}

/* 创建 loading 结构 */
Loading.prototype.createDom = function () {
    // loading wrap的子盒子，即整个loading的内容盒子
    var loadingWrapper = document.createElement('div');
    loadingWrapper.className = 'loading-wrapper';
    // loading type对应的不同的动画
    var loadingView = document.createElement('div');
    loadingView.className = 'loading-view';
    //
    var loadingVideo = document.createElement('div');
    loadingVideo.className = 'loading-video';
    // 对 loading type的三种情形进行判断
    switch (this.type) {
        case 1:
            html = `
            <div class="wrap">
            <div class="l">L</div>
            <div class="o">O</div>
            <div class="a">A</div>
            <div class="d">D</div>
            <div class="i">I</div>
            <div class="n">N</div>
            <div class="g">G</div>
          </div>
            `;
            loadingView.innerHTML = html;
            break;
        case 2:
            var html = `
                <div class="bounce-view">
                    <div class="bounce bounce1"></div>
                    <div class="bounce bounce2"></div>
                    <div class="bounce bounce3"></div>
                </div>
           `;
            loadingView.innerHTML = html;
            break;
        case 3:
            var html = `
                <div class="wave">
                    <div class="react react1"></div>
                    <div class="react react2"></div>
                    <div class="react react3"></div>
                    <div class="react react4"></div>
                    <div class="react react5"></div>
                </div>
           `;
            loadingView.innerHTML = html;
            break;
        default:
            break;
    }
    loadingWrapper.appendChild(loadingView);
    html='<video style="object-fit: fill" id="video" class="video" video-name="" src="" width="auto" preload="auto" muted="muted"></video>'
    loadingVideo.innerHTML= html;
    loadingWrapper.appendChild(loadingVideo);
    this.wrap.appendChild(loadingWrapper);
    this.loadingWrapper = loadingWrapper;
    var t = Poi.movies.name.split(','),
        _t = t[Math.floor(Math.random() * t.length)]
      $('#video').attr('src', Poi.movies.url + '/' + _t)
      $('#video').attr('video-name', _t)
      function transform() {
        let video = document.getElementById('video')
        let videoWidth = video.videoWidth
        let videoHeight = video.videoHeight
        let windowWidth = document.documentElement.clientWidth
        let windowHeight = document.documentElement.clientHeight
        let x = windowWidth/windowHeight*videoHeight/videoWidth
        video.style.transform = `scale(${x}, 1)`
     }
     $('#video')[0].play()
     
     window.resize = () => transform()
}

// 对loading隐藏
Loading.prototype.hide = function () {
    this.wrap.removeChild(this.loadingWrapper);
}