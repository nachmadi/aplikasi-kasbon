/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.panel.LaporanKasbonPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kasbon.panel.LaporanKasbonPanel',
    id : 'kasbon.panel.LaporanKasbonPanel', //id=xtype supaya bisa display screen
    title: 'Laporan Kasbon',
    width: 500,
    layot: 'border',
    initComponent: function() {
        this.items = [ 
             {
            xtype: 'kasbon.form.LaporanKasbonForm',
                region: 'north'
        },
                {
            xtype: 'kasbon.grid.LaporanKasbonGrid',
           region: 'center'
        }
        ];
        this.tbar = {
            xtype: 'kasbon.toolbar.CrudToolbar'
          
        };
        kasbon.panel.LaporanKasbonPanel.superclass.initComponent.call(this);
    }
    
   
    
   
});

