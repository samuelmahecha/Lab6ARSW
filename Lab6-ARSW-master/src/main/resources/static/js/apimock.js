//@author hcadavid

apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];
    mockdata["Samuel"]=[{author:"Samuel","points":[{"x":10,"y":10},{"x":25,"y":25}],"name":"paint1"},
   	 {author:"Samuel","points":[{"x":100,"y":100},{"x":250,"y":250}],"name":"paint2"}];
   	mockdata["Hann"]=[{author:"Hann","points":[{"x":200,"y":200},{"x":54,"y":135}],"name":"test1"},
     {author:"Hann","points":[{"x":250,"y":250},{"x":354,"y":105}],"name":"test2"}];



	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		},
		
	}

})();
