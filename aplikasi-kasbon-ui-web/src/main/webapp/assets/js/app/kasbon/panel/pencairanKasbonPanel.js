/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.pencairanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pencairanKasbonPanel',
    id : 'kasbon.panel.pencairanKasbonPanel',
    title: 'Entry  pencairan',
    width: 500,
    height: 300,
    titleCollapse: true,
    collapsible: true,
    padding: 10,
    initComponent : function(){
        this.items = 
        {
            xtype: 'kasbon.form.pencairanKasbonForm'
            
        };
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
        kasbon.panel.pencairanKasbonPanel.superclass.initComponent.call(this);
    }
});