YUI.add("gallery-full-screen",function(e){var d=e.config.doc,b=e.one(d.documentElement),c=e.Lang;function a(f){a.superclass.constructor.apply(this,arguments);}a.NAME="fullScreen";a.ATTRS={"node":{value:null,readOnly:true}};e.extend(a,e.Base,{_isSupported:false,_vendorPrefix:"",initializer:function(){this.publish("change",{emitFacade:true,broadcast:2});this.before("change",function(g){var f=this.get("enabled");this._set("node",f?g.node:null);});},isSupported:function(){return this._isSupported;},isEnabled:function(){return false;},exit:function(){}});e.FullScreen=new a();(function(){var f=new e.ArrayList(["webkit","moz"]);if(!c.isUndefined(d.cancelFullScreen)||!c.isUndefined(d.exitFullScreen)){e.FullScreen._isSupported=true;}else{f.each(function(g){if(!e.FullScreen._isSupported&&!c.isUndefined(d[g+"CancelFullScreen"])){e.FullScreen._isSupported=true;e.FullScreen._vendorPrefix=g;}});}}());if(e.FullScreen.isSupported()){switch(e.FullScreen._vendorPrefix){case"webkit":e.mix(a.prototype,{isEnabled:function(){return d.webkitIsFullScreen;},exit:function(){d.webkitCancelFullScreen();this.fire("change",{node:null});}},true);break;case"moz":e.mix(a.prototype,{isEnabled:function(){return d.mozFullScreen;},exit:function(){d.mozCancelFullScreen();this.fire("change",{node:null});}},true);break;default:e.mix(a.prototype,{isEnabled:function(){return c.isUndefined(d.fullscreenEnabled)?d.fullScreen:d.fullscreenEnabled;},exit:function(){d.exitFullscreen();this.fire("change",{node:null});}},true);}}if(e.FullScreen.isSupported()){b.addClass("fullscreen");b.removeClass("no-fullscreen");}else{b.removeClass("fullscreen");b.addClass("no-fullscreen");}},"gallery-2012.05.30-21-22",{requires:["arraylist","base-build","node-core","node-base"],skinnable:false});