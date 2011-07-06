/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.grid.ApprovalGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.ApprovalGrid',
    id: 'kasbon.grid.ApprovalGrid',
    title: 'Approval',
    height: 350,
    width: 750,
    padding: 10,
    collapsible: true, 
   
    initComponent: function() {
        this.items = {
            xtype: 'label',
            text: 'Approval Kasbon',
            region: 'north',
            width: 50,
            style: 'font-size: 30px;\n\
text-decoration: underline;',
            height: 30,
            margin: '0 0 0 25',
            padding: '70 0 0 0'
       
          
        };
        this.columns = [
             
        {
           
            dataIndex: 'tanggal',
            header: 'Tanggal',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'datefield'
            }
               
        },
        {
           
            dataIndex: 'pegawai',
            header: 'Pegawai',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'textfield'
            }
        },
        {
           
            dataIndex: 'nilai',
            header: 'Nilai',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'numberfield'
            }
        },
        {
            
            dataIndex: 'approval',
            header: 'Approval',
            width: 150,
            sortable: true,
            editor :{
                xtype: 'checkbox',
                text: 'Ya'
            }
        }
            
        ];
            
        this.store = new Ext.data.Store({
            model: 'kasbon.model.ApprovalModel',
            data: [
            {
                tanggal: '02021993',
                pegawai: 'didi',
                nilai: '2000',
                approval: true
            },
            {
                tanggal: '02021993',
                pegawai: 'didi',
                nilai: '2000',
                approval: true
            },
            {
                
                tanggal: 'feldy',
                pegawai: 'didi',
                nilai: '2000',
                approval: false
            }
                    
            ]
                
        })
            
     
        kasbon.grid.ApprovalGrid.superclass.initComponent.call(this);
    }
    
   
});




