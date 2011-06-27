Ext.define('kasbon.panel.MainPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.MainPanel',
    frame : true,
    layout : 'border',
	
    initComponent : function() {
        this.items = [ {
            xtype : 'toolbar',
            region : 'north',
            height : 30,
            items : [ {
                text : 'System',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                        text : 'Change Password'
                    }, {
                        text : 'Logout',
                        handler: function(){
                        	window.location = 'process/logout';
                        }
                    } ]
                }
            }, {
                text : 'Master',
                menu : {
                    xtype : 'menu',
                    plain : true,
                    items : [ {
                        text : 'User', 
                        scope : this,
                        handler : function(item){
                            Ext.getCmp('centerpanel').displayScreen(item.screenType);
                        },
                        screenType : 'kasbon.form.UserForm'
                    } ]
                }
            }, {
                text : 'Transaction'
                
                
                
            }, {
                text : 'Report'
                
                
                
                
            } ]
        }, {
            xtype : 'panel',
            title : 'Information',
            collapsible : true,
            region : 'east',
            width : 300
        }, {
            xtype : 'toolbar',
            region : 'south',
            height : 20,
            items : [ {
                text : 'current user : endy',
                xtype : 'label'
            } ]
        }, {
            id : 'centerpanel',
            xtype : 'kasbon.panel.CenterPanel',
            region : 'center'
        } ] ; 
		
        kasbon.panel.MainPanel.superclass.initComponent.call(this);
    }

	
});
