Ext.define('qfApp01.view.QuizPlay', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'top',
        
    items: [
            {
                title: '2 Quiz Play',
            
            items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '444.1 Quiz Play Window'
                },
            }
            
            
            ]
    }

});