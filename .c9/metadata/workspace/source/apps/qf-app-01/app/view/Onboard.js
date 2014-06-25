{"filter":false,"title":"Onboard.js","tooltip":"/source/apps/qf-app-01/app/view/Onboard.js","undoManager":{"mark":22,"position":22,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":37}},"text":"Ext.define('QF.view.phone.Onboard', {"},{"action":"insertText","range":{"start":{"row":0,"column":37},"end":{"row":1,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":55,"column":0}},"lines":["\textend : 'Ext.Panel',","\txtype : 'onboardview',","\tid : 'onboardview',","\trequires:['Ext.carousel.Carousel'],","\tconfig : {","\t\tcls: 'viewdefault',","\t\tflex : 1,","\t\tcls:'nav-offset',","\t\tlayout : {","\t\t\ttype:'vbox',","\t\t\tpack : 'start',","\t\t\talign : 'center'","\t\t},","\t\titems : [","\t\t         {","\t\t\t\t\txtype : 'carousel',","\t\t\t\t\twidth:'100%',","\t\t\t\t\theight:'300px',","\t\t\t\t\tdefaults : {","\t\t\t\t\t\tstyleHtmlContent : true","\t\t\t\t\t},","\t\t\t\t\titems : [ {","\t\t\t\t\t\thtml : '<div id=\"onboard1\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard2\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard3\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard4\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard5\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard6\" class=\"onboardpip\"></div>'","\t\t\t\t\t} ]","\t\t\t\t}","\t\t\t\t\t\t,","\t\t\t\t{","\t\t\t\t\txtype : 'button',","\t\t\t\t\tid : 'skipconnectBtn',","\t\t\t\t\ttext : 'Skip and Connect',","\t\t\t\t\twidth : '235px',","\t\t\t\t\theight : '56px',","\t\t\t\t\tmargin: '5 0 0 0',","\t\t\t\t\tstyleHtmlContent : true,","\t\t\t\t\tlisteners : {","\t\t\t\t\t\ttap : function(e) {","\t\t\t\t\t\tthis.fireEvent('loadViewEvent', this, 'Connect', 'notconnected',true, [ 'back', true ], [ true, true ],'sunburst1');","\t\t\t\t\t","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t} ]","","\t}",""]},{"action":"insertText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":14}},"text":"QF"},{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":27},"end":{"row":0,"column":32}},"text":"phone"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":27},"end":{"row":0,"column":28}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":24},"end":{"row":44,"column":28}},"text":"true"},{"action":"insertText","range":{"start":{"row":44,"column":24},"end":{"row":44,"column":25}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":25},"end":{"row":44,"column":26}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":26},"end":{"row":44,"column":27}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":27},"end":{"row":44,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":28},"end":{"row":44,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":14},"end":{"row":23,"column":58}},"text":"<div id=\"onboard1\" class=\"onboardpip\"></div>"},{"action":"insertText","range":{"start":{"row":23,"column":14},"end":{"row":23,"column":15}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":14},"end":{"row":25,"column":58}},"text":"<div id=\"onboard2\" class=\"onboardpip\"></div>"},{"action":"insertText","range":{"start":{"row":25,"column":14},"end":{"row":25,"column":15}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":7}},"text":"\t\t\t\t\t\t,"},{"action":"removeLines","range":{"start":{"row":15,"column":0},"end":{"row":36,"column":0}},"nl":"\r\n","lines":["\t\t         {","\t\t\t\t\txtype : 'carousel',","\t\t\t\t\twidth:'100%',","\t\t\t\t\theight:'300px',","\t\t\t\t\tdefaults : {","\t\t\t\t\t\tstyleHtmlContent : true","\t\t\t\t\t},","\t\t\t\t\titems : [ {","\t\t\t\t\t\thtml : '1'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '2'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard3\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard4\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard5\" class=\"onboardpip\"></div>'","\t\t\t\t\t}, {","\t\t\t\t\t\thtml : '<div id=\"onboard6\" class=\"onboardpip\"></div>'","\t\t\t\t\t} ]","\t\t\t\t}"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":21}},"text":"qf-app-01"},{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":19}},"text":"qfApp01"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":19},"end":{"row":0,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1403208297879,"hash":"17be932f0a554b43f504159356ee5109fd0828a5"}