/* eslint-disable */
/**
 * 组件内需要  引入import { initCLodop } from '@/utils/LodopFuncs';
 * 调用：const LODOP = initCLodop();
 *  PRINT_INIT(strPrintTaskName)打印初始化
 *   SET_PRINT_PAGESIZE(intOrient,intPageWidth,intPageHeight,strPageName)设定纸张大小
 *  ADD_PRINT_HTM(intTop,intLeft,intWidth,intHeight,strHtml)增加超文本项
 *  ADD_PRINT_TEXT(intTop,intLeft,intWidth,intHeight,strContent)增加纯文本项
 *  ADD_PRINT_TABLE(intTop,intLeft,intWidth,intHeight,strHtml)增加表格项
 *  ADD_PRINT_SHAPE(intShapeType,intTop,intLeft,intWidth,intHeight,intLineStyle,intLineWidth,intColor)画图形
 *  SET_PRINT_STYLE(strStyleName, varStyleValue)设置对象风格
 *  PREVIEW打印预览
 * 具体API http://www.lodop.net/LodopDemo.html
 */
var CreatedOKLodop7766 = null;

function needCLodop(){
    try{
      // 预埋对浏览器的检测问题等等
      return true;
    } catch(err) {return true;};
};

//====页面引用CLodop云打印必须的JS文件：====
if (needCLodop()) {
	var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
	var oscript = document.createElement("script");
	oscript.src =`https://localhost.lodop.net:8443/CLodopfuncs.js?priority=1`;
	head.insertBefore( oscript,head.firstChild );
};

//====获取LODOP对象的主过程：====
export function initCLodop(oOBJECT,oEMBED){
    var strCLodopInstall=`
      <font style='position:absolute;z-index:99999999;background: black;padding:20px;text-align: center;width: 100%;' color='#FF00FF'>
        CLodop云打印服务未安装启动！<a href='/download/CLodop_Setup_for_Win64NT_4.142EN.zip' target='_blank'>点击此处下载安装</a>，安装后请刷新页面。
      </font>
    `;
    var strCLodopUpdate=`
    <font style='position:absolute;z-index:99999999;background: black;padding:20px;text-align: center;width: 100%;' color='#FF00FF'>
      CLodop云打印版本过低！<a href='/download/CLodop_Setup_for_Win64NT_4.142EN.zip' target='_blank'>点击此处下载安装最新</a>，安装后请刷新页面。
    </font>
    `;
    var LODOP;
    try{
        var isIE = (navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);
        if (needCLodop()) {
          try{
            LODOP = getCLodop();
          } catch(err) {};

          if (!LODOP && document.readyState !== "complete") {
            alert("C-Lodop没准备好，请稍后再试！");
            return;
          };

          if (!LODOP) {
            if (isIE) {
              document.write(strCLodopInstall);
            } else {
              document.documentElement.innerHTML=strCLodopInstall+document.documentElement.innerHTML;
              return;
            }
          } else {
            if (CLODOP.CVERSION<"2.0.9.0") {
              if (isIE) {
                document.write(strCLodopUpdate);
              } else {
                document.documentElement.innerHTML=strCLodopUpdate+document.documentElement.innerHTML;
              }
            };
            if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
            if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
          };
        }
        
        if (LODOP.VERSION<"6.2.1.5") {
            if (needCLodop()) {
              document.documentElement.innerHTML=strCLodopUpdate+document.documentElement.innerHTML;
            } else if (isIE) {
              document.write(strCLodopUpdate);
            } else {
              document.documentElement.innerHTML=strCLodopUpdate+document.documentElement.innerHTML;
            }
            return LODOP;
        };
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
        LODOP.SET_LICENSES("深圳市立创电子商务有限公司","EFBA3D9E6EE17DEF2AA11ECF1E83CA27","","");
        //===========================================================
        return LODOP;
    } catch(err) {alert("initCLodop出错:"+err);};
};




