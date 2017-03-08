(function(){
  
    var thumbnails = {

	thumbnails_array:  [[1,"blue"],[2,"red"],[3,"yellow"],
                      [4,"brown"],[5,"green"],[6,"purple"]],
	init:function(){
	    this.cacheDom();
	    this.render();
	},

	cacheDom:function(){
	    this.$el = $("#portifolio-thumbnail-group");
	},

	render:function(){
	    console.log("entered render!");
	    console.log(this.$el);
	    for(var i =  0; i < this.thumbnails_array.length; i++){
		var $thumb = $("<div id=" + this.thumbnails_array[i][0] + 
			       " class='portfolio-thumbnail'></div>");
		console.log("<div id="+ this.thumbnails_array[i][0] + 
			    " class='portfolio-thumbnail'></div>");
		$thumb.css("background-color",this.thumbnails_array[i][1]);
		$("#portfolio-thumbnail-group").append($thumb);
		console.log("looped: " + i);
	    }
	}
    };

    thumbnails.init();
    
})()
