// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// 上記のコードを、以下コードに変更

// thisは、「クリックされた要素」を指す。コードを短くまとめられるが、「何を指すか」がわからなくなるデメリットがある
// つまり、コメントとセットにして使うと可読性が上がる？
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });


$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});