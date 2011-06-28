/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('kasbon.form.pengajuanKasbonForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.pengajuanKasbonForm',
    title: 'Entry Pengajuan Kasbon',
    id : 'kasbon.form.pengajuanKasbonForm',
    width: 400,
    height: 250,
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
            anchor: '25%',
            padding : '5 0 0 0'
        },
        {
            xtype: 'combo',
            fieldLabel: 'Pegawai',
            anchor: '25%',
            displayField:'name',
            store: 'comboPengajuanKasbonStore',
            queryMode:'local',
            emptyText: '..: Pilih Pegawai:..',
            padding : '5 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nilai',
            anchor: '25%',
            padding : '5 0 0 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Keterangan',
            anchor: '25%',
            padding : '5 0 0 0'
            
        },
        {
            xtype: 'button',
            text: 'Simpan',
            width: 55,
            height: 26,
            margin : '0 5 0 110'
        },
        {
            xtype: 'button',
            text: 'Batal',
            height: 26,
            width: 55
        }
        ];
        kasbon.form.pengajuanKasbonForm.superclass.initComponent.call(this);
    }
});


