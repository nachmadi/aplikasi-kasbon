/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('kasbon.grid.LaporanKasbonGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.kasbon.grid.LaporanKasbonGrid',
    id: 'kasbon.grid.LaporanKasbonGrid',
    title: 'Grid Panel',
        height: 350,
    width: 650,
    padding: 10,
    collapsible: true, 
    initComponent: function() {
        this.columns = [
        {
          
            dataIndex: 'tanggal',
            header: 'Tanggal',
            sortable: true,
            width: 100
        },
        {
            
            dataIndex: 'uraian',
            header: 'Uraian',
            sortable: true,
            width: 100,
            align: 'right'
        },
        {
            
            dataIndex: 'nilai',
            header: 'Nilai',
            sortable: true,
            width: 100
        },
        {
           
            dataIndex: 'saldo',
            header: 'Saldo Akhir',
            sortable: true,
            width: 100
        }
        ];
        
         this.store = new Ext.data.Store({
            model: 'kasbon.model.LaporanKasbonModel',
            data: [
            {
                tanggal: '1-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '120000'
            },
            {
                tanggal: '5-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '3000000'
            },
            {
                tanggal: '8-Jul-2011',
                uraian: 'didi',
                nilai: '2000',
                saldo: '6000000'
            },
                    
            ]
                
        })
        
       kasbon.grid.LaporanKasbonGrid.superclass.initComponent.call(this);
    }
});
