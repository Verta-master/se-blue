jQuery(function($) {
	"use strict";

	$('.course__title').click(function() {
	  $(this).parents('.course__list').find('.course__item__list').slideToggle();
	})
	
	$('.faq_question ').click(function() {
	  $(this).parents('.faq_block').find('.faq_answer').slideToggle();
	})
});