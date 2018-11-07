$(document).ready(function(){
      var answerValue = 0;
      
     
      
    $("#copyButton").click(function(){
      $("apdl_code").select;
      document.execCommand('copy');
    });
    //-------
    $(".modalbox").fancybox();
    //--------------модальные окна задания длинны---------------
    $("#f_answer").submit(function(){return false;});
    $('input#f_answer_input').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(this).attr('id');
         var val = $(this).val();
         switch(id)
       {
             case 'f_answer_input':
                var regExpLength = /^[0-9.]+$/; 
                if(val == '021120184' && val != '' && regExpLength.test(val))
                {
                    answerValue=val;
                    
                   $(this).removeClass('error').addClass('not_error');
                   $(this).next('.error-box').text('Ты права, Милена. Теперь ты знаешь кто я. Нажимай "Показать письмо"')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }

                else
                {
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('Проверь еще раз!')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
              break;
              
              

       } // end switch(...)

     }); // end blur()
    
   
    });
let validLetter = 0;
validationLetter = () => {
  if (document.getElementById('answer').getElementsByClassName('not_error').length>=1) {
validLetter = validLetter + 1;
visiblePost();

} else {
  visiblePost();
}

};
visiblePost = () => {
       if (document.getElementById('answer').getElementsByClassName('not_error').length<1){
        alert('Внимательнее, Милена!');
       } else if (validLetter == 1) {
        let post = document.getElementById('post');
        post.innerHTML+=`<br>Да, да. Это я, Алексей, твой недавний знакомый. Вот, решился на авантюру отыскать тебя в большом городе
         и написать всё сюда.  
        У тебя появится вполне логичный вопрос, почему же таким странным способом, через Интернет? На самом деле все просто, я хоть и верю в то, что всё получится, 
        но не хочу чтобы бумажное письмо попало кому-нибудь, кроме тебя.
         Хотя очень трудно писать, Милена, ведь я тебя почти не знаю, но я верю, что в данном случае перспектива снова встретиться и узнать тебя больше 
         послужит мне достаточным извинением. И к тому же, кроме как это письмо, у меня нет других шансов связаться с тобой.
         Надеюсь, удача будет на моей стороне и ты его прочтёшь.
        <br>
         <br>Мне безгранично стыдно, ведь я обещал позвонить в вечер вторника, но Его Величество Случай распорядился иначе.
         В первый вечер в Москве я лишился телефона, и чёрт бы с этим куском железа, но я лишился всех контактов с тобой.
         Сейчас я всё делаю, полагаясь исключительно на удачу, и я даже не знаю дойдет ли до тебя моё письмо, Милена, или нет. 
         Я не из тех людей, кто привык сдаваться и иду на любую авантюру. И если ты сейчас читаешь это письмо, то значит я все сделал правильно и безгранично этому рад. 
          <br>
         <br>Пока я думал что же делать, как тебя отыскать в многомиллионом Петербурге, меня посетили некоторые мысли…
         <br>
         <br>
         Загляни в прошлое, Милена. В то прошлое, когда тебе было хорошо с кем-то, когда ты почувствовала влечение к человеку, когда ты поняла
         что у вас общие ценности. Это самое волшебное чувство, которое приходится пережить человеку, но оно приносит удовлетворение и погружает в эйфорию.
         Чувство, которое требует чего-то особенного и возвышенного.
         <br>
          <br>
         Если сейчас ты читаешь это письмо и тебя посещают мысли о нашем сходстве, то скорее всего, ты начианешь задумываться. 
         Что, если ты вдруг встретила одного из тех редких людей, кто действительно не только понимает тебя и твои чувства, 
         но кто и ценит и отвечает на чувствительность и честность, кто знает не только как брать, но и как дарить их. 
         А Если бы тебе судьба действительно дала такую возможность, 
         то можешь ли ты себе представить как бы ты себя чувствовала после того, как ты бы узнала его?
          <br>
          <br>
         Вот сейчас ты пытаешься обдумать всё что ты прочитала сейчас, а я задам тебе один вопрос:
         А насколько ты была бы удивлена, поняв, что ты с нетерпением ждешь возможности провести некоторое время со мной, 
         может быть, ты можешь представить нашу встречу, как нам весело и хорошо, 
         как ты просто начинаешь получать глубокое удовольствие от этого. 
         И если ты думаешь об этом таким образом, то разве не логично было бы провести немного времени вместе, 
         открывая, как много у нас общих ценностей?
         <br>
         <br>
         P.S. Крайняя попытка встретиться с тобой, авантюрная, но, уверен, что не безнадёжная. Полагаю, что у тебя много вопросов, 
         касательно того, как я тебя искал. И я готов на всё тебе ответить. Верю в то, что я добился цели и заставил тебя улыбнуться) Уверен, ты сделаешь правильный выбор, который будет ближе тебе.

         Я буду ждать тебя в пятницу 9 ноября с 20:00 и в субботу 10 ноября в это же время, в ближайшей к тебе кофейне (я думаю ты поняла, какую я имею в виду) около метро "Улица Дыбенко".
         `;
          
        post.innerHTML+=`<div class="title">
    <center>
      Спасибо. Алексей   

    </center>
  </div>`;
       } else {
        alert('Послание уже появилось. Читай)');
       }
       
    }

        
           
   


