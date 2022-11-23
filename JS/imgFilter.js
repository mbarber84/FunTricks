window.onload = function () {

	// declare some variables
	var blur = document.getElementById("blur"),
		brightness = document.getElementById("brightness"),
		contrast = document.getElementById("contrast"),
		grayscale = document.getElementById("grayscale"),
		invert = document.getElementById("invert"),
		saturate = document.getElementById("saturate"),
		sepia = document.getElementById("sepia"),
		img = document.getElementById("img"),
    btn = document.getElementById("btn");
  
    var effects = [blur,brightness,contrast,grayscale,invert,saturate,sepia];
  
    btn.onclick = function () {
      for ( var i = 0; i < effects.length; i++ ) {
        var val = effects[i].getAttribute("data-default");
        effects[i].value = val;
      }
      img.style.filter = "";
    }
    
	

	var blurfunc = func("blur","0","px"),
		brightnessfunc = func("brightness","100","%"),
		contrastfunc = func("contrast","100","%"),
		grayscalefunc = func("grayscale","0","%"),
		invertfunc = func("invert","0","%"),
		saturatefunc = func("saturate","100","%"),
		sepiafunc = func("sepia","0","%");

	function allfunc (targ, val) {
		if ( targ === "blur" ) {
			var newval = func("blur",val,"px");
			blurfunc = newval;
			return newval + brightnessfunc + contrastfunc + grayscalefunc + invertfunc + saturatefunc + sepiafunc;
		}

		if ( targ === "brightness" ) {
			var newval = func("brightness",val,"%");
			brightnessfunc = newval;
			return blurfunc + newval + contrastfunc + grayscalefunc + invertfunc + saturatefunc + sepiafunc;
		} 

		if ( targ === "contrast" ) {
			var newval = func("contrast",val,"%");
			contrastfunc = newval;
			return blurfunc + brightnessfunc + newval + grayscalefunc + invertfunc + saturatefunc + sepiafunc;
		} 

		if ( targ === "grayscale" ) {
			var newval = func("grayscale",val,"%");
			grayscalefunc = newval;
			return blurfunc + brightnessfunc + contrastfunc + newval + invertfunc + saturatefunc + sepiafunc;
		} 

		if ( targ === "invert" ) {
			var newval = func("invert",val,"%");
			invertfunc = newval;
			return blurfunc + brightnessfunc + contrastfunc + grayscalefunc + newval + saturatefunc + sepiafunc;
		} 

		if ( targ === "saturate" ) {
			var newval = func("saturate",val,"%");
			saturatefunc = newval;
			return blurfunc + brightnessfunc + contrastfunc + grayscalefunc + invertfunc + newval + sepiafunc;
		} 

		if ( targ === "sepia" ) {
			var newval = func("sepia",val,"%");
			sepiafunc = newval;
			return blurfunc + brightnessfunc + contrastfunc + grayscalefunc + invertfunc + saturatefunc + newval;
		} 

	}
	
	function func ( funcname, value, unit ) {
		return funcname + "(" + value + unit + ")";
	}

	for ( var i = 0; i < effects.length; i++ ) {
		effects[i].addEventListener("change", function() {
			if ( this == effects[0] ) {
				img.style.filter = allfunc("blur",this.value);
			}
			if ( this == effects[1] ) {
				img.style.filter = allfunc("brightness",this.value);
			}
			if ( this == effects[2] ) {
				img.style.filter = allfunc("contrast",this.value);
			}
			if ( this == effects[3] ) {
				img.style.filter = allfunc("grayscale",this.value);
			}
			if ( this == effects[4] ) {
				img.style.filter = allfunc("invert",this.value);
			}
			if ( this == effects[5] ) {
				img.style.filter = allfunc("saturate",this.value);
			}
			if ( this == effects[6] ) {
				img.style.filter = allfunc("sepia",this.value);
			}

		});
	}
}

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img')
                    .attr('src', e.target.result)  
            };

            reader.readAsDataURL(input.files[0]);
        }
    }