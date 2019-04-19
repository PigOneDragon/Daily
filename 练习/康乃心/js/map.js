 /*     ********************************************************   */
    // 百度地图API功能

    var map = new BMap.Map("allmap"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.286168,39.934616), 19); // 初始化地图,设置中心点坐标和地图级别

    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    // 定位的图标

    var point = new BMap.Point(116.286155,39.934612);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


    //点击弹出标注

    //var marker = new BMap.Marker(point);  // 创建标注
    //map.addOverlay(marker);              // 将标注添加到地图中
    //map.centerAndZoom(point, 15);
    var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "北京总部", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow("上地东路1号盈创动力大厦A座北区401", opts); // 创建信息窗口对象 
    marker.addEventListener("click", function() {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });