# CustomComponents
### 底部导航栏Tabbar
使用vant框架中的tabbar，使用了路由模式，因为希望tab切换时去到的页面能在navigation页面里，所以用到了嵌套路由，在Navigation节点当中使用了children配置。  
关于嵌套路由，详见https://router.vuejs.org/zh/guide/essentials/nested-routes.html
### 自定义日历(考勤显示)
日历传入年，月，日。  
可以显示两种类型的日期事件，合格和不合格  
显示提示信息(考勤人数比例)
### 自定义表格
传入表头信息数组columnData  
传入每行数据组成的数组rowData
### eCharts绘制折线图
考勤统计折线图，显示总在职人数和实际考勤人数  
发薪统计折线图，有两个YAxis，一个是发薪人数，一个是发薪金额数  
`npm run serve` .../#/line
##### eCharts参考文档
`https://echarts.apache.org/zh/option.html#title`
### 底部应用中心面板
底部缩略时显示1行，上滑/点击展开后显示全部  
点击更多进入编辑页面，可对当前应用进行添加/删除操作，拖拽进行排序  
提供应用点击回调，除面板外还提供一个定位按钮回调  
只需传入我的应用数组和未添加的应用数组
# 引入的第三方框架
Vant  
https://youzan.github.io/vant/#/zh-CN/  
eCharts

