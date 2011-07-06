/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.PegawaiPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.PegawaiPanel',
    id : 'kasbon.panel.PegawaiPanel', //id=xtype supaya bisa display screen
    title: 'User Management',
    width: 200,
    initComponent: function() {
        this.items = [
        {
            xtype: 'kasbon.form.m_pegawaiForm'
        },

        {
            xtype: 'kasbon.grid.pegawai_grid', 
            region: 'center'
        }
        ];
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
           
        };
        kasbon.panel.PegawaiPanel.superclass.initComponent.call(this);
    }
    
   
    
   
});

