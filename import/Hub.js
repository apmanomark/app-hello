Ext.define('qfApp01.view.Hub', {
    extend: 'Ext.tab.Panel',
    xtype: 'hub',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'top',

            items: [
            {
                title: 'Hub',
            },
            
            ]
        
    },

});