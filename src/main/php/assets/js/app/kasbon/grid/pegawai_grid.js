/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('kasbon.grid.pegawai_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.pegawai_grid',
   title: 'Pegawai List',
   height: 200,
    width: 500,
    padding: 10,
  collapsible: true,           
    initComponent: function() {
        
        this.columns = [
             
            {
                
                dataIndex: 'kode',
                header: 'Kode Pegawai',
                width: 150,
                sortable: true
               
            },
            {
                
                dataIndex: 'nama',
                header: 'Nama Pegawai',
                width: 150,
                sortable: true
            },
            {
                
                dataIndex: 'jabatan',
                header: 'Jabatan',
                width: 150,
                sortable: true
            }
            
            ];
            
            this.store = new Ext.data.Store({
                model: 'kasbon.model.m_pegawaiModel',
                data: [
                    {
                    kode: 'feldy',
                    nama: 'didi',
                    jabatan: 'f3ldy10rpl@gmail.com'
                    },
                    {
                    kode: 'feldy',
                    nama: 'didi',
                    jabatan: 'f3ldy10rpl@gmail.com'
                    },
                    {
                    kode: 'feldy',
                    nama: 'didi',
                    jabatan: 'f3ldy10rpl@gmail.com'
                    }
                    
                ]
                
            })
            
     
        kasbon.grid.pegawai_grid.superclass.initComponent.call(this);
    }
    
   
});




