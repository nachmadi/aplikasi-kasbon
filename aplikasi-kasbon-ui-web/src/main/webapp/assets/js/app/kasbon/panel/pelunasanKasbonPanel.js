Ext.define('kasbon.panel.pelunasanKasbonPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.kasbon.panel.pelunasanKasbonPanel',
    id : 'kasbon.panel.pelunasanKasbonPanel',
    title: 'Entry  Pelunasan',
    width: 500,
    height: 300,
    titleCollapse: true,
    collapsible: true,
    padding: 10,
    initComponent : function() {
        this.items = 
        {
            xtype: 'kasbon.form.pelunasanKasbonForm'
            
        };
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
        kasbon.panel.pelunasanKasbonPanel.superclass.initComponent.call(this);
    }
});