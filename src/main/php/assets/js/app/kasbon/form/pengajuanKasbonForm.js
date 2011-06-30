/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('kasbon.form.pengajuanKasbonForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.pengajuanKasbonForm',
    title: 'Entry Pengajuan Kasbon',
    id : 'kasbon.form.pengajuanKasbonForm',
    width: 500,
    height: 300,
    titleCollapse: true,
collapsible: true,
    padding: 10,
    initComponent: function() {
        Ext.define('model', {
            extend: 'Ext.data.Model',
            fields: [
            {
                type: 'string',
                name: 'name'
                
                

            }
            ]
        });
        //strore 
        
        var comboPengajuanKasbon = [
        {
            "name":"Dadang"
           
            
        },

        {
            "name":"Feldy"
            
            
        }
        ];
        
                
        //function Data store
        var comboPengajuanKasbonStore = new Ext.data.Store({
            model: 'model',
            id : 'comboPengajuanKasbonStore',
            data : comboPengajuanKasbon,
            autoLoad: true
        });
        
        
        
        this.items = [
        {
            xtype: 'textfield',
            fieldLabel: 'Tanggal',
            anchor: '55%',
            padding: '20 0 0 0',
            margin: '0 0 0 15'
        },
        {
            xtype: 'combo',
            fieldLabel: 'Pegawai',
            anchor: '55%',
            displayField:'name',
            store: 'comboPengajuanKasbonStore',
            queryMode:'local',
            emptyText: '..: Pilih Pegawai:..',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nilai',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Keterangan',
            anchor: '55%',
            margin: '0 0 0 15',
            padding: '20 0 20 0'
            
        },
        {
            xtype: 'button',
            text: 'Simpan',
            width: 80,
            height: 35,
            margin : '0 5 0 120'
        },
        {
            xtype: 'button',
            text: 'Batal',
            width: 56,
            height: 35
        }
        ];
        kasbon.form.pengajuanKasbonForm.superclass.initComponent.call(this);
    }
});


