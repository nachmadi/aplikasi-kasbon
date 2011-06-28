Ext.define('kasbon.panel.LoginPanel', {
        extend : 'Ext.form.Panel',
        alias : 'widget.kasbon.panel.LoginPanel',
        id: 'loginForm',
    
        frame: true, 
        title: 'Login',
        height: 200,
        width: 300,
    
        fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 90,
                anchor: '100%'
        },
    
        initComponent: function(){
                this.items = [{
                        xtype:'box',
                        anchor:'',
                        fieldLabel:'Image',
                        autoEl: {
                                tag:'div', 
                                style: 'text-align:center',
                                children:[{
                                        tag:'img',
                                        qtip:'ArtiVisi Intermedia',
                                        src:'assets/images/artivisi.png'
                                }]
                        }
                },{
                        xtype: 'textfield',
                        name: 'j_username',
                        fieldLabel: 'Username',
                        value: ''
                },{
                        xtype: 'textfield',
                        name: 'j_password',
                        inputType: 'password',
                        fieldLabel: 'Password'
                },{
                        xtype: 'button',
                        text: 'Login',
                        scope: this,
                        handler: this.onLogin
                }];
                kasbon.panel.LoginPanel.superclass.initComponent.call(this);
        },
    
        onLogin: function(){
                Ext.getCmp('loginForm').getForm().submit({
                        url     : 'process/login/ajax',
                        scope	: this,
                        success : this.onLoginSuccess,
                        failure : this.onLoginFailure
                });
        }, 
	
        onLoginSuccess: function(){
                Ext.MessageBox.alert('Login success');
                Ext.getCmp('loginForm').getForm().reset();
                window.location ='dashboard';
        }, 
	
        onLoginFailure: function(){
                Ext.MessageBox.alert('Error', 'Invalid login');
                Ext.getCmp('loginForm').getForm().reset();
		window.location ='dashboard';
        }
        
});
