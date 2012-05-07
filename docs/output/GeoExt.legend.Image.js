Ext.data.JsonP.GeoExt_legend_Image({"parentMixins":[],"inheritdoc":null,"extends":"Ext.Component","alternateClassNames":["GeoExt.LegendImage"],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":true,"uses":[],"members":{"cfg":[{"owner":"GeoExt.legend.Image","tagname":"cfg","meta":{},"name":"defaultImgSrc","id":"cfg-defaultImgSrc"},{"owner":"GeoExt.legend.Image","tagname":"cfg","meta":{},"name":"imgCls","id":"cfg-imgCls"},{"owner":"GeoExt.legend.Image","tagname":"cfg","meta":{},"name":"noImgCls","id":"cfg-noImgCls"},{"owner":"GeoExt.legend.Image","tagname":"cfg","meta":{},"name":"url","id":"cfg-url"}],"method":[{"owner":"GeoExt.legend.Image","tagname":"method","meta":{"private":true},"name":"onDestroy","id":"method-onDestroy"},{"owner":"GeoExt.legend.Image","tagname":"method","meta":{"private":true},"name":"onImageLoad","id":"method-onImageLoad"},{"owner":"GeoExt.legend.Image","tagname":"method","meta":{"private":true},"name":"onImageLoadError","id":"method-onImageLoadError"},{"owner":"GeoExt.legend.Image","tagname":"method","meta":{"private":true},"name":"onRender","id":"method-onRender"},{"owner":"GeoExt.legend.Image","tagname":"method","meta":{},"name":"setUrl","id":"method-setUrl"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.LegendImage</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.legend.Image</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Image.html#GeoExt-legend-Image' target='_blank'>Image.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultImgSrc' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-cfg-defaultImgSrc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-cfg-defaultImgSrc' class='name expandable'>defaultImgSrc</a><span> : String</span></div><div class='description'><div class='short'>Path to image that will be used if the legend image fails\nto load. ...</div><div class='long'><p>Path to image that will be used if the legend image fails\nto load.  Default is Ext.BLANK_IMAGE_URL.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-imgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-cfg-imgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-cfg-imgCls' class='name expandable'>imgCls</a><span> : String</span></div><div class='description'><div class='short'>Optional css class to apply to img tag ...</div><div class='long'><p>Optional css class to apply to img tag</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-noImgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-cfg-noImgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-cfg-noImgCls' class='name expandable'>noImgCls</a><span> : String</span></div><div class='description'><div class='short'>CSS class applied to img tag when no image is available or\nthe default image was loaded. ...</div><div class='long'><p>CSS class applied to img tag when no image is available or\nthe default image was loaded.</p>\n<p>Defaults to: <code>&quot;gx-legend-noimage&quot;</code></p></div></div></div><div id='cfg-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-cfg-url' class='name expandable'>url</a><span> : String</span></div><div class='description'><div class='short'>The url of the image to load ...</div><div class='long'><p>The url of the image to load</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onDestroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-onImageLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-method-onImageLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-method-onImageLoad' class='name expandable'>onImageLoad</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called after the legend image finished loading. ...</div><div class='long'><p>Private method called after the legend image finished loading.</p>\n</div></div></div><div id='method-onImageLoadError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-method-onImageLoadError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-method-onImageLoadError' class='name expandable'>onImageLoadError</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called if the legend image fails loading. ...</div><div class='long'><p>Private method called if the legend image fails loading.</p>\n</div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-method-onRender' class='name expandable'>onRender</a>( <span class='pre'>Object ct, Object position</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called when the legend image component is being\nrendered. ...</div><div class='long'><p>Private method called when the legend image component is being\nrendered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Image'>GeoExt.legend.Image</span><br/><a href='source/Image.html#GeoExt-legend-Image-method-setUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Image-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>String url</span> )</div><div class='description'><div class='short'>Sets the url of the legend image. ...</div><div class='long'><p>Sets the url of the legend image.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new URL.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.legend.Image","files":[{"href":"Image.html#GeoExt-legend-Image","filename":"Image.js"}],"mixedInto":[],"aliases":{"widget":["gx_legendimage"]},"id":"class-GeoExt.legend.Image","superclasses":["Ext.Component"]});