$(function(){
	$(".progress").hide();
	$("#rebuildIndex").on('click',function(){
		if(window.myInterId){
			clearInterval(window.myInterId);
			window.myInterId=null;
		}
		$(".progress").show();
		window.myInterId=setInterval(function(){
			var value=$(".progress-bar").data('value');
			var widthInt=parseInt(value);
			if((widthInt+10)>=60){
				widthInt+=2;
			}else{
				widthInt+=10;
			}
			$(".progress-bar").data('value',''+widthInt);
			$(".progress-bar").css('width',widthInt+'%');
		},2000);
		$.get($("#rebuildIndex").data('url'),function(data){
			if(data.status=='ok'){
				toastr.success('索引重建成功');
				$(".progress").hide();
				clearInterval(window.myInterId);
				window.myInterId=null;
			}
		},'json');
	});
});