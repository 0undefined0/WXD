(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{50:function(E,u,C){"use strict";C.r(u);var s={created:function(){this.content=unescape("%3Ch1%3EUpload%20%u4E0A%u4F20%u6587%u4EF6%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cp%3E%u5728%3Ccode%3Eapp.json%3C/code%3E%u6216%3Ccode%3Eindex.json%3C/code%3E%u4E2D%u5F15%u5165%u7EC4%u4EF6%uFF0C%u9ED8%u8BA4%u4E3A%3Ccode%3EES6%3C/code%3E%u7248%u672C%uFF0C%3Ccode%3EES5%3C/code%3E%u5F15%u5165%u65B9%u5F0F%u53C2%u89C1%3Ca%20href%3D%22%23/quickstart%22%3E%u5FEB%u901F%u4E0A%u624B%3C/a%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-json%22%3E%3Cspan%20class%3D%22hljs-string%22%3E%22usingComponents%22%3C/span%3E%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%22van-uploader%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22path/to/vant-weapp/dist/uploader/index%22%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u6587%u4EF6%u4E0A%u4F20%u5B8C%u6BD5%u540E%u4F1A%u89E6%u53D1%3Ccode%3Eafter-read%3C/code%3E%u56DE%u8C03%u51FD%u6570%uFF0C%u83B7%u53D6%u5230%u5BF9%u5E94%u7684%u6587%u4EF6%u7684%u4E34%u65F6%u5730%u5740%uFF0C%u7136%u540E%u518D%u4F7F%u7528%3Ccode%3Ewx.uploadFile%3C/code%3E%u5C06%u56FE%u7247%u4E0A%u4F20%u5230%u8FDC%u7A0B%u670D%u52A1%u5668%u4E0A%3C/p%3E%0A%3Ch4%20id%3D%22wxml-shi-li%22%3Ewxml%20%u793A%u4F8B%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Efile-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20fileList%20%7D%7D%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aafter-read%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22afterRead%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id%3D%22js-shi-li%22%3Ejs%20%u793A%u4F8B%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EfileList%3C/span%3E%3A%20%5B%5D%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20afterRead%28event%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20%7B%20file%20%7D%20%3D%20event.detail%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5F53%u8BBE%u7F6E%20mutiple%20%u4E3A%20true%20%u662F%20file%20%u662F%u4E00%u4E2A%u6570%u7EC4%uFF0Cmutiple%20%u9ED8%u8BA4%u4E3A%20false%uFF0Cfile%20%u662F%u4E00%u4E2A%u5BF9%u8C61%3C/span%3E%0A%20%20%20%20%20%20wx.uploadFile%28%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eurl%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//example.weixin.qq.com/upload%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-comment%22%3E//%u4EC5%u4E3A%u793A%u4F8B%uFF0C%u975E%u771F%u5B9E%u7684%u63A5%u53E3%u5730%u5740%3C/span%3E%0A%20%20%20%20%20%20%20%20filePath%3A%20file.path%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27file%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EformData%3C/span%3E%3A%20%7B%20%3Cspan%20class%3D%22hljs-string%22%3E%27user%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27test%27%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20success%20%28res%29%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u4E0A%u4F20%u5B8C%u6210%u9700%u8981%u66F4%u65B0fileList%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20%7B%20fileList%20%3D%20%5B%5D%20%7D%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.data%3B%0A%20%20%20%20%20%20%20%20%20%20fileList.push%28%7B%20...file%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eurl%3C/span%3E%3A%20res.data%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%20fileList%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22tu-pian-yu-lan%22%3E%u56FE%u7247%u9884%u89C8%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%u5411%u7EC4%u4EF6%u4F20%u5165%3Ccode%3Efile-list%3C/code%3E%u5C5E%u6027%uFF0C%u53EF%u4EE5%u7ED1%u5B9A%u5DF2%u7ECF%u4E0A%u4F20%u7684%u56FE%u7247%u5217%u8868%uFF0C%u5E76%u5C55%u793A%u56FE%u7247%u5217%u8868%u7684%u9884%u89C8%u56FE%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Efile-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20fileList%20%7D%7D%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EfileList%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eurl%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/vant/cat.jpeg%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u56FE%u72471%27%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Uploader%20%u6839%u636E%u6587%u4EF6%u540E%u7F00%u6765%u5224%u65AD%u662F%u5426%u4E3A%u56FE%u7247%u6587%u4EF6%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5982%u679C%u56FE%u7247%20URL%20%u4E2D%u4E0D%u5305%u542B%u7C7B%u578B%u4FE1%u606F%uFF0C%u53EF%u4EE5%u6DFB%u52A0%20isImage%20%u6807%u8BB0%u6765%u58F0%u660E%3C/span%3E%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eurl%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27http%3A//iph.href.lu/60x60%3Ftext%3Ddefault%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u56FE%u72472%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3EisImage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22xian-zhi-shang-chuan-shu-liang%22%3E%u9650%u5236%u4E0A%u4F20%u6570%u91CF%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%3Ccode%3Emax-count%3C/code%3E%u5C5E%u6027%u53EF%u4EE5%u9650%u5236%u4E0A%u4F20%u6587%u4EF6%u7684%u6570%u91CF%uFF0C%u4E0A%u4F20%u6570%u91CF%u8FBE%u5230%u9650%u5236%u540E%uFF0C%u4F1A%u81EA%u52A8%u9690%u85CF%u4E0A%u4F20%u533A%u57DF%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Efile-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20fileList%20%7D%7D%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Emax-count%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%222%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aafter-read%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22afterRead%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-shang-chuan-yang-shi%22%3E%u81EA%u5B9A%u4E49%u4E0A%u4F20%u6837%u5F0F%3C/h3%3E%0A%3Cp%3E%u5C06%3Ccode%3Euse-slot%3C/code%3E%u5C5E%u6027%u8BBE%u7F6E%u4E3A%3Ccode%3Etrue%3C/code%3E%uFF0C%u901A%u8FC7%u63D2%u69FD%u53EF%u4EE5%u81EA%u5B9A%u4E49%u4E0A%u4F20%u533A%u57DF%u7684%u6837%u5F0F%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Euse-slot%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22photo%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22primary%22%3C/span%3E%26gt%3B%3C/span%3E%u4E0A%u4F20%u56FE%u7247%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22shang-chuan-qian-xiao-yan%22%3E%u4E0A%u4F20%u524D%u6821%u9A8C%3C/h3%3E%0A%3Cp%3E%u5C06%3Ccode%3Euse-before-read%3C/code%3E%u5C5E%u6027%u8BBE%u7F6E%u4E3A%3Ccode%3Etrue%3C/code%3E%uFF0C%u7136%u540E%u7ED1%u5B9A%20%3Ccode%3Ebefore-read%3C/code%3E%20%u4E8B%u4EF6%u53EF%u4EE5%u5728%u4E0A%u4F20%u524D%u8FDB%u884C%u6821%u9A8C%uFF0C%u8C03%u7528%20%3Ccode%3Ecallback%3C/code%3E%20%u65B9%u6CD5%u4F20%u5165%20%3Ccode%3Etrue%3C/code%3E%20%u8868%u793A%u6821%u9A8C%u901A%u8FC7%uFF0C%u4F20%u5165%20%3Ccode%3Efalse%3C/code%3E%20%u8868%u793A%u6821%u9A8C%u5931%u8D25%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-uploader%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Efile-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20fileList%20%7D%7D%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Euse-before-read%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20true%20%7D%7D%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Abefore-read%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22beforeRead%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aafter-read%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22afterRead%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EfileList%3C/span%3E%3A%20%5B%5D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20beforeRead%28event%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20%7B%20file%2C%20callback%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%7D%20%7D%20%3D%20event.detail%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Econsole%3C/span%3E.log%28%3Cspan%20class%3D%22hljs-string%22%3E%27before%u4E0A%u4F20%27%3C/span%3E%2C%20file%29%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28file.type%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%27image%27%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20%20%20callback%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20callback%28%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u6807%u8BC6%u7B26%uFF0C%u53EF%u4EE5%u5728%u56DE%u8C03%u51FD%u6570%u7684%u7B2C%u4E8C%u9879%u53C2%u6570%u4E2D%u83B7%u53D6%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20number%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaccept%3C/td%3E%0A%3Ctd%3E%u63A5%u53D7%u7684%u6587%u4EF6%u7C7B%u578B%2C%20%u53EF%u9009%u503C%u4E3A%3Ccode%3Eall%3C/code%3E%20%3Ccode%3Eimage%3C/code%3E%20%3Ccode%3Efile%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eimage%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epreview-size%3C/td%3E%0A%3Ctd%3E%u9884%u89C8%u56FE%u548C%u4E0A%u4F20%u533A%u57DF%u7684%u5C3A%u5BF8%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20number%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E80px%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epreview-image%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u4E0A%u4F20%u5B8C%u6210%u540E%u5C55%u793A%u9884%u89C8%u56FE%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epreview-full-image%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u9884%u89C8%u56FE%u540E%u5C55%u793A%u5168%u5C4F%u56FE%u7247%u9884%u89C8%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emultiple%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5F00%u542F%u56FE%u7247%u591A%u9009%uFF0C%u90E8%u5206%u5B89%u5353%u673A%u578B%u4E0D%u652F%u6301%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u6587%u4EF6%u4E0A%u4F20%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecapture%3C/td%3E%0A%3Ctd%3E%u56FE%u7247%u9009%u53D6%u6A21%u5F0F%uFF0C%u5F53%3Ccode%3Eaccept%3C/code%3E%u4E3A%3Ccode%3Eimage%3C/code%3E%u7C7B%u578B%u65F6%u8BBE%u7F6E%3Ccode%3Ecapture%3C/code%3E%u53EF%u9009%u503C%u4E3A%3Ccode%3Ecamera%3C/code%3E%u53EF%u4EE5%u76F4%u63A5%u8C03%u8D77%u6444%u50CF%u5934%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Array%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%27album%27%2C%20%27camera%27%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u6587%u4EF6%u4E0A%u4F20%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emax-size%3C/td%3E%0A%3Ctd%3E%u6587%u4EF6%u5927%u5C0F%u9650%u5236%uFF0C%u5355%u4F4D%u4E3A%3Ccode%3Ebyte%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emax-count%3C/td%3E%0A%3Ctd%3E%u6587%u4EF6%u4E0A%u4F20%u6570%u91CF%u9650%u5236%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eupload-text%3C/td%3E%0A%3Ctd%3E%u4E0A%u4F20%u533A%u57DF%u6587%u5B57%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eimage-fit%3C/td%3E%0A%3Ctd%3E%u9884%u89C8%u56FE%u88C1%u526A%u6A21%u5F0F%uFF0C%u53EF%u9009%u503C%u53C2%u8003%u5C0F%u7A0B%u5E8F%3Ccode%3Eimage%3C/code%3E%u7EC4%u4EF6%u7684%3Ccode%3Emode%3C/code%3E%u5C5E%u6027%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EscaleToFill%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slot%22%3ESlot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u4E0A%u4F20%u6837%u5F0F%uFF0C%u7528%u6CD5%u89C1%u4E0A%u9762%u7684%u4F8B%u5B50%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22event%22%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Abefore-read%3C/td%3E%0A%3Ctd%3E%u6587%u4EF6%u8BFB%u53D6%u524D%u7684%u56DE%u8C03%u51FD%u6570%uFF0C%u8FD4%u56DE%20%3Ccode%3Efalse%3C/code%3E%20%u53EF%u7EC8%u6B62%u6587%u4EF6%u8BFB%u53D6%uFF0C%u7ED1%u5B9A%u4E8B%u4EF6%u7684%u540C%u65F6%u9700%u8981%u5C06%3Ccode%3Euse-before-read%3C/code%3E%u5C5E%u6027%u8BBE%u7F6E%u4E3A%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eevent.detail.file%3C/code%3E%3A%20%u5F53%u524D%u8BFB%u53D6%u7684%u6587%u4EF6%uFF0C%3Ccode%3Eevent.detail.callback%3C/code%3E%3A%20%u56DE%u8C03%u51FD%u6570%uFF0C%u8C03%u7528%3Ccode%3Ecallback%28false%29%3C/code%3E%u7EC8%u6B62%u6587%u4EF6%u8BFB%u53D6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aafter-read%3C/td%3E%0A%3Ctd%3E%u6587%u4EF6%u8BFB%u53D6%u5B8C%u6210%u540E%u7684%u56DE%u8C03%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eevent.detail.file%3C/code%3E%3A%20%u5F53%u524D%u8BFB%u53D6%u7684%u6587%u4EF6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aoversize%3C/td%3E%0A%3Ctd%3E%u6587%u4EF6%u8D85%u51FA%u5927%u5C0F%u9650%u5236%u7684%u56DE%u8C03%u51FD%u6570%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aclick-preview%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u9884%u89C8%u56FE%u7247%u7684%u56DE%u8C03%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eevent.detail.index%3C/code%3E%3A%20%u70B9%u51FB%u56FE%u7247%u7684%u5E8F%u53F7%u503C%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Adelete%3C/td%3E%0A%3Ctd%3E%u5220%u9664%u56FE%u7247%u7684%u56DE%u8C03%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eevent.detail.index%3C/code%3E%3A%20%u5220%u9664%u56FE%u7247%u7684%u5E8F%u53F7%u503C%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")},mounted:function(){var E=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(u){u.addEventListener("click",E.scrollToAnchor)}))},methods:{scrollToAnchor:function(E){E.target.id&&this.$router.push({path:this.$route.path,hash:E.target.id})}}},a=C(2),t=Object(a.a)(s,(function(){var E=this.$createElement;this._self._c;return this._m(0)}),[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);u.default=t.exports}}]);