<script src="js/showCal-1.js"></script>
                                
                                    <script language="JavaScript">
                                               today = new Date();
                                               var calendar = showCal();
                                               var pm = "AM";
                                               if (today.getHours() > 12) {
                                                   pm = "PM";
                                               }
                                               console.log(calendar);

                                               function checkTime(i) {
                                                   if (i < 10) {
                                                       i = "0" + i
                                                   }
                                                   return i
                                               }

                                               function initArray() {
                                                   this.length = initArray.arguments.length
                                                   for (var i = 0; i < this.length; i++)
                                                       this[i + 1] = initArray.arguments[i]
                                               }
                                               var d = new initArray(

                                                   "<font color=white>星期日</font>",
                                                   "星期一",
                                                   "星期二",
                                                   "星期三",
                                                   "星期四",
                                                   "星期五",
                                                   "<font color=white>星期六</font>");
                                               document.write(
                                                   "<font style='font-size:12px;font-family:微软雅黑;color:#333;line-height:22px;'> ",
                                                   // today.getFullYear(),"年",
                                                   today.getMonth() + 1, "月",
                                                   today.getDate(), "日    ",
                                                   d[today.getDay() + 1] + "    ",
                                                   today.getHours() + ":",
                                                   checkTime(today.getMinutes()) + "    " + pm + " ",
                                                   calendar,
                                                   "</font> 　")
                                            
                                </script>