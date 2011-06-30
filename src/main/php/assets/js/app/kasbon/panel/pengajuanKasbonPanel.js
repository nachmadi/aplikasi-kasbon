/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.panel.pengajuanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pengajuanKasbonPanel',
    id : 'kasbon.panel.pengajuanKasbonPanel',
    title: 'Pengajuan Kasbon',
    width: 500,
    height: 200,
    
    
    initComponent: function() {
        this.items = 
        {
            xtype: 'kasbon.form.pengajuanKasbonForm'
            
        };
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
       
        kasbon.panel.pengajuanKasbonPanel.superclass.initComponent.call(this);
    }
    
    
       
});
