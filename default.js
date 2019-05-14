document.onkeydown = function(e){
	e = e || window.event;
	if (e.shiftKey){
		switch (e.keyCode){
			case 38:
				$("#elementWeb1").remove();
				postscribe(document.head, "<meta charset='utf-8'>");
				postscribe(document.head, "<meta name='viewport' content='width=device-width'/>");
				postscribe(document.head, "<script src='default2.js'></script>");
				postscribe(document.head, "<script src='lib/prototype.js'></script>");
				postscribe(document.head, "<script src='lib/scriptaculous.js'><\/script>");
				var head = document.getElementsByTagName('HEAD')[0];
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = 'default2.css';
				head.appendChild(link);
				break;
			case 39:
				document.getElementById("id-1").remove();
				postscribe(document.head, "<script src='default3.js'></script>");
				// var scriptSrc = document.createElement('script');
				// scriptSrc.setAttribute('src','lib/prototype.js');
				// document.head.appendChild(scriptSrc);
				// var scriptSrc2 = document.createElement('script');
				// scriptSrc2.setAttribute('src','lib/scriptaculous.js');
				// document.head.appendChild(scriptSrc2);
				break;
			case 40:
				Effect.multiple(["icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8", "icon9", "icon10", 
					"icon11", "icon12", "icon13", "icon14", "icon15", "icon16", "icon17", "icon18", "icon19", "icon20", "icon21", 
					"icon22", "icon23", "icon24", "icon25", "icon26", "icon27", "icon28", "icon29", "icon30", "icon31", "icon32", 
					"icon33", "icon34", "icon35", "icon36", "icon37", "icon38", "icon39", "icon40", "icon41", "icon42", "icon43", 
					"icon44", "icon45", "icon46", "icon47", "icon48", "icon49", "icon50", "icon51", "icon52", "icon53", "icon54", 
					"icon55", "icon56", "icon57", "icon58", "icon59", "icon60", "icon61", "icon62", "icon63", "icon64", "icon65", 
					"icon66", "icon67", "icon68", "icon69", "icon70", "icon71", "icon72", "icon73", "icon74", "icon75", "icon76", 
					"icon77", "icon78", "icon79", "icon80", "icon81", "icon82", "icon83", "icon84", "icon85", "icon86", "icon87", 
					"icon88", "icon89", "icon90", "icon91", "icon92", "icon93", "icon94", "icon95", "icon96", "icon97", "icon98", 
					"icon99", "icon100", "icon101", "icon102", "icon103", "icon104", "icon105", "icon106", "icon107", "icon108", 
					"icon109", "icon110", "icon111", "icon112", "icon113", "icon114", "icon115", "icon116", "icon117", "icon118", 
					"icon119", "icon120", "icon121", "icon122", "icon123", "icon124", "icon125", "icon126", "icon127", "icon128", 
					"icon129", "icon130", "icon131", "icon132", "icon133", "icon134", "icon135", "icon136", "icon137", "icon138", 
					"icon139", "icon140", "icon141", "icon142", "icon143", "icon144"], Effect.Puff,{speed: 0.2});
		}
	}
}




// window.addEventListener("keyup", keyCode, false);
// window.addEventListener("keydown", keyDown, false);
// var keys = [];
// function keyCode(e) {
// 	keys[e.keyCode] = true;
// 	if (keys[16] && keys[38]) {
// 		$("#elementWeb1").remove();
// 	}
// }


// function keyDown(e) {
// 	var keyDown = event.keyCode;
// 	if (keyDown == 39) {
// 		alert("you pressed right!");
// 	}
// }







// function keyCode2(event) {
// 	var x = event.keyCode2;
// 	var s = document.createElement('script');	
// 	if (x == 39) {
// 	s.type = "text/javascript"
// 	s.src = prototype.js;
// 	document.body.appendChild(s);
// 	}
// }



// function addScript(src) {

// 	var s = document.createElement('script');
// 	s.src = "<script src="lib/prototype.js" type="text/javascript"></script>";
// 	target.appendChild(s);
// }

