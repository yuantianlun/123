$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);

	};

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this);
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	};


	var accordion = new Accordion($('#accordion'), false);
	// $('.submenu li input').click(function () {
	// 	$(this).addClass('current').siblings('li').removeClass('current');
	// 	if ($(this).prop("checked")==true){
     //        console.log($(this).value);
     //        $.ajax()
    //
    //
     //        $(".y_chanpin_box ul li").remove();
     //        var str=`
     //                    <li class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
     //                        <a href="product-details.html">
     //                            <div class="y-cahnpibox">
     //                                <div class="y-chanpiimgbox">
     //                                    <img src="images/chanpin001.jpg" alt="">
     //                                </div>
     //                                <div class="y-chanpiwenzibox">
     //                                    测试新闻 &nbsp;&nbsp;&nbsp;&nbsp;
     //                                    <i class="iconfont icon-icon"></i>
     //                                </div>
     //                            </div>
     //                        </a>
     //                    </li>
     //        `;
     //        $(".y_chanpin_box ul").append(str);
	// 	}else {
	// 		return;
	// 	}
	// });

});