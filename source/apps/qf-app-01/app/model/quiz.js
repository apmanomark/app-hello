Ext.define('qf-app-01.model.rounds', {
			extend : 'Ext.data.Model',
			config : {
				fields: [
				    {name: 'id',  type: 'int'},
				    {name: 'YourId',  type: 'int'},
					{name: 'ChallengeId',  type: 'int'},
					{name: 'CurrentRoundId',  type: 'int', defaultValue:0},
					{name: 'CurrentRoundUrl',  type: 'string'},
					{name: 'PrevRoundId',  type: 'int', defaultValue:0},
					{name: 'PrevRoundUrl',  type: 'string'},
					{name: 'CreatedDate', type: 'date'},
					{name: 'microtimecreated',  type: 'int'},
					{name: 'CategoryId', type:'int'},
					{name: 'CategoryName', type:'string'},
					{name: 'TopicId', type:'int'},
					{name: 'TopicName', type:'string'},
					{name: 'AnswerIds',  type: 'string'},
					{name: 'QuestionIds',  type: 'string'},
					{name: 'QuestionsLocalIndex', type:'String'},
					{name: 'QuestionsUrl',  type: 'string'},
					{name: 'AnswerCount',  type: 'int',defaultValue:0},
					{name: 'Stake',  type: 'int',defaultValue:0},
					{name: 'StakeReward',  type: 'int',defaultValue:0},
					{name: 'YouWon',  type: 'int',defaultValue:0},
					{name: 'YourScore',  type: 'int',defaultValue:0},
					{name: 'TheirScore',  type: 'int',defaultValue:0},
					{name: 'TheirId',  type: 'int'},
					{name: 'TheirName',  type: 'string'},
					{name: 'TheirPhoto',  type: 'string'},
					{name: 'TheirSub',  type: 'boolean',defaultValue:false},
					{name: 'Status', type: 'string'}
				]
			}
});

