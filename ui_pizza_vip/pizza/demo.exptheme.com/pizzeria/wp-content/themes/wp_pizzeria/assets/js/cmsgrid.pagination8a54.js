jQuery(document).ready(function($){
	"use strict";
	$('.cms-grid-wraper').each(function(){
		var $this = $(this);
		var $id = $(this).attr('id');
		var  $sizer=$('.shuffle__sizer');
		$this.find('a.page-numbers').on('click',function(){
			var filter= $(this).parent().parent().parent().find('#gallery-filter').find('a.active').attr('data-group');
			$this.fadeTo('slow',0.3);
			var $link = $(this).attr('href');
			jQuery.get($link,function(data){
				$this.html($(data).find('#'+$id).html());
				$this.find('.cms-grid-masonry').imagesLoaded(function(){
					if($('.'+filter).length == 1){
						$('.'+filter).parent().parent().find('a').removeClass('active');
						$('.'+filter).addClass('active');
					}else{

						$this.attr('data-current','all');
						if($sizer.length==1){
							$this.find('.cms-grid-masonry').shuffle({
				               itemSelector:'.cms-grid-item',
				               sizer: $sizer,
				            });
						}
				            
				           $this.find('.cms-grid-masonry').shuffle('shuffle', 'all' );
					}	
				});
				$this.fadeTo('slow',1);
						
				
			});
			return false;
		});
	})
});