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


   