YUI.add("gallery-model-sync-local",function(b){function a(){}a._NON_ATTRS_CFG=["root"];a._data={};a.prototype={root:"",storage:null,initializer:function(d){var c;d||(d={});("root" in d)&&(this.root=d.root||this.constructor.NAME);try{this.storage=b.config.win.localStorage;c=this.storage.getItem(this.root);}catch(f){}a._data[this.root]=(c&&b.JSON.parse(c))||{};},generateID:function(c){return b.guid(c+"_");},sync:function(e,d,f){d||(d={});var c;switch(e){case"read":if(this._isYUIModelList){c=this._index(d);}else{c=this._show(d);}break;case"create":c=this._create(d);break;case"update":c=this._update(d);break;case"delete":c=this._destroy(d);break;}if(c){f(null,c);}else{f("Data not found");}},_index:function(c){return b.Object.values(a._data[this.root]);},_show:function(c){return b.JSON.parse(a._data[this.root][this.get("id")]);},_create:function(c){var d=this.toJSON();d.id=this.generateID(this.root);a._data[this.root][d.id]=d;this._save();return d;},_update:function(c){var d=b.merge(this.toJSON(),c);a._data[this.root][this.get("id")]=d;this._save();return d;},_destroy:function(c){delete a._data[this.root][this.get("id")];this._save();return this.toJSON();},_save:function(){this.storage&&this.storage.setItem(this.root,b.JSON.stringify(a._data[this.root]));}};b.namespace("ModelSync").Local=a;},"gallery-2012.07.11-21-38",{requires:["model","model-list","io-base","json-stringify"],skinnable:false});