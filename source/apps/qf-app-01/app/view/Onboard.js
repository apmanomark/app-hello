Ext.define('qfApp01.view.Onboard', {
	extend : 'Ext.Panel',
	xtype : 'onboardview',
	id : 'onboardview',
	requires:['Ext.carousel.Carousel'],
	config : {
		cls: 'viewdefault',
		flex : 1,
		cls:'nav-offset',
		layout : {
			type:'vbox',
			pack : 'start',
			align : 'center'
		},
		items : [

				{
					xtype : 'button',
					id : 'skipconnectBtn',
					text : 'Skip and Connect',
					width : '235px',
					height : '56px',
					margin: '5 0 0 0',
					styleHtmlContent : false,
					listeners : {
						tap : function(e) {
						this.fireEvent('loadViewEvent', this, 'Connect', 'notconnected',true, [ 'back', true ], [ true, true ],'sunburst1');
					
						}
					}
				} ]

	}

});