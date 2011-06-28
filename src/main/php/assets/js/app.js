// Register namespaces and their corresponding paths to Ext.Loader
Ext.Loader.setPath({
    'kasbon': 'assets/js/app/kasbon'
});

// Specify a list of classes your application your application needs
Ext.require([
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'Ext.menu.Menu',
    'Ext.form.Label',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'kasbon.form.pengajuanKasbonForm',
    'kasbon.panel.pengajuanKasbonPanel',
    'kasbon.toolbar.CrudToolbar',
    'kasbon.model.pengajuanKasbon',
    'kasbon.panel.CenterPanel',
    'kasbon.panel.MainPanel',
]);

// Application's initialization
Ext.onReady(function() {
    var win = Ext.create('Ext.container.Viewport', {
        id: 'mainScreen',
        layout: 'fit',
        plain: true,
        closable: false,
        items: [
            {xtype : 'kasbon.panel.MainPanel'}
        ]
    });
    win.show();
});
