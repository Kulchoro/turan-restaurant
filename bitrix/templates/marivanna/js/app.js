'use strict';

(function($){

	var App = function(){

		this.init();

	};


	App.prototype = {
		init: function(){

			this
				.swiperInit()
				.fancyboxInit()
				.inputTelMaskInit()
				.subscribe()
                .animatedPlaceholder()
                .defaultFormValidate();

            $(".dropToggleBut").dropdown();
            $('.select2').select2();
            $('.filter_select').change(function(){$(this).closest('form').submit();})

            if (typeof($.fn.viewportChecker) !== "undefined") {
                $('.anim').viewportChecker();
            }

		},

        subscribe: function(){
			var
				subscribeBut = $(".subscribeBut"),
                subscribeForm = $(".subscribeForm"),
                subscribeSuccess = $(".subscribeSuccess");

            subscribeBut.click(function () {
                subscribeForm.hide();
                subscribeSuccess.show();
            });

            return this;
		},

        animatedPlaceholder: function () {
            var animFieldName = $('.animFieldName');

            animFieldName.each(function (index, el) {
                var fieldGroup = $(el);
                var input = fieldGroup.find('.field');
                var inputStartValue = !!input.val();

                if (inputStartValue) {
                    fieldGroup.addClass('focus')
                }

                input
                    .on('focus', function () {
                        fieldGroup.addClass('focus')
                    })
                    .on('blur', function () {
                        var isValue = !!$(this).val();

                        if (!isValue) {
                            fieldGroup.removeClass('focus')
                        }
                    });
            });

            return this;
        },

		swiperInit: function(){

			if(typeof($.fn.swiper) !== 'undefined'){
				this.mainSlider();

                $('#aboutSlider').swiper({
                    pagination: '.swiper-pagination',
                    paginationClickable: true,                    
                    loop: true
                });

                $('#aboutInnerSlider').swiper({
                    pagination: '.swiper-pagination-primary',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    autoplay: 3000,
                    speed: 1500
                });

                $('#menuBooksSlider').swiper({
                    slidesPerView: 6,
                    spaceBetween: 0,
                    freeMode: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    breakpoints: {
                        569: {
                            slidesPerView: 2
                        }
                    }
                });
			}

			return this;
		},

		mainSlider: function () {
			if(!$.fn.swiper){
				return;
			}

			var mainSliderPagintaionItems = $('.mainSliderPagintaionItem');
			var mainSlider = $('#mainSlider').swiper({
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				autoplay: 4000
			});

			if (mainSlider) {
			    mainSliderPagintaionItems.on('click', function(event) {
    				event.preventDefault();
    
    				var index = $(this).parent().index();
    				var button = $(this);
    
    				mainSlider.slideTo(index);
    
    				mainSliderPagintaionItems.removeClass('active')
    
    				button.addClass('active')
    			});
    
    			mainSlider.on('transitionEnd', function () {
    				var currentSlideIndex = mainSlider.realIndex;
    
    				mainSliderPagintaionItems
    					.removeClass('active')
    					.eq(currentSlideIndex)
    					.addClass('active')
    			});
			}
		},

        defaultFormValidate: function(){

            if (typeof($.fn.validate) !== "undefined") {
                $('.form').each(function(index, el){
                    $(this).validate({

                        errorElement: 'div',
                        errorPlacement: function(error, element) {
                            return true;
                        },

                        highlight: function(element, errorClass, validClass) {

                            $(element)
                                .parents('.formGroup')
                                .addClass(errorClass)
                                .removeClass(validClass);

                        },

                        unhighlight: function(element, errorClass, validClass){

                            $(element)
                                .parents('.formGroup')
                                .removeClass(errorClass)
                                .addClass(validClass);
                        },

                        onfocusout: function(element){
                            if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))){
                                var currentObj = this;
                                var currentElement = element;

                                var delay = function() {
                                    currentObj.element(currentElement);
                                };

                                setTimeout(delay, 0);
                            }
                        },
                    });
                });
            }

            return this;

        },
		
		fancyboxInit: function(){

			if (typeof($.fn.fancybox) !== "undefined"){
				$('[data-fancybox]').fancybox({
					image: {
						protect: true
					},
					youtube: {
						controls: 0,
						showinfo: 0
					},
				});
			}

			return this;

		},
		
		inputTelMaskInit: function(){

			if (typeof($.fn.mask) !== "undefined") {
				$('input[type="tel"]').mask('+7 (999) 999 99 99');
			}

			return this;

		},
		
		scrollTo: function(element){

			var 
				scrollTo = $(element),
				offset = scrollTo.offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, 300);

			return this;
		}

	}

	window.App = new App();

})(jQuery);
