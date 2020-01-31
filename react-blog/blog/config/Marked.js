import marked from 'marked';
import highlightjs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import '../public/style/pages/Detail.css'

const render = new marked.Renderer();
const markedOption = 
    marked.setOptions({
        renderer:render,   // 必填，渲染自定义格式
        gfm:true,   // 启动类似github的marked
        pedantic:false,    // 容错机制
        sanitize:false,    // 原始输出，忽略html
        tables:true,       // 支持table，gfm必须为true
        breaks:false,      // 支持换行符，gfm必须为true
        smartLists:true,   // 优化列表
        smartypants:false,
        highlight:function (code){    // 代码高亮
          return highlightjs.highlightAuto(code).value;
        }
    })
export default markedOption;
