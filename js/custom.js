// 헤더 상담신청 show/hide
window.addEventListener('scroll',function (scrollY) {
	if ($('#header').hasClass('header-sticky')) {
		$('#header .toggle-item').removeClass('hide');
	}else {
		$('#header .toggle-item').addClass('hide');
	}
});

$('.go-request').click(function () {
	var CC_AUTHOR = $('.CC_AUTHOR');
	var CC_MB_TELNUM = $('.CC_MB_TELNUM');
	var CC_PN_DATE = $('.CC_PN_DATE');
	var CC_PRIVATE_INFO_AGREE = $('.CC_PRIVATE_INFO_AGREE');
	
	if (CC_AUTHOR.val() == "" || CC_MB_TELNUM.val() == "" || CC_PN_DATE.val() == "") {
		alert('빈 내용을 적어주세요.');
		return false;
	}
	if (!CC_PRIVATE_INFO_AGREE.is(":checked")) {
		alert('개인정보취급방침에 동의하셔야 상담을 신청할 수 있습니다.');
		return false;
	}
	
	alert('상담이 완료되었습니다.');

})

