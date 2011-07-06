/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('kasbon.form.LaporanKasbonForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kasbon.form.LaporanKasbonForm',
    title: 'Laporan Kasbon',
    region: 'north',
    id: 'kasbon.form.LaporanKasbonForm',
 
    width: 650,
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
        
        var comboLaporanKasbon = [
        {
            "name":"Dadang"
           
            
        },

        {
            "name":"Feldy"
            
            
        }
        ];
        
                
        //function Data store
        var comboLaporanKasbonStore = new Ext.data.Store({
            model: 'model',
            id : 'comboLaporanKasbonStore',
            data : comboLaporanKasbon,
            autoLoad: true
        });
        
        this.items = [
        {
            xtype: 'combo',
            fieldLabel: 'Pegawai',
            anchor: '55%',
            displayField:'name',
            store: 'comboLaporanKasbonStore',
            queryMode:'local',
            emptyText: '..: Pilih Pegawai:..',
            padding: '20 0 0 0',
            margin: '0 0 0 15'
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: 'Periode',
            combineErrors: true,
            msgTarget : 'side',
            padding: '20 0 0 0',
            margin: '0 0 0 15',
            layout: 'hbox',
            defaults: {
                flex: 1,
                hideLabel: true
            },
            items: [
            {
                xtype     : 'datefield',
                name      : 'startDate',
                fieldLabel: 'Start',
                margin: '0 5 0 0',
                hideLabel: true,
                allowBlank: false
            },
            {
                xtype     : 'datefield',
                name      : 'endDate',
                fieldLabel: 'End',
                hideLabel: true,
                allowBlank: false
            }
            ]
        },
        {
            xtype: 'button',
            text: 'Ok',
            width: 80,
            height: 35,
            margin : '0 5 0 120'
        },
        {
            xtype: 'button',
            text: 'Download',
            width: 63,
            height: 35
        },
        {
            xtype: 'fieldset',
            title: 'Details',
            collapsible: true,
            defaults: {
                labelWidth: 89,
                padding: '20 0 0 0',
                margin: '0 0 0 15',
                anchor: '100%',
                layout: {
                    type: 'hbox',
                    defaultMargins: {
                        top: 0, 
                        right: 5, 
                        bottom: 0, 
                        left: 0
                    }
                }
            },
            items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Pegawai',
                padding: '-10 0 0 0',
                anchor: '40%',
                disabled: true
                
                
            },  {
                xtype: 'fieldcontainer',
                fieldLabel: 'Periode',
                combineErrors: true,
                msgTarget : 'side',
                padding: '20 0 0 0',
                margin: '0 0 0 15',
                layout: 'hbox',
                width: 50,
                
                defaults: {
                    flex: 1,
                    hideLabel: true
                },
                items: [
                {
                    xtype: 'textfield',
                    anchor: '40%',
                    padding: '0 0 0 0',
                    disabled: true
                    
                },
                {
                    xtype: 'textfield',
                    anchor: '40%',
                    padding: '0 0 0 0',
                    disabled: true,
                     margin: '0 0 0 15'
                }   
                ]
            }]
        }
        
        ];
        kasbon.form.LaporanKasbonForm.superclass.initComponent.call(this);
    }
});
