$(document).ready(function() {
	var name = localStorage.getItem("gpdata");
	if(name == null) {
	} else {
		var gpdata = name.split(",");
		$("#builder").val(gpdata[0]);
		$("#fighter").val(gpdata[1]);
		$("#plano").val(gpdata[2]);
		$("#planame").val(gpdata[3]);
		$("#scratch").val(gpdata[4]);
	}
	$("#gpinput .enter a").click(function(){
		var builderName = $("#builder").val();
		$(".builderoutput").html(builderName);
		var fighterName = $("#fighter").val();
		$(".fighteroutput").html(fighterName);
		var plaNo = $("#plano").val();
		$(".planooutput").html(plaNo);
		var plaName = $("#planame").val();
		$(".planameoutput").html(plaName);
		var scratch = $("#scratch").attr("checked");
		console.log(scratch)
		localStorage.setItem("gpdata", builderName+','+fighterName+','+plaNo+','+plaName+','+scratch);
		if(scratch == "checked") {
			$(".scratchoutput").css("display", "inline");
		} else {
			$(".scratchoutput").css("display", "none");
		}
		$("#gpmain").css("display", "block");
		$("#gpinput").css("display", "none");
	});
});