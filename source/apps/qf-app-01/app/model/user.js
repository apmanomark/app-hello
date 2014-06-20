Ext.define('qf-app-01.model.user', {
			extend : 'Ext.data.Model',
			config : {
			 fields: [
			 {name: 'id',  type: 'int'},
			 {name: 'username',  type: 'string'},
			 {name: 'firstname',  type: 'string'},
			 {name: 'lastname',  type: 'string'},
             {name: 'name',  type: 'string'},
             {name: 'email',  type: 'string'},
             {name: 'total_questions',type:'int', defaultValue:0},
             ]
			}
});

