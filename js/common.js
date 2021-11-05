
//①スモールナビボタン
//ボタンをクリックした時
$("#nav-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active',2000);//ボタン自身に activeクラスを付与し
    $("#gnav").toggleClass('panelactive',2000);
	//ナビゲーションにpanelactiveクラスを付与
});


$("#gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#nav-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



//②ページトップへアイコン
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});


//③カルーセルスライダー
$(function() {
	$('.slider-for1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav1',
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
	$('.slider-nav1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for1',
		dots: false,
		centerMode: true,
		centerPadding: '60px',
		focusOnSelect: true,
		arrows: false,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
  });


$(function() {
	$('.slider-for2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav2',
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
	$('.slider-nav2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for2',
		dots: false,
		centerMode: true,
		centerPadding: '60px',
		focusOnSelect: true,
		arrows: false,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
  });


//④ズームスライダー
//ベガス

if (window.matchMedia('(max-width: 767px)').matches) {
    //スマホ処理
	$(function() {
    $('#mainvisual').vegas({
        slides: [
            { src: 'images/small_mainvisual_1.jpg' },
            { src: 'images/small_mainvisual_2.jpg' },
			{ src: 'images/small_mainvisual_3.jpg' }
        ],
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 2000, //スライドの遷移アニメーションの時間
        delay: 6000, //スライド切り替え時の遅延時間
        animation: 'kenburns', //スライド表示中のアニメーション
        animationDuration: 8000, //スライド表示中のアニメーションの時間
		timer:false,
    });
});
} else if (window.matchMedia('(min-width:768px)').matches) {
    //PC処理
	$(function() {
    $('#mainvisual').vegas({
        slides: [
            { src: 'images/large_mainvisual_1.jpg' },
			{ src: 'images/large_mainvisual_2.jpg' },
			{ src: 'images/large_mainvisual_3.jpg' }
        ],
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 10000, //スライド切り替え時の遅延時間
        animation: 'kenburnsDownRight', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間
		timer:false,
    });
});
}
	//cssの背景画像非表示
$(function() {
    $('#mainvisual').css('background-image','none');
});

//⑤ふわっとさせる
ScrollReveal().reveal('section', { 
  duration: 1500, // アニメーションの完了にかかる時間
  viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});

//⑥フォームバリデーション
$(function(){
	$('form').exValidation({
		firstValidate:true,
		rules:{
			name:"chkrequired",
			furigana:"chkrequired katakana",
			tel:"chknumonly",
			email:"chkrequired chkemail chkhankaku",
			comment:"chkrequired",
			},
		stepValidation:true
	});
});