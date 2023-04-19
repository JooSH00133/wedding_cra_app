(function($){
   
    const wedding = {
        init: function(){
            this.header();
            this.scollEvent();
            this.section1();
            this.section5();
            this.section6();
        },
        header: function(){
            
            // 햄버거 메뉴 버튼(선택자) 클릭하면
            // 모바일 슬라이드 메뉴(선택자 mobileSubMenu)를 펼진다(보인다.)
            // 또 한번 클릭하면 모바일 슬라이드 메뉴(선택자 mobileSubMenu)가 접힌다.(사라진다.)
            $('#mobileSubMenu').slideUp(0); // 하이드 : 숨기기 hide( 슬라이드업 )
            $('.mobile-menu-btn').on({
                click: function(){
                    // $('#mobileSubMenu').slideDown(); // 쇼 : 보여라  show( 슬라이드다운 )
                    $('#mobileSubMenu').slideToggle(300); // 쇼 : 보여라  show( 슬라이드업/다운 )
                }
            });

            // 화면 너비가 커진상태에서 모바일 서브메뉴가 보인다(버그)
            // 그래서 화면 너비(창너비)에 반응하는 반응형 스크립트(리사이즈 resize) 이벤트를 등록하고 적용한다.
            $(window).resize(function(){
                // 만약 창너비가 991픽셀 초과이면 모바일 서브메뉴 slideUp() 숨겨라
                if($(window).innerWidth() > 991){
                    $('#mobileSubMenu').slideUp(0);   // display: none
                }
            });


            // 스크롤 이벤트
            // 1. 윈도우 스크롤이벤트 등록
            // 2. 스크롤 탑값이 해당 섹션 위치에 도달하면 서브메뉴('.mobile-sub-btn')에 빨강 색상으로 변경된다.
            
            

            // && (AND) 모두만족
            // || (OR)  둘중하나
            // !  (NOT) 부정 ~ 아니다
 
            $(window).scroll(function(){
                const sec2Top = $('#section2').offset().top;
                const sec3Top = $('#section3').offset().top;
                const sec4Top = $('#section4').offset().top;
                const sec5Top = $('#section5').offset().top;
                const sec6Top = $('#section6').offset().top;
                const sec7Top = $('#section7').offset().top;
                const sec9Top = $('#section9').offset().top;
                const sec10Top = $('#section10').offset().top;

                if( $(window).scrollTop() >= sec2Top &&   $(window).scrollTop() < sec3Top ){
                    $('.mobile-sub-btn').eq(0).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(0).removeClass('on');
                }

                if( $(window).scrollTop() >= sec4Top  &&  $(window).scrollTop() < sec5Top ){
                    $('.mobile-sub-btn').eq(1).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(1).removeClass('on');
                }

                if( $(window).scrollTop() >= sec5Top  &&  $(window).scrollTop() < sec6Top ){
                    $('.mobile-sub-btn').eq(2).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(2).removeClass('on');
                }


                if( $(window).scrollTop() >= sec6Top  &&  $(window).scrollTop() < sec7Top ){
                    $('.mobile-sub-btn').eq(3).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(3).removeClass('on');
                }


                if( $(window).scrollTop() >= sec9Top  &&  $(window).scrollTop() < sec10Top ){
                    $('.mobile-sub-btn').eq(4).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(4).removeClass('on');
                }


                if( $(window).scrollTop() >= sec10Top  &&  $(window).scrollTop() <= (sec10Top + $('#section10').height()) ){
                    $('.mobile-sub-btn').eq(5).addClass('on');
                }
                else{
                    $('.mobile-sub-btn').eq(5).removeClass('on');
                }

    
            });         
                     




        },
        scollEvent: function(){

            let newScr = 0;
            let oldScr = newScr;
            
            
        
            $(window).scroll(function(){
                
        
                newScr = $(window).scrollTop();  // 새로운 스크롤 값() 저장
                    if( newScr-oldScr > 0 ){ // 아래로 DOWN
                        $('#header').addClass('on');
                    }
                    if( newScr-oldScr < 0 ){ // 위로 UP
                        $('#header').removeClass('on');
                    }
                oldScr = newScr;  // 이전의 스크롧 값
        
        
                if( $(window).scrollTop() >= 100 ){
                    $('.go-top').stop().fadeIn(600);
                }
                else{ // 아니면: 100픽셀 미만이면
                    $('.go-top').stop().fadeOut(600);
                }
        
                if($(window).scrollTop()===0){
                    $('#section2').removeClass('on');
                    $('#section3').removeClass('on');
                    $('#section4').removeClass('on');
                    $('#section5').removeClass('on');
                    $('#section6').removeClass('on');
                    $('#section7').removeClass('on');
                    $('#section8').removeClass('on');
                    $('#section9').removeClass('on');
                }
        
                if( $(window).scrollTop()>=300 ){
                    $('#section2').addClass('on');
                }
        
                // 섹션2의 오프셋(맨위에서 섹션2의 탑값까지의 간격) 탑값 구하기
                const sec2Top = $('#section2').offset().top;
                       
                if( $(window).scrollTop()>=sec2Top ){
                    $('#section3').addClass('on');
                }
        
                // 섹션4의 오프셋(맨위에서 섹션3의 탑값까지의 간격) 탑값 구하기
                const sec3Top = $('#section3').offset().top-300;
        
                if( $(window).scrollTop()>=sec3Top ){
                    $('#section4').addClass('on');
                }
        
        
                // 섹션5의 오프셋(맨위에서 섹션4의 탑값까지의 간격) 탑값 구하기
                const sec4Top = $('#section4').offset().top-300;
                if( $(window).scrollTop()>=sec4Top ){
                    $('#section5').addClass('on');
                }
        
        
                const sec5Top = $('#section5').offset().top-300;
                if( $(window).scrollTop()>=sec5Top ){
                    $('#section6').addClass('on');
                }
        
        
                const sec6Top = $('#section6').offset().top-300;
                if( $(window).scrollTop()>=sec6Top ){
                    $('#section7').addClass('on');
                }
        
                const sec7Top = $('#section7').offset().top-300;
                if( $(window).scrollTop()>=sec7Top ){
                    $('#section8').addClass('on');
                }
        
                const sec8Top = $('#section8').offset().top-300;
                if( $(window).scrollTop()>=sec8Top ){
                    $('#section9').addClass('on');
                }
            });  //스크롤 이벤트 끝
        
        },
        section1: function(){
                    
            let cnt=0;
            let setId=0;


            // 1. 메인슬라이드함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({left: `${-100 * cnt}%` }, 600, function(){
                    if(cnt>2){cnt=0} // 끝이면 처음으로
                    if(cnt<0){cnt=2} // 처음이면 끝으로
                    $('.slide-wrap').stop().animate({left: `${-100 * cnt}%` }, 0); // 리턴 처음으로 가서 다음 애니메이션 준비
                });

                //페이지버튼함수 호출
                pageBtnEvent();
            }

            // 2-1. 다음(next)카운트함수 
            function nextCount(){
                cnt++;  //1 2 3......       
                mainSlide();
            }
            // 2-2. 이전(preview)카운트함수 
            function prevCount(){
                cnt--;  //3 2 1......       
                mainSlide();
            }

            // 3. 페이지버튼 이벤트
            //    해당페이지 표시 흰색버튼이 핫핑크버튼으로 표시
            // 메인슬라이드 함수의  cnt 번호에 따라 변경된다.
            // 페이지버튼 인덱스번호 0 1 2 
            // 페이지버튼이벤트 함수는 메인슬라이드함수내에서 실행한다.
            function pageBtnEvent(){                
                $('.page-btn').removeClass('on');
                // $('.page-btn').eq(cnt===3 ? 0 : cnt ).addClass('on');
                $('.page-btn').eq(cnt > 2 ? 0 : cnt ).addClass('on');
            }


            // 4. 자동타이머 함수
            // 4초에 한번씩 자동으로 다음(next)카운트함수를 호출 실행
            // 셋인터발 함수
            // setInterval(실행함수이름=> 소괄호생량, 시간 1/1000 초);
            // 1초 => 1000
            // 4초 => 4000 = 1000 * 4
            // setter 셋터함수  설정
            // 메모리에 할당된 인덱스 번호(랜덤한 인덱스번호)
            // 메모리에 할단된 인덱스 번호를 알면 타이머를 정지할 수있다.
            // 클리어인터발  clearInterval(인덱스번호)
            // 클리어인터발  clearInterval(setId)

            function autoTimer(){
                clearInterval(setId); // 이전에 호출실행한 아이디 삭제
                setId = setInterval(nextCount, 1000*4); // 새롭게 실행                
            }
            autoTimer(); // 홈페이지 처음 로딩시 실행


            // 페이지버튼 클릭하면 정지 하고 싶다.
            $('.page-btn').eq(0).on({ // 첫번째슬라이드 0
                click: function(){
                    clearInterval(setId); // 슬라이드 일시 정지
                    // 메인슬라이드에게 
                    // 클릭한 페이지 번호를 전달하고=>cnt
                    // 메인들라이드를 호출 실행해서 애니메이션구현
                    cnt=0;
                    mainSlide();
                    autoTimer();
                }
            });

            $('.page-btn').eq(1).on({ // 첫번째슬라이드 0
                click: function(){
                    clearInterval(setId); // 슬라이드 일시 정지
                    // 메인슬라이드에게 
                    // 클릭한 페이지 번호를 전달하고=>cnt
                    // 메인들라이드를 호출 실행해서 애니메이션구현
                    cnt=1;
                    mainSlide();
                    autoTimer();
                }
            });

            $('.page-btn').eq(2).on({ // 첫번째슬라이드 0
                click: function(){
                    clearInterval(setId); // 슬라이드 일시 정지
                    // 메인슬라이드에게 
                    // 클릭한 페이지 번호를 전달하고=>cnt
                    // 메인들라이드를 호출 실행해서 애니메이션구현
                    cnt=2;
                    mainSlide();
                    autoTimer();
                }
            });



            /////////////////////////////////////////////////////
            // 터치스와이프 & 드래그앤 드롭 이벤트
            let touchStart = 0; // 터치 시작
            let touchEnd = 0;   // 터치 끝

            let dragStart = 0;  // 드래그 시작
            let dragEnd = 0;    // 드래그 끝
            let winWidth = 0;  // 창너비
            let mouseDown = false;  // 다운상태 아님 false ,    다운상태 true

            // 반응형 이벤트 : 마우스(데스크탑)와 핑거(모바일, 테블릿) 이벤트
            $('#section1').on({
                // 마우스 터치
                mousedown: function(e){
                    mouseDown = true; // 마우스 다운상태임.
                    clearInterval(setId); // 타이머 인덱스번호를 저장하는 변수 => 전역변수
                    winWidth = $(window).innerWidth(); //창너비
                    touchStart = e.clientX;  // 터치시작(Touch Start)
                    dragStart = e.clientX-$('.slide-wrap').offset().left-winWidth;  // 드래그시작(Touch Start)
                    autoTimer();
                },
                mouseup: function(e){
                    touchEnd = e.clientX;    // 터치끝(Touch End)
                    if( touchStart-touchEnd > 0 ){ // 다음 슬라이드
                        nextCount();
                    }                
                    if( touchStart-touchEnd < 0 ){ // 이전 슬라이드
                        prevCount();
                    } 
                    mouseDown=false;  // 다우스 다운 상태가 초기화            
                },
                mousemove: function(e){ // 마읏가 이동할 때 슬라이드가 자석처럼 따라 다닌다.
                    // 마우스 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브기능 되어한다.
                    if(mouseDown===false){return}  // 마우스 다운 상태가 아니면 리턴 종료
                    dragEnd = e.clientX;
                    // 메인 슬라이드 애니메이션 박스
                    $('.slide-wrap').css({ left : dragEnd-dragStart });

                },  



                // 핑거 터치
                touchstart: function(e){
                    mouseDown = true; // 핑거 다운상태임.
                    touchStart = e.originalEvent.changedTouches[0].clientX;  // 터치시작(Touch Start)
                    dragStart = e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-winWidth;  // 드래그시작(Touch Start)
                },
                touchend: function(e){
                
                    touchEnd = e.originalEvent.changedTouches[0].clientX;;    // 터치끝(Touch End)
                    if( touchStart-touchEnd > 0 ){ // 다음 슬라이드
                        nextCount();
                    }                
                    if( touchStart-touchEnd < 0 ){ // 이전 슬라이드
                        prevCount();
                    }    
                },
                touchmove: function(e){ // 마읏가 이동할 때 슬라이드가 자석처럼 따라 다닌다.
                    // 마우스 무브는 반드시 마우스 다운 이벤트가 있을 때만 무브기능 되어한다.
                    if(mouseDown===false){return}  // 마우스 다운 상태가 아니면 리턴 종료
                    dragEnd = e.originalEvent.changedTouches[0].clientX;
                    // 메인 슬라이드 애니메이션 박스
                    $('.slide-wrap').css({ left : dragEnd-dragStart });

                }  
            });
            
    

        },
        section5: function(){
            let imgNum = null;
            let imgSrc = null;
            // 이미지 클릭 이벤트
            // 모달창 오픈됨
            $('#section5 .img-btn').on({
                click:function(){
                    $('#modal').fadeIn(300);
                    $('html').addClass('on');
                    // 현재 클릭한 이미지src소스를 모달창 이미지에 전달, 변경한다.
                    // html 태그 속성Attribute(attr),
                    // Properties, Property(prop)을 가져오는 메소드 사용
                    imgSrc = $(this).attr('src'); // 이미지의 src 속성 가져오기
                    // 모달창 이미지 속성중 src를 변경하기
                    $('#modal .modal-image').attr('src', imgSrc); // 클릭한 이미지가 모달 이미지로 변경된다.

                    // 현재이미지의 번호를 가져와야 다음이미지 번호를 호출할 수 있다.
                    // 1. 이미지의 파일이름 중 번호를 가져오기 substr substring
                    // wedding-img08.jpg // 점(.)의 위치(글자위치, 인덱스번호)를 찾아서 좌측으로 2를 빼면 2자리 숫자가 번호이다
                    // imgSrc = "./img/wedding-img13.jpg";
                    // let dotPos = imgSrc.indexOf("jpg");
                    // let dotPos = imgSrc.serch("jpg");
                    // console.log( '이미지 파일 이름 중 점의 위치' + imgSrc.indexOf('.') );
                    // console.log( imgSrc.substr(점위치인덱스번호,글자수) )
                    imgNum = $(this).data('num'); // 데이터 속성을 사용, 제이쿼리 지원
                    
                }
            });

            // 모달창 닫기 함수
            function modalClose(){
                $('#modal').fadeOut(300);
                $('html').removeClass('on');
            }

            // 모달창
            $("#modal").on({
                click(e){
                    e.preventDefault();
                    modalClose();
                    
                }
            })

            // 자식이미지 버튼을 클릭하면 부모 박스까지 이벤트가 전달된다
            // 부모까지 이벤트 전달을 막아야한다.
            // 상위 위치의 박스까지 전달되지 않도록 이벤트 함수를 사용
            // stopPropagation()

            // 다음 이미지 함수
            function nextImage(){
                imgNum++;
                if(imgNum > 15){
                    imgNum = 8;
                }
                // 마지막 이미지이면 다시 처음으로 (8번)
                // 이미지 번호가 10미만, 1자리이면 0을 추가한다.
                // 3항 연산자   조건식 < 10? 08: 8
                $('#modal .modal-image').attr('src', `./img/wedding-img${imgNum<10? ('0' + imgNum):imgNum}.jpg`).stop().fadeOut(0).fadeIn(600);
            }
            
            // 이전 이미지 함수
            function prevImage(){
                imgNum--;
                if(imgNum < 8){
                    imgNum = 15;
                }
                // 마지막 이미지이면 다시 처음으로 (8번)
                // 이미지 번호가 10미만, 1자리이면 0을 추가한다.
                // 3항 연산자   조건식 < 10? 08: 8
                $('#modal .modal-image').attr('src', `./img/wedding-img${imgNum<10? ('0' + imgNum):imgNum}.jpg`).stop().fadeOut(0).fadeIn(600);}

            // 모달창 이미지 클릭 이벤트: 다음 이미지
            $('#modal .modal-img-btn').on({
                click(e){
                    
                    e.stopPropagation();
                    imgNum++;
                if(imgNum > 15){
                    imgNum = 8;
                }
                // 마지막 이미지이면 다시 처음으로 (8번)
                // 이미지 번호가 10미만, 1자리이면 0을 추가한다.
                // 3항 연산자   조건식 < 10? 08: 8
                $('#modal .modal-image').attr('src', `./img/wedding-img${imgNum<10? ('0' + imgNum):imgNum}.jpg`).stop().fadeOut(0).fadeIn(600);
                }
            });


            // 다음 이미지
            $('.modal-next-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage(); // 다음 이미지
                }
            });

            // 이전 이미지
            $('.modal-prev-btn').on({
                click(e){
                    e.preventDefault();
                    e.stopPropagation();
                    prevImage(); // 이전 이미지
                    
                }
            });

            // 모달 닫기 버튼 클릭
            $('modal-close-btn').on({
                click(e){
                    e.preventDefault();  // 새로고침 제거
                    e.stopPropagation(); // 부모에 이벤트전파 차단
                    modalClose();
                }
            });
        },
        section6: function(){
            // 비동기 전송 : AJAX => JQUERY 
            // 폼전송버튼 클릭하면 폼전송내용을 AJAX가 
            // PHP에게 데이터를 전송한다.
            // 화면전환이 없이 유효시간에 데이터가 비동기식으로 전송된다.
            $('.submit-btn').on({
                click(e){
                    // 데이터 전송 시 새로고침 자동 발생한다.
                    e.preventDefault(); // 데이터 전송기능을 제거하고 새로고침 발생하지 않도록 함

                    // 에이잭스: 고객이 서버에게 데이터 요청(request)
                    $.ajax({ // a sync 비동기 전송 방식
                        url:'./attending_insert_form.php',
                        type: 'POST',
                        data: {
                            ename: $('#userName').val(),
                            email: $('#userEmail').val(),
                            guest_number: $('#number').val(),
                            event: $('#events').val(),
                            date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
                            // 2023-04-14
                        },
                        success(result){ // 전송 성공 메시지: 서버 응답 
                            
                            if( result.includes('답변')===true ){
                                $('.attending').addClass('on');
                                $('#userName').val('');
                                $('#userEmail').val('');
                                $('#number').val('');
                                $('#events').val('');
                            }
                            else {
                                $('.attending').removeClass('on');
                            }
                        },
                        error(error){ // 전송 실패 메시지
                            console.log('AJAX 전송 실패!' + error);
                        }
                    });
                    
                }
            });
        }
    }
    wedding.init();

})(jQuery);