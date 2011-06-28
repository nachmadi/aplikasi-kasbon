/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.panel.pengajuanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pengajuanKasbonPanel',
    id : 'kasbon.panel.pengajuanKasbonPanel',
    title: 'Pengajuan Kasbon',
    width: 721,
    height: 500,
    layout: 'border',
    
    initComponent: function() {
        this.items = 
        {
            xtype: 'kasbon.form.pengajuanKasbonForm',
            region: 'center'
            
            
        }
        ;
        
       
        kasbon.panel.pengajuanKasbonPanel.superclass.initComponent.call(this);
    }
    
    
       
});
