/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.ApprovalPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.ApprovalPanel',
    id : 'kasbon.panel.ApprovalPanel', //id=xtype supaya bisa display screen
    title: 'Approval',
  
    width: 500,
    layot: 'center',
    initComponent: function() {
        this.items = 
                {
            xtype: 'kasbon.grid.ApprovalGrid',
           region: 'center'
        }
        ;
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
          
        };
        kasbon.panel.ApprovalPanel.superclass.initComponent.call(this);
    }
    
   
    
   
});

