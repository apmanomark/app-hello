{"filter":false,"title":"GamePlay.js","tooltip":"/source/apps/qf-app-01/app/view/GamePlay.js","undoManager":{"mark":3,"position":3,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":25}},"text":"QF.view.phone"},{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":24}},"text":"qfApp01.view"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":4,"column":0},"end":{"row":22,"column":0}},"nl":"\r\n","lines":["\tinitialize : function () {","\t\t// ##################### needs in game play controller to load these question templates from QF api calls ###############","\t\tthis.callParent();","\t\tme = this;","\t\tvar userDS = Ext.getStore('userStore');","\t\tvar record,","\t\tuserName = 'Your Name',","\t\tuserFBID,","\t\tusersImage = 'resources/2xRes/images/userimg_default.gif';","","\t\tif (!userDS.getAt(0)) {}","\t\telse {","\t\t\t// check logged in get details needed","\t\t\trecord = userDS.getAt(0);","\t\t\tuserName = record.get('name');","\t\t\tuserFBID = record.get('facebook_uid');","\t\t\tusersImage = 'https://graph.facebook.com/' + userFBID + '/picture?width=35&height=35';","\t\t}"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":14},"end":{"row":7,"column":15}},"text":" "}]}]]},"ace":{"folds":[],"scrolltop":3000,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":213,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1403119221648,"hash":"ceb5e05ba6c120a91c9bc4ca1d97e22b3e0a77c2"}