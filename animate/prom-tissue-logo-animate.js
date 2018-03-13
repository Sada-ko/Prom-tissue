(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNKEQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNI+QgGgGAAgIQAAgJAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNH4QgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNGyQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNFsQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNEmQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNDgQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNCaQgGgFAAgJQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNBUQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNAOQgGgFAAgJQAAgIAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNg3QgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNh9QgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNjDQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNkJQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNlPQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNmVQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNnbQgGgFAAgJQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNohQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNpnQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGg");
	this.shape.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-66.5,4,130);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343A40").s().p("AgNKEQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNI+QgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNH4QgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNGyQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNFsQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNEmQgGgFAAgJQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNDgQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNCaQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNBUQgGgGAAgIQAAgJAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNAOQgGgGAAgIQAAgHAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNg3QgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNh9QgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNjDQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNkJQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNlPQgGgFAAgJQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNmVQgGgGAAgIQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNnbQgGgFAAgJQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJQAAAJgGAFQgFAGgJAAQgIAAgFgGgAgNohQgGgGAAgIQAAgJAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAJQAAAIgGAGQgFAGgJAAQgIAAgFgGgAgNpnQgGgGAAgIQAAgIAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAIQAAAIgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-66.5,4,130);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.play();
	}
	this.frame_37 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(36).call(this.frame_37).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhSGGIAAsLIClAAIAAMLg");
	mask.setTransform(63.1,42.8);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(63.1,16.3);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,72.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.8},1).to({_off:true,x:63,y:72.6},36).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B81312").s().p("AgyBQQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAiVQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIBjAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIAAARQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIhKAAIAAAlIBEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAAAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIhEAAIAAAnIBLAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape.setTransform(209.6,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B81312").s().p("AgcBNQgMgEgJgIQgIgJgEgLQgEgMAAgOIAAheQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIATAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAABdQAAAJADAHQACAGAFAFQAEAEAHACQAGACAHAAQAHAAAHgCQAHgCAEgEQAFgFACgGQADgHAAgJIAAhdQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIATAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAABeQAAAOgEAMQgEALgJAJQgIAIgMAEQgNAFgQAAQgQAAgMgFg");
	this.shape_1.setTransform(185.8,56.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B81312").s().p("AgYBQQgLgDgJgGQgJgGgGgIQgFgIgBgLQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAQAAIAGABIAEAFIADAGQADADAEACQAEACAFACQAGABAIAAIANgBQAHgBAFgCQAFgDACgDQADgEAAgFQAAgFgDgDQgDgEgHgCIgQgEIgVgGQgMgCgIgEQgJgEgFgEQgGgGgDgHQgDgIAAgKQAAgKAFgJQAFgJAIgGQAIgGALgEQALgEANAAQAOAAAMAFQAMAEAIAGQAHAGAEAIQAEAHABAHQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgQAAIgGgBIgEgFQgDgFgHgFQgHgEgNAAIgLABQgGACgEACIgGAGQgDADAAAFQAAAFADADQACAEAFACIAOAFIAUAFQAOACAKAFQAKADAGAFQAGAGADAHQADAHAAAKQAAAKgEAJQgFAJgIAGQgJAHgMADQgNAEgPAAQgMAAgMgDg");
	this.shape_2.setTransform(162,56.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B81312").s().p("AgYBQQgLgDgJgGQgJgGgGgIQgFgIgBgLQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAQAAIAGABIAEAFIADAGQADADAEACQAEACAFACQAGABAIAAIANgBQAHgBAFgCQAFgDACgDQADgEAAgFQAAgFgDgDQgDgEgHgCIgQgEIgVgGQgMgCgIgEQgJgEgFgEQgGgGgDgHQgDgIAAgKQAAgKAFgJQAFgJAIgGQAIgGALgEQALgEANAAQAOAAAMAFQAMAEAIAGQAHAGAEAIQAEAHABAHQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgQAAIgGgBIgEgFQgDgFgHgFQgHgEgNAAIgLABQgGACgEACIgGAGQgDADAAAFQAAAFADADQACAEAFACIAOAFIAUAFQAOACAKAFQAKADAGAFQAGAGADAHQADAHAAAKQAAAKgEAJQgFAJgIAGQgJAHgMADQgNAEgPAAQgMAAgMgDg");
	this.shape_3.setTransform(139.1,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B81312").s().p("AgIBQQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAiVQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIASAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAACVQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_4.setTransform(120.4,56.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B81312").s().p("AgIBQQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAh+IgpAAIgEgBQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgRQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIBxAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAARQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgqAAIAAB+QAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(102.2,56.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B81312").s().p("AAyBQQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhZIgfAyIgDAEQgCACgDAAIgLAAQgDAAgDgCIgDgEIgdgyIAABZQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgSAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAiVQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAQAAQAEAAACACIADADIArBMIAshMIADgDQACgCAFAAIAPAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAACVQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_6.setTransform(175.3,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B81312").s().p("AgcBOQgNgFgIgIQgJgIgEgMQgEgLAAgNIgBgKIAAgLIAAgKIABgJQAAgNAEgLQAEgMAJgIQAIgJANgFQAMgFAQAAQARAAAMAFQAMAFAJAJQAIAIAEALQAFAMABANIAAAJIAAAKIAAALIAAAKQgBANgFALQgDAMgJAIQgIAIgNAFQgMAFgRAAQgQAAgMgFgAgZgsQgKAJAAARIgBASIABAUQAAAQAKAJQAKAJAPAAQAQAAAKgJQAJgJABgQIABgUIgBgSQgBgRgJgJQgKgJgQAAQgPAAgKAJg");
	this.shape_7.setTransform(149.9,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B81312").s().p("AAmBQQgEAAgCgCIgEgDIgdg2IgeAAIAAA2QAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgTAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAiVQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIA6AAQAdAAAPANQAPANAAAYQAAAQgIAMQgHALgPAGIAfA5IABADQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAgAgfgHIAgAAQAOAAAHgFQAIgEAAgNQAAgNgIgFQgHgEgOAAIggAAg");
	this.shape_8.setTransform(126.6,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B81312").s().p("Ag4BQQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAiVQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIA9AAQAbAAAQAMQAPAOAAAZQAAAagPAMQgQANgbAAIgkAAIAAA0QAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAgAgfgEIAiAAQAOgBAHgFQAIgFAAgNQAAgNgIgFQgHgFgOAAIgiAAg");
	this.shape_9.setTransform(103.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(38));

	// frame
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#343A40").ss(4,1,0,3).p("A0OmtMAodAAAIAANbMgodAAA");
	this.shape_10.setTransform(124.5,43);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,0,3,true).p("AAAGuIAAtb");
	this.shape_11.setTransform(-5,43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A0OGuIAAtbMAodAAAIAANbg");
	this.shape_12.setTransform(124.5,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-2,263,90);


// stage content:
(lib.promtissuelogoanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.rollOverFunction = function () {
			this.base.gotoAndPlay(2);
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.base = new lib.Symbol1();
	this.base.parent = this;
	this.base.setTransform(127,45,1,1,0,0,0,127,43);
	new cjs.ButtonHelper(this.base, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121,-3.2,263,138.3);
// library properties:
lib.properties = {
	id: '28CA8005AFD44A4EA3CA0EDDA67D289B',
	width: 256,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['28CA8005AFD44A4EA3CA0EDDA67D289B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;