//Object de sons
var sounds = new function(){
	this.impact = new Audio("sound/impact.wav");
	this.bullet = new Audio("sound/playerattack.wav");
	this.gold = new Audio("sound/gold.wav");
	this.enemyDeath = new Audio("sound/enemydeath.wav");
	this.playerDmg = new Audio("sound/playerdmg.wav");
};
//Object d'images
var imageTool = new function() {
	this.loading = new Image();
	//Minimap
	this.visited = new Image();
	this.unvisited = new Image();
	this.current = new Image();
	this.boss = new Image();
	this.shop = new Image();
	this.treasure = new Image();
	this.secret = new Image();
	//Game
	this.keyholeU = new Image();
	this.keyholeD = new Image();
	this.keyholeL = new Image();
	this.keyholeR = new Image();
	this.shopKeyholeU = new Image();
	this.shopKeyholeD = new Image();
	this.shopKeyholeL = new Image();
	this.shopKeyholeR = new Image();
	this.spacer = new Image();
	this.tutorial = new Image();
	this.ui = new Image();
	this.background = new Image();
	this.secretbackground = new Image();
	this.bossroombackground = new Image();
	this.secondfloor = new Image();
	this.pauseScreen = new Image();
	this.blackScreen = new Image();
	this.hp = new Image();
	this.halfHp = new Image();
	this.ap = new Image();
	this.halfAp = new Image();
	this.emptyHp = new Image();
	this.playerDead = new Image();
	this.playerDown = new Image();
	this.playerLeft = new Image();
	this.playerUp = new Image();
	this.playerRight = new Image();
	this.playerDownS = new Image();
	this.playerLeftS = new Image();
	this.playerUpS = new Image();
	this.playerRightS = new Image();
	this.playerBullet = new Image();
	this.pBulletAnim = new Image();
	this.eBulletAnim = new Image();
	this.bulletNumberOne= new Image();
	this.animNumberOne= new Image();
	this.explosion = new Image();
	this.explosionmark = new Image();
	this.project = new Image();
	this.projectEye = new Image();
	this.projectLimb1 = new Image();
	this.projectLimb2 = new Image();
	this.projectLimb3 = new Image();
	this.duke = new Image();
	this.dukehit = new Image();
	this.dukeFlyAnim = new Image();
	this.dukeSwarmAnim = new Image();
	this.fly = new Image();
	this.fly1 = new Image();
	this.flyAnim = new Image();
	this.pooterLeft = new Image();
	this.pooterRight = new Image();
	this.pooterHit = new Image();
	this.flyHit = new Image();
	this.towerHit = new Image();
	this.tower = new Image();
	this.enemyBullet = new Image();
	this.block = new Image();
	this.block1 = new Image();
	this.block2 = new Image();
	this.xblock = new Image();
	this.glue = new Image();
	this.hole = new Image();
	this.shadow = new Image();
	this.blood1 = new Image();
	this.blood2 = new Image();
	this.blood3 = new Image();
	this.bloodRoom = new Image();
	this.bossBar = new Image();
	this.bossBg = new Image();
	this.bossHp = new Image();
	this.bossHpHit = new Image();
	this.bloodAnim = new Image();
	this.playerloot = new Image();
	this.bodyAnim = new Image();
	this.bodyRight = new Image();
	this.bodyLeft = new Image();
	this.bodyIdle = new Image();
	this.eBodyIdle = new Image();
	this.eBodyRight = new Image();
	this.eBodyLeft = new Image();
	this.mulliganhead = new Image();
	this.mulliganheadhit = new Image();
	this.hitBox = new Image();
	this.doorL = new Image();
	this.doorR = new Image();
	this.doorU = new Image();
	this.doorD = new Image();
	this.TdoorL = new Image();
	this.TdoorR = new Image();
	this.TdoorU = new Image();
	this.TdoorD = new Image();
	this.BdoorL = new Image();
	this.BdoorR = new Image();
	this.BdoorU = new Image();
	this.BdoorD = new Image();
	this.doorLclosed = new Image();
	this.doorRclosed = new Image();
	this.doorUclosed = new Image();
	this.doorDclosed = new Image();
	this.doorLopen = new Image();
	this.doorRopen = new Image();
	this.doorUopen = new Image();
	this.doorDopen = new Image();
	this.secretL= new Image();
	this.secretR= new Image();
	this.secretU= new Image();
	this.secretD= new Image();
	this.bossBg = new Image();
	this.spiderIdleAnim = new Image();
	this.spiderMoveAnim = new Image();
	this.spiderHit = new Image();
	this.spiderButt = new Image();
	this.spiderButtHit = new Image();
	this.clotty = new Image();
	this.clottyhitleft = new Image();
	this.clottyhitright = new Image();
	this.clottyattack = new Image();
	this.clottyfront = new Image();
	this.clottyright = new Image();
	this.clottyleft = new Image();
	this.maggotfront = new Image();
	this.maggotdown = new Image();
	this.maggotright = new Image();
	this.maggotleft = new Image();
	this.maggothitside = new Image();
	this.maggothitfront = new Image();
	this.poop1 = new Image();
	this.poop2 = new Image();
	this.poop3 = new Image();
	this.poop4 = new Image();
	this.poop5 = new Image();
	this.poopAnim = new Image();
	this.fireon = new Image();
	this.fireoff = new Image();
	this.fireplace = new Image();
	this.hellfireplace = new Image();
	this.barrel1 = new Image();
	this.barrel2 = new Image();
	this.barrel3 = new Image();
	this.barrel4 = new Image();
	this.deathlight = new Image();
	this.gameover = new Image();
	this.shopkeeper1 = new Image();
	this.shopkeeper2 = new Image();
	this.shopkeeper3 = new Image();
	this.shopkeeper4 = new Image();
	this.shopkeeper5 = new Image();
	this.shopkeeper6 = new Image();
	this.shopkeeper7 = new Image();
	this.shopkeeper8 = new Image();
	this.shopkeeper9 = new Image();
	//ITEMS
	this.chest = new Image();
	this.trapdoor = new Image();
	this.coin = new Image();
	this.bomb = new Image();
	this.armor = new Image();
	this.health = new Image();
	this.halfhealth = new Image();
	this.nickel = new Image();
	this.dime = new Image();
	this.key = new Image();
	this.boom = new Image();
	this.breakfast = new Image();
	this.bucketoflard = new Image();
	this.dessert = new Image();
	this.dinner = new Image();
	this.growthhormones = new Image();
	this.jesusjuice= new Image();
	this.lunch = new Image();
	this.magicmushroom = new Image();
	this.maxshead = new Image();
	this.meat  = new Image();
	this.minimushroom  = new Image();
	this.momsheels  = new Image();
	this.momslipstick  = new Image();
	this.momsunderwear  = new Image();
	this.numberone  = new Image();
	this.pyro  = new Image();
	this.rawliver  = new Image();
	this.redheart  = new Image();
	this.roidrage  = new Image();
	this.rottenmeat  = new Image();
	this.skeletonkey  = new Image();
	this.speedball  = new Image();
	this.thebelt  = new Image();
	this.thehalo  = new Image();
	this.thesadonion  = new Image();
	this.thesmallrock  = new Image();
	this.toothpicks  = new Image();
	this.wirecoathanger  = new Image();
	this.woodenspoon  = new Image();
	this.wiggleworm  = new Image();
	this.thecompass  = new Image();
	this.treasuremap  = new Image();
	this.price3  = new Image();
	this.price5  = new Image();
	this.price15  = new Image();
	
	//DÉTAILS
	
	this.toothpicksfront = new Image();
	this.toothpicksside = new Image();
	//Préchargement
	numImages = 206;
	numLoaded = 0;
	
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {gameInit(); loading(false);}
		else loading(true); }
		
	this.loading.onload = function() {imageLoaded();}
	
	this.visited.onload = function() {imageLoaded();}
	this.unvisited.onload = function() {imageLoaded();}
	this.current.onload = function() {imageLoaded();}
	this.boss.onload = function() {imageLoaded();}
	this.shop.onload = function() {imageLoaded();}
	this.treasure.onload = function() {imageLoaded();}
	this.secret.onload = function() {imageLoaded();}
	
	this.keyholeU.onload = function() {imageLoaded();}
	this.keyholeD.onload = function() {imageLoaded();}
	this.keyholeL.onload = function() {imageLoaded();}
	this.keyholeR.onload = function() {imageLoaded();}
	this.shopKeyholeU.onload = function() {imageLoaded();}
	this.shopKeyholeD.onload = function() {imageLoaded();}
	this.shopKeyholeL.onload = function() {imageLoaded();}
	this.shopKeyholeR.onload = function() {imageLoaded();}
	this.spacer.onload = function() {imageLoaded();}
	this.tutorial.onload = function() {imageLoaded();}
	this.ui.onload = function() {imageLoaded();}
	this.secondfloor.onload = function() {imageLoaded();}
	this.background.onload = function() {imageLoaded();}
	this.secretbackground.onload = function() {imageLoaded();}
	this.bossroombackground.onload = function() {imageLoaded();}
	this.pauseScreen.onload = function() {imageLoaded();}
	this.blackScreen.onload = function() {imageLoaded();}
	this.hp.onload = function() {imageLoaded();}
	this.halfHp.onload = function() {imageLoaded();}
	this.ap.onload = function() {imageLoaded();}
	this.halfAp.onload = function() {imageLoaded();}
	this.emptyHp.onload = function() {imageLoaded();}
	this.playerDead.onload = function() {imageLoaded();}
	this.playerDown.onload = function() {imageLoaded();}
	this.playerLeft.onload = function() {imageLoaded();}
	this.playerUp.onload = function() {imageLoaded();}
	this.playerRight.onload = function() {imageLoaded();}
	this.playerDownS.onload = function() {imageLoaded();}
	this.playerLeftS.onload = function() {imageLoaded();}
	this.playerUpS.onload = function() {imageLoaded();}
	this.playerRightS.onload = function() {imageLoaded();}
	this.playerBullet.onload = function() {imageLoaded();}
	this.pBulletAnim.onload = function() {imageLoaded();}
	this.eBulletAnim.onload = function() {imageLoaded();}
	this.bulletNumberOne.onload = function() {imageLoaded();}
	this.animNumberOne.onload = function() {imageLoaded();}
	this.explosion.onload = function() {imageLoaded();}
	this.explosionmark.onload = function() {imageLoaded();}
	this.project.onload = function() {imageLoaded();}
	this.projectEye.onload = function() {imageLoaded();}
	this.projectLimb1.onload = function() {imageLoaded();}
	this.projectLimb2.onload = function() {imageLoaded();}
	this.projectLimb3.onload = function() {imageLoaded();}
	this.duke.onload = function() {imageLoaded();}
	this.dukehit.onload = function() {imageLoaded();}
	this.dukeFlyAnim.onload = function() {imageLoaded();}
	this.dukeSwarmAnim.onload = function() {imageLoaded();}
	this.fly.onload = function() {imageLoaded();}
	this.fly1.onload = function() {imageLoaded();}
	this.flyAnim.onload = function() {imageLoaded();}
	this.pooterLeft.onload = function() {imageLoaded();}
	this.pooterRight.onload = function() {imageLoaded();}
	this.pooterHit.onload = function() {imageLoaded();}
	this.flyHit.onload = function() {imageLoaded();}
	this.towerHit.onload = function() {imageLoaded();}
	this.tower.onload = function() {imageLoaded();}
	this.enemyBullet.onload = function() {imageLoaded();}
	this.block.onload = function() {imageLoaded();}
	this.block1.onload = function() {imageLoaded();}
	this.block2.onload = function() {imageLoaded();}
	this.xblock.onload = function() {imageLoaded();}
	this.glue.onload = function() {imageLoaded();}
	this.hole.onload = function() {imageLoaded();}
	this.shadow.onload = function() {imageLoaded();}
	this.blood1.onload = function() {imageLoaded();}
	this.blood2.onload = function() {imageLoaded();}
	this.blood3.onload = function() {imageLoaded();}
	this.bloodRoom.onload = function() {imageLoaded();}
	this.bloodAnim.onload = function() {imageLoaded();}
	this.playerloot.onload = function() {imageLoaded();}
	this.bodyAnim.onload = function() {imageLoaded();}
	this.bodyRight.onload = function() {imageLoaded();}
	this.bodyLeft.onload = function() {imageLoaded();}
	this.bodyIdle.onload = function() {imageLoaded();}
	this.eBodyIdle.onload = function() {imageLoaded();}
	this.eBodyRight.onload = function() {imageLoaded();}
	this.eBodyLeft.onload = function() {imageLoaded();}
	this.mulliganhead.onload = function() {imageLoaded();}
	this.mulliganheadhit.onload = function() {imageLoaded();}
	this.hitBox.onload = function() {imageLoaded();}
	this.doorL.onload = function() {imageLoaded();}
	this.doorR.onload = function() {imageLoaded();}
	this.doorU.onload = function() {imageLoaded();}
	this.doorD.onload = function() {imageLoaded();}
	this.BdoorL.onload = function() {imageLoaded();}
	this.BdoorR.onload = function() {imageLoaded();}
	this.BdoorU.onload = function() {imageLoaded();}
	this.BdoorD.onload = function() {imageLoaded();}
	this.TdoorL.onload = function() {imageLoaded();}
	this.TdoorR.onload = function() {imageLoaded();}
	this.TdoorU.onload = function() {imageLoaded();}
	this.TdoorD.onload = function() {imageLoaded();}
	this.doorUclosed.onload = function() {imageLoaded();}
	this.doorDclosed.onload = function() {imageLoaded();}
	this.doorLclosed.onload = function() {imageLoaded();}
	this.doorRclosed.onload = function() {imageLoaded();}
	this.doorLopen.onload = function() {imageLoaded();}
	this.doorRopen.onload = function() {imageLoaded();}
	this.doorUopen.onload = function() {imageLoaded();}
	this.doorDopen.onload = function() {imageLoaded();}
	this.secretL.onload = function() {imageLoaded();}
	this.secretR.onload = function() {imageLoaded();}
	this.secretU.onload = function() {imageLoaded();}
	this.secretD.onload = function() {imageLoaded();}
	this.bossBar.onload = function() {imageLoaded();}
	this.bossBg.onload = function() {imageLoaded();}
	this.bossHp.onload = function() {imageLoaded();}
	this.bossHpHit.onload = function() {imageLoaded();}
	this.spiderIdleAnim.onload = function() {imageLoaded();}
	this.spiderMoveAnim.onload = function() {imageLoaded();}
	this.spiderHit.onload = function() {imageLoaded();}
	this.spiderButt.onload = function() {imageLoaded();}
	this.spiderButtHit.onload = function() {imageLoaded();}
	this.clotty.onload = function() {imageLoaded();}
	this.clottyhitleft.onload = function() {imageLoaded();}
	this.clottyhitright.onload = function() {imageLoaded();}
	this.clottyattack.onload = function() {imageLoaded();}
	this.clottyfront.onload = function() {imageLoaded();}
	this.clottyright.onload = function() {imageLoaded();}
	this.clottyleft.onload = function() {imageLoaded();}
	this.maggotfront.onload = function() {imageLoaded();}
	this.maggotdown.onload = function() {imageLoaded();}
	this.maggotright.onload = function() {imageLoaded();}
	this.maggotleft.onload = function() {imageLoaded();}
	this.maggothitside.onload = function() {imageLoaded();}
	this.maggothitfront.onload = function() {imageLoaded();}
	this.poop1.onload = function() {imageLoaded();}
	this.poop2.onload = function() {imageLoaded();}
	this.poop3.onload = function() {imageLoaded();}
	this.poop4.onload = function() {imageLoaded();}
	this.poop5.onload = function() {imageLoaded();}
	this.poopAnim.onload = function() {imageLoaded();}
	this.fireon.onload = function() {imageLoaded();}
	this.fireoff.onload = function() {imageLoaded();}
	this.fireplace.onload = function() {imageLoaded();}
	this.hellfireplace.onload = function() {imageLoaded();}
	this.barrel1.onload = function() {imageLoaded();}
	this.barrel2.onload = function() {imageLoaded();}
	this.barrel3.onload = function() {imageLoaded();}
	this.barrel4.onload = function() {imageLoaded();}
	this.deathlight.onload = function() {imageLoaded();}
	this.gameover.onload = function() {imageLoaded();}
	this.shopkeeper1.onload = function() {imageLoaded();}
	this.shopkeeper2.onload = function() {imageLoaded();}
	this.shopkeeper3.onload = function() {imageLoaded();}
	this.shopkeeper4.onload = function() {imageLoaded();}
	this.shopkeeper5.onload = function() {imageLoaded();}
	this.shopkeeper6.onload = function() {imageLoaded();}
	this.shopkeeper7.onload = function() {imageLoaded();}
	this.shopkeeper8.onload = function() {imageLoaded();}
	this.shopkeeper9.onload = function() {imageLoaded();}
	//ITEMS
	this.chest.onload = function() {imageLoaded();}
	this.trapdoor.onload = function() {imageLoaded();}
	this.coin.onload = function() {imageLoaded();}
	this.bomb.onload = function() {imageLoaded();}
	this.armor.onload = function() {imageLoaded();}
	this.health.onload = function() {imageLoaded();}
	this.halfhealth.onload = function() {imageLoaded();}
	this.nickel.onload = function() {imageLoaded();}
	this.dime.onload = function() {imageLoaded();}
	this.key.onload = function() {imageLoaded();}
	this.boom.onload = function() {imageLoaded();}
	this.breakfast.onload = function() {imageLoaded();}
	this.bucketoflard.onload = function() {imageLoaded();}
	this.dessert.onload = function() {imageLoaded();}
	this.dinner.onload = function() {imageLoaded();}
	this.growthhormones.onload = function() {imageLoaded();}
	this.jesusjuice.onload = function() {imageLoaded();}
	this.lunch.onload = function() {imageLoaded();}
	this.magicmushroom.onload = function() {imageLoaded();}
	this.maxshead.onload = function() {imageLoaded();}
	this.meat.onload = function() {imageLoaded();}
	this.minimushroom.onload = function() {imageLoaded();}
	this.momsheels.onload = function() {imageLoaded();}
	this.momslipstick.onload = function() {imageLoaded();}
	this.momsunderwear.onload = function() {imageLoaded();}
	this.numberone.onload = function() {imageLoaded();}
	this.pyro.onload = function() {imageLoaded();}
	this.rawliver.onload = function() {imageLoaded();}
	this.redheart.onload = function() {imageLoaded();}
	this.roidrage.onload = function() {imageLoaded();}
	this.rottenmeat.onload = function() {imageLoaded();}
	this.skeletonkey.onload = function() {imageLoaded();}
	this.speedball.onload = function() {imageLoaded();}
	this.thebelt.onload = function() {imageLoaded();}
	this.thehalo.onload = function() {imageLoaded();}
	this.thesadonion.onload = function() {imageLoaded();}
	this.thesmallrock.onload = function() {imageLoaded();}
	this.toothpicks.onload = function() {imageLoaded();}
	this.wirecoathanger.onload = function() {imageLoaded();}
	this.woodenspoon.onload = function() {imageLoaded();}
	this.wiggleworm.onload = function() {imageLoaded();}
	this.thecompass.onload = function() {imageLoaded();}
	this.treasuremap.onload = function() {imageLoaded();}
	this.price3.onload = function() {imageLoaded();}
	this.price5.onload = function() {imageLoaded();}
	this.price15.onload = function() {imageLoaded();}
	
	//DÉTAILS
	
	this.toothpicksfront.onload = function() {imageLoaded();}
	this.toothpicksside.onload = function() {imageLoaded();}
	
	//Sources
	this.loading.src = "img/loading.png";
	
	this.visited.src = "img/minimap/visited.png";
	this.unvisited.src = "img/minimap/unvisited.png";
	this.current.src = "img/minimap/current.png";
	this.boss.src = "img/minimap/boss.png";
	this.shop.src = "img/minimap/shop.png";
	this.treasure.src = "img/minimap/treasure.png";
	this.secret.src = "img/minimap/secret.png";
	
	this.keyholeU.src = "img/keyholeup.png";
	this.keyholeD.src = "img/keyholedown.png";
	this.keyholeL.src = "img/keyholeleft.png";
	this.keyholeR.src = "img/keyholeright.png";
	this.shopKeyholeU.src = "img/shopkeyholeup.png";
	this.shopKeyholeD.src = "img/shopkeyholedown.png";
	this.shopKeyholeL.src = "img/shopkeyholeleft.png";
	this.shopKeyholeR.src = "img/shopkeyholeright.png";
	this.spacer.src = "img/0.png";
	this.tutorial.src = "img/tutorial.png";
	this.ui.src = "img/ui.png";
	this.background.src = "img/bg.png";
	this.secretbackground.src = "img/secretbg.png";
	this.bossroombackground.src = "img/bossroombg.png";
	this.secondfloor.src = "img/secondfloorbg.png";
	this.pauseScreen.src = "img/pause.png";
	this.blackScreen.src = "img/screen.png";
	this.hp.src = "img/hp.png";
	this.halfHp.src = "img/halfhp.png";
	this.ap.src = "img/armor.png";
	this.halfAp.src = "img/halfarmor.png";
	this.emptyHp.src = "img/emptyhp.png";
	this.towerHit.src = "img/towerhit.png";
	this.project.src = "img/project.png";
	this.projectEye.src = "img/projecteye.png";
	this.projectLimb1.src = "img/projectlimb1.png";
	this.projectLimb2.src = "img/projectlimb2.png";
	this.projectLimb3.src = "img/projectlimb3.png";
	this.duke.src = "img/duke.png";
	this.dukehit.src = "img/dukehit.png";
	this.dukeFlyAnim.src = "img/dukeflyanim.png";
	this.dukeSwarmAnim.src = "img/dukeswarmanim.png";
	this.fly.src = "img/fly.png";
	this.fly1.src = "img/fly1.png";
	this.flyAnim.src = "img/flyanim.png";
	this.pooterLeft.src = "img/pooterleft.png";
	this.pooterRight.src = "img/pooterright.png";
	this.pooterHit.src = "img/pooterhit.png";
	this.flyHit.src = "img/flyhit.png";
	this.playerDead.src = "img/playerdead.png";
	this.playerDown.src = "img/player.png";
	this.playerLeft.src = "img/player1.png";
	this.playerUp.src = "img/player2.png";
	this.playerRight.src = "img/player3.png";
	this.playerDownS.src = "img/player_s.png";
	this.playerLeftS.src = "img/player1_s.png";
	this.playerUpS.src = "img/player2_s.png";
	this.playerRightS.src = "img/player3_s.png";
	this.playerBullet.src = "img/bullet.png";
	this.pBulletAnim.src = "img/pbulletanim.png";
	this.bulletNumberOne.src = "img/bulletnumberone.png";
	this.animNumberOne.src = "img/numberonebulletanim.png";
	this.eBulletAnim.src = "img/ebulletanim.png";
	this.explosion.src = "img/explosion.png";
	this.explosionmark.src = "img/explosionmark.png";
	this.tower.src = "img/tower.png";
	this.enemyBullet.src = "img/enemybullet.png";
	this.block.src = "img/block.png";
	this.block1.src = "img/block1.png";
	this.block2.src = "img/block2.png";
	this.xblock.src = "img/block3.png";
	this.glue.src = "img/glue.png";
	this.hole.src = "img/hole.png";
	this.shadow.src = "img/shadow.png";
	this.blood1.src = "img/blood1.png";
	this.blood2.src = "img/blood2.png";
	this.blood3.src = "img/blood3.png";
	this.bloodRoom.src = "img/bloodroom.png";
	this.bloodAnim.src = "img/bloodanimation.png";
	this.playerloot.src = "img/playerloot.png";
	this.bodyAnim.src = "img/bodyanimation.png";
	this.bodyRight.src = "img/bodyanimationright.png";
	this.bodyLeft.src = "img/bodyanimationleft.png";
	this.bodyIdle.src = "img/bodyidle.png";
	this.eBodyIdle.src = "img/ebodyidle.png";
	this.eBodyRight.src = "img/ebodyanimationright.png";
	this.eBodyLeft.src = "img/ebodyanimationleft.png";
	this.mulliganhead.src = "img/mulliganhead.png";
	this.mulliganheadhit.src = "img/mulliganheadhit.png";
	this.hitBox.src = "img/hit.png";
	this.doorL.src = "img/doorleft.png";
	this.doorR.src = "img/doorright.png";
	this.doorU.src = "img/doorup.png";
	this.doorD.src = "img/doordown.png";
	this.TdoorL.src = "img/treasuredoorleft.png";
	this.TdoorR.src = "img/treasuredoorright.png";
	this.TdoorU.src = "img/treasuredoorup.png";
	this.TdoorD.src = "img/treasuredoordown.png";
	this.BdoorL.src = "img/bossdoorleft.png";
	this.BdoorR.src = "img/bossdoorright.png";
	this.BdoorU.src = "img/bossdoorup.png";
	this.BdoorD.src = "img/bossdoordown.png";
	this.doorUclosed.src = "img/closeddoorup.png";
	this.doorDclosed.src = "img/closeddoordown.png";
	this.doorLclosed.src = "img/closeddoorleft.png";
	this.doorRclosed.src = "img/closeddoorright.png";
	this.doorLopen.src = "img/openleft.png";
	this.doorRopen.src = "img/openright.png";
	this.doorUopen.src = "img/openup.png";
	this.doorDopen.src = "img/opendown.png";
	this.secretL.src = "img/secretleft.png";
	this.secretR.src = "img/secretright.png";
	this.secretU.src = "img/secretup.png";
	this.secretD.src = "img/secretdown.png";
	this.bossBar.src = "img/bossbar.png";
	this.bossBg.src = "img/bossbg.png";
	this.bossHp.src = "img/bosshp.png";
	this.bossHpHit.src = "img/bosshphit.png";
	this.spiderIdleAnim.src = "img/spideridleanim.png";
	this.spiderMoveAnim.src = "img/spidermoveanim.png";
	this.spiderHit.src = "img/spiderhit.png";
	this.spiderButt.src = "img/spiderbutt.png";
	this.spiderButtHit.src = "img/spiderbutthit.png";
	this.clotty.src = "img/clotty.png";
	this.clottyhitleft.src = "img/clottyhitleft.png";
	this.clottyhitright.src = "img/clottyhitright.png";
	this.clottyfront.src = "img/clottyfront.png";
	this.clottyattack.src = "img/clottyattack.png";
	this.clottyright.src = "img/clottyright.png";
	this.clottyleft.src = "img/clottyleft.png";
	this.maggotfront.src = "img/maggottop.png";
	this.maggotdown.src = "img/maggotdown.png";
	this.maggotright.src = "img/maggotright.png";
	this.maggotleft.src = "img/maggotleft.png";
	this.maggothitside.src = "img/maggothitside.png";
	this.maggothitfront.src = "img/maggothitfront.png";
	this.poop1.src = "img/poop1.png";
	this.poop2.src = "img/poop2.png";
	this.poop3.src = "img/poop3.png";
	this.poop4.src = "img/poop4.png";
	this.poop5.src = "img/poop5.png";
	this.poopAnim.src = "img/poopanimation.png";
	this.fireon.src = "img/fireon.png";
	this.fireoff.src = "img/fireoff.png";
	this.fireplace.src = "img/fireplace.png";
	this.hellfireplace.src = "img/hellfireplace.png";
	this.barrel1.src = "img/barrel1.png";
	this.barrel2.src = "img/barrel2.png";
	this.barrel3.src = "img/barrel3.png";
	this.barrel4.src = "img/barrel4.png";
	this.deathlight.src = "img/deathlight.png";
	this.gameover.src = "img/gameover.png";
	this.shopkeeper1.src = "img/sk1.png";
	this.shopkeeper2.src = "img/sk2.png";
	this.shopkeeper3.src = "img/sk3.png";
	this.shopkeeper4.src = "img/sk4.png";
	this.shopkeeper5.src = "img/sk5.png";
	this.shopkeeper6.src = "img/sk6.png";
	this.shopkeeper7.src = "img/sk7.png";
	this.shopkeeper8.src = "img/sk8.png";
	this.shopkeeper9.src = "img/sk9.png";
	//ITEMS
	this.chest.src = "img/chest.png";
	this.trapdoor.src = "img/items/trapdoor.png";
	this.coin.src = "img/items/coin.png";
	this.bomb.src = "img/items/bomb.png";
	this.armor.src = "img/items/armor.png";
	this.health.src = "img/items/health.png";
	this.halfhealth.src = "img/items/halfhealth.png";
	this.nickel.src = "img/items/nickel.png";
	this.dime.src = "img/items/dime.png";
	this.key.src = "img/items/key.png";
	this.boom.src = "img/items/boom.png";
	this.breakfast.src = "img/items/breakfast.png";
	this.bucketoflard.src = "img/items/bucketoflard.png";
	this.dessert.src = "img/items/dessert.png";
	this.dinner.src = "img/items/dinner.png";
	this.growthhormones.src = "img/items/growthhormones.png";
	this.jesusjuice.src = "img/items/jesusjuice.png";
	this.lunch.src = "img/items/lunch.png";
	this.magicmushroom.src = "img/items/magicmushroom.png";
	this.maxshead.src = "img/items/maxshead.png";
	this.meat.src = "img/items/meat.png";
	this.minimushroom.src = "img/items/minimushroom.png";
	this.momsheels.src = "img/items/momsheels.png";
	this.momslipstick.src = "img/items/momslipstick.png";
	this.momsunderwear.src = "img/items/momsunderwear.png";
	this.numberone.src = "img/items/numberone.png";
	this.pyro.src = "img/items/pyro.png";
	this.rawliver.src = "img/items/rawliver.png";
	this.redheart.src = "img/items/redheart.png";
	this.roidrage.src = "img/items/roidrage.png";
	this.rottenmeat.src = "img/items/rottenmeat.png";
	this.skeletonkey.src = "img/items/skeletonkey.png";
	this.speedball.src = "img/items/speedball.png";
	this.thebelt.src = "img/items/thebelt.png";
	this.thehalo.src = "img/items/thehalo.png";
	this.thesadonion.src = "img/items/thesadonion.png";
	this.thesmallrock.src = "img/items/thesmallrock.png";
	this.toothpicks.src = "img/items/toothpicks.png";
	this.wirecoathanger.src = "img/items/wirecoathanger.png";
	this.woodenspoon.src = "img/items/woodenspoon.png";
	this.wiggleworm.src = "img/items/wiggleworm.png";
	this.thecompass.src = "img/items/thecompass.png";
	this.treasuremap.src = "img/items/treasuremap.png";
	this.price3.src = "img/price3.png";
	this.price5.src = "img/price5.png";
	this.price15.src = "img/price15.png";
	
	//DÉTAILS
	
	this.toothpicksfront.src = "img/toothpicksfront.png";
	this.toothpicksside.src = "img/toothpicksside.png";
}
function Animation(maxframe,x,y,width,height,updatetime,spritesheet,offsetx,offsety,scale){
	this.frame= 0;
	this.maxFrame= maxframe;
	this.currentFrameTime=Date.now();
	this.lastFrameTime = Date.now();
	this.x= x;
	this.y= y;
	this.width=width;
	this.height=height;
	this.updateTime= updatetime;
	this.isOver = false;
	this.reset =function (){this.frame = 0;}
	this.update= function(ux,uy){
		this.currentFrameTime= Date.now();
			if(this.currentFrameTime - this.lastFrameTime > this.updateTime){
				this.frame++;
				if (this.frame > this.maxFrame) this.frame = 0;
				this.lastFrameTime=Date.now();}
			this.x = ux;
			this.y = uy;
	}
	this.draw= function(context){
		
		context.drawImage(spritesheet,  this.frame*this.width, 0, this.width, this.height, this.x+offsetx, this.y+offsety, this.width/2*scale, this.height/2*scale);
		
	}
	this.playOnce = function(context){
		this.currentFrameTime= Date.now();
			if(this.currentFrameTime - this.lastFrameTime > this.updateTime){
				this.frame++;
				if (this.frame > this.maxFrame) this.isOver = true;
				this.lastFrameTime=Date.now();}
			this.x = x;
			this.y = y;
	}
	this.drawOnce = function(context){
		context.drawImage(spritesheet,  this.frame*this.width, 0, this.width, this.height, this.x+offsetx, this.y+offsety, this.width*scale, this.height*scale);
	}
}
console.log('sprites.js loaded');