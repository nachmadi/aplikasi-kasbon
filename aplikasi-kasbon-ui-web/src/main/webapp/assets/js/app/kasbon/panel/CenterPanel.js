Ext.define('kasbon.panel.CenterPanel', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.kasbon.panel.CenterPanel',
	id : 'centerpanel',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	items : [ 
	     {
	    	 title : 'Dashboard',
	    	 bodyPadding : 10,
	    	 html : 'Welcome to kasbon Application'
	     } 
     ], 
	
	initComponent: function(){
		kasbon.panel.CenterPanel.superclass.initComponent.call(this);
	}, 
	
	
	displayScreen : function(screenType) {
		var screen = Ext.getCmp(screenType);
		if(screen){
			this.setActiveTab(screen);
		} else {
			this.add({
				xtype : screenType, 
				closable : true
			}).show();
		}
	}
	
});
