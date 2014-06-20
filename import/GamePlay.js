Ext.define('qfApp01.view.GamePlay', {
	extend : 'Ext.Panel',
	xtype : 'gameplayview',
	id : 'gameplayview',

		var header = new Ext.Container({
				id : 'ingameheader',
				cls : 'in  gameheader',
				layout : {
					type : 'hbox',
					pack : 'center',
					align : 'center',
					docked : 'top'
				},

				items : [{
						cls : 'you',
						html : '<div class="portimg" style="background:url(\'' + usersImage + '\') no-repeat left top;background-size: 35px 35px;"></div><div class="name">' + funcNameFormat(userName) + '</div><div class="coins">' + QF.app.yourcoinbalance + '</div>'
					}, {
						id : 'roundcounter',
						html : '1/5'
					}, {
						cls : 'opponent',
						html : '<div class="portimg" style="background:url(\'' + usersImage + '\') no-repeat left top;background-size: 35px 35px;"></div><div class="name">' + funcNameFormat(userName) + '</div>'
					}
				]
			});

		var quizpane = new Ext.Container({
				cls : 'quizinplay',
				layout : {
					type : 'hbox',
					pack : 'center',
					align : 'center'
				},
				html : '<div class="maintitle">Animals & Nature</div><div class="subtitle">Insect & Bugs</div><div id="playcounter">3</div>'
			});

		var multipleimage = new Ext.Container({
				id : 'gamemultipleimg', 
				// image question template
				items : [{
						cls : 'questionbubble',
						html : 'Which animal is named \'Anas Platyrhynchos\' in Latin?<div class="fin"></div>'
					},
					{
						id : 'mimg_answer1',
						xtype : 'button',
						correct : 'false',
						cls : 'answerimgbtn',
						style : 'background:url(\'resources/questionimages/parrot.jpg\') no-repeat center;background-size: 135px 94px;',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 2);
								// answer question temp function
							}
						}
					}, {
						id : 'mimg_answer2',
						xtype : 'button',
						correct : 'true',
						cls : 'answerimgbtn',
						style : 'background:url(\'resources/questionimages/duck.jpg\') no-repeat center;background-size: 135px 94px;',
						listeners : {
							tap : function () {

								answerfunc(this.correct, 2);
								// answer question temp function
							}
						}
					}, {
						id : 'mimg_answer3',
						xtype : 'button',
						correct : 'false',
						cls : 'answerimgbtn',
						style : 'background:url(\'resources/questionimages/blackbird.jpg\') no-repeat center;background-size: 135px 94px;',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 2);
								// answer question temp function
							}
						}
					}, {
						id : 'mimg_answer4',
						xtype : 'button',
						correct : 'false',
						cls : 'answerimgbtn',
						style : 'background:url(\'resources/questionimages/parrot2.jpg\') no-repeat center;background-size: 135px 94px;',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 2);
								// answer question temp function
							}
						}
					}
				]
			});

		var image = new Ext.Container({ 
		// image question
				id : 'gameimage',
				layout : {
					type : 'vbox',
					pack : 'center',
					align : 'center'
				},
				items : [{
						cls : 'questionimage',
						html : '<div class="wrapper" style="background-image:url(\'resources/questionimages/parrot.jpg\')"><div class="imagebubble">What type of animal is pictured below?<div class="fin"></div></div></div>'
					}, {
						id : 'img_answer1',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Albatross',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 3);
								// answer question temp function
							}
						}
					}, {
						id : 'img_answer2',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Chicken',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 3);
								// answer question temp function
							}
						}
					}, {
						id : 'img_answer3',
						xtype : 'button',
						correct : 'true',
						cls : 'answerbtn',
						html : 'Parrot',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 3);
								// answer question temp function
							}
						}
					}, {
						id : 'img_answer4',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Kingfisher',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 3);
								// answer question temp function
							}
						}
					}
				]
			});

		var multiple = new Ext.Container({ 
		// multiple text question template
				id : 'gamemultiple',
				items : [{
						cls : 'questionbubble',
						html : 'Liza Minnelli stars as \'Lucille 2\', rival to one of which series?<div class="fin"></div>'
					}, {
						id : 'answer1',
						xtype : 'button',
						correct : 'true',
						cls : 'answerbtn',
						html : 'Arrested Development',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 4);
								// answer question temp function
							}
						}
					}, {
						id : 'answer2',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Curb Your Entusiasm',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 4);
								// answer question temp function
							}
						}
					}, {
						id : 'answer3',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Frasier',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 4);
								// answer question temp function
							}
						}
					}, {
						id : 'answer4',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn',
						html : 'Seinfeld',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 4);
								// answer question temp function
							}
						}
					}
				]
			});

		var truefalse = new Ext.Container({ 
		// 50/50 template
				id : 'gametruefalse',
				items : [{
						cls : 'questionbubble',
						html : 'The capital city of Brazil is Rio de Janeiro?<div class="fin"></div>'
					}, {
						id : 'answertrue',
						xtype : 'button',
						correct : 'false',
						cls : 'answerbtn big',
						html : 'True',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 5);
								// answer question temp function
							}
						}
					}, {
						id : 'answerfalse',
						xtype : 'button',
						correct : 'true',
						cls : 'answerbtn big',
						html : 'False',
						listeners : {
							tap : function () {
								answerfunc(this.correct, 5);
								// answer question temp function
							}
						}
					}
				]
			});

		var gamebody = new Ext.Container({
				id : 'gamebody',
				flex : 1
			});

		gamebody.add(quizpane);
		// add quiz count down

		Ext.Function.defer(function () {
			$('#playcounter').gfxFadeOut('', function () {
				$('#playcounter').html('2');
				$('#playcounter').gfxFadeIn('', function () {
					Ext.Function.defer(function () {
						$('#playcounter').gfxFadeOut('', function () {
							$('#playcounter').html('1');
							$('#playcounter').gfxFadeIn('', function () {
								Ext.Function.defer(function () {

									$('#gamebody').gfxFadeOut('', function () {
										quizpane.destroy();
										gamebody.add(multipleimage);

										$('#gamebody').gfxFadeIn('', function () {
											canvasPieTimer.resetPie(500);
											//start timer
										}, 500);
									}, 500);
									// animate count down then load first question here

								}, 500);
							});
						});
					}, 500);
				});
			});
		}, 1000);

		var footer = new Ext.Container({
				id : 'ingamefooter',
				cls : 'ingamefooter',
				layout : {
					type : 'hbox',
					pack : 'center',
					align : 'center',
					docked : 'bottom'
				},
				listeners : {
					painted : function () {
						canvasPieTimer.init(46, "piecanvas", "counter", "time");
						canvasPieTimer.pausePie();
					}
				},
				items : [{
						id : 'counter',
						html : '<div id="time">500</div>'
					},
					{
						xtype : 'button',
						cls : 'footerbtn',
						id : 'revealbtn',
						html : '<div class="coins">50</div>',
						listeners : {
							tap : function () {}
						}
					}, {
						xtype : 'button',
						cls : 'footerbtn',
						id : 'fiftyfiftybtn',
						html : '<div class="coins">25</div>',
						listeners : {
							tap : function () {}
						}
					}, {
						xtype : 'button',
						cls : 'footerbtn',
						id : 'askbtn',
						html : '<div class="coins">10</div>',
						listeners : {
							tap : function () {}
						}
					}

				]
			});

		me.add(header);
		me.add(gamebody);
		me.add(footer);

		function answerfunc(correct, arrayindex) {
			// ##### temp function to deal with demo of the template and add fade animations
			var newquestion = new Ext.Container();
			var bodyitems = gamebody.getInnerItems();
			var roundcounter = Ext.select('#roundcounter');
			canvasPieTimer.pausePie();

			if (correct == 'true') {
				//answered correctly
				var correctoverlay = new Ext.Container({
						cls : 'correctoverlay'
					});
				me.add(correctoverlay);
				Ext.Function.defer(function () {
					$('#gamebody .x-inner').first().gfxFadeOut('', function () {
						$('.correctoverlay').gfxFadeOut('', function () {
							correctoverlay.destroy();

							for (i in bodyitems) {
								bodyitems[i].destroy();
								// destroy all questions
							}

							if (arrayindex == 2) {
								newquestion.add(image);
								// add image question

							} else if (arrayindex == 3) {
								newquestion.add(multiple);
								// add multiple question
							} else if (arrayindex == 4) {
								newquestion.add(truefalse);
								// add 50/50 question	
							} else if (arrayindex == 5) {

								Ext.Viewport.fireEvent('loadViewEventGlobal', this, 'StartHubOnline', 'connected', 'connected', ['settings', 'shop'], ['home', 'help'], 'sunburst2');
								// load start hubExt.Viewport.fireEvent('loadViewEventGlobal', this, 'StartHubOnline', 'connected', 'connected', ['settings', 'shop'], ['home', 'help'], 'sunburst2');

							}

							roundcounter.setHtml(arrayindex + '/5');
							gamebody.add(newquestion);
							$('#gamebody .x-inner').gfxFadeIn('', function () {
								canvasPieTimer.resetPie(500);
								//reset and start pie timer
							});

						});
					});
				}, 500);

			} else {
				//answered incorrectly
				var incorrectoverlay = new Ext.Container({
						cls : 'incorrectoverlay'
					});

				me.add(incorrectoverlay);
				Ext.Function.defer(function () {
					$('#gamebody .x-inner').first().gfxFadeOut('', function () {

						$('.incorrectoverlay').gfxFadeOut('', function () {

							incorrectoverlay.destroy();
							for (i in bodyitems) {
								bodyitems[i].destroy();
								// destroy all questions
							}

							if (arrayindex == 2) {
								newquestion.add(image);
								// add image question

							} else if (arrayindex == 3) {
								newquestion.add(multiple);
								// add multiple question
							} else if (arrayindex == 4) {
								newquestion.add(truefalse);
								// add 50/50 question	
							} else if (arrayindex == 5) {

								Ext.Viewport.fireEvent('loadViewEventGlobal', this, 'StartHubOnline', 'connected', 'connected', ['settings', 'shop'], ['home', 'help'], 'sunburst2');
								// load start hub

							}
							roundcounter.setHtml(arrayindex + '/5');
							gamebody.add(newquestion);
							$('#gamebody .x-inner').gfxFadeIn('', function () {
								canvasPieTimer.resetPie(500);
								//reset and start pie timer
							});
						});

					});
				}, 500);
			}

		}

	},
	config : {
		cls : 'viewdefault',
		flex : 1,
		scrollable : false,
		height : '100%',
		padding : '0',
		layout : {
			type : 'vbox',
			pack : 'start',
			align : 'center'
		}
	}

});
