var $ = jQuery;
$(function(){ //JQuery 준비
        
        
        /* pc 메뉴 */
        $('#menu, #navi_bg').mouseenter(function(){
            $('#menu .menu_sec, #navi_bg').stop().slideDown(200);
        }).mouseleave(function(){
             $('#menu .menu_sec, #navi_bg').stop().slideUp(200);
        });
        
        //모바일 네비게이션 바 복제
        var naviClon = $('#gnb').contents().clone();
        var navi_list = $('<div id="sm_menu"></div>');
        navi_list.append(naviClon);
        navi_list.appendTo('#mb_navi');
        
        /* 모바일 메뉴 버튼 클릭시 모바일 메뉴 나타남 */
        $('#menu_icon').click(function(){
            $('#mb_navi').stop().animate({
                right: 0
            },500);
            
            return false;/* a 링크가 묶어있으면 이걸 넣어야됨 */
        });
        
        
        /* 닫기 버튼 클릭시 모바일 메뉴 우측화면으로 사라짐 */
        $('.close').click(function(){
            $('#mb_navi').stop().animate({
                right:'-100%'
            },500);
            
            
        /* 메뉴 닫을 때 초기화되게하는거(엑스누르고 나갔다 들어올때)*/
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > span a').removeClass('selected');
            
        });
        
        
        /* 모바이 각 메뉴 클릭시 서브메뉴 펄침*/
        $('#sm_menu > ul > li > span >a').click(function(){
           $(this).toggleClass('selected');/*클릭하면 검정화면 활성화되는거한거*/
            
            $('#sm_menu>ul>li>span>a').not(this).removeClass('selected');
            
            $(this).parent().find('+div').slideToggle('fast');
            /*여기에this는 a 임*/

            $('#sm_menu>ul>li>span>a').not(this).parent().find('+div').slideUp('fast');
            /*내가 선택하는 나머지 부모,부모형제(div)를 모두 올려라*/  /*not(this)이것을 제외하고~*/

            /* span이 없는경우 parent 안써도됨 */
            return false;
        });
        
        
        /* pc 화면 사이즈에서 모바일 메뉴 사라지고 초기화하기 */
        $(window).resize(function(){
            if($(this).width() > 800){
                $('#mb_navi').css('right','-100%');
                $('#sm_menu > ul > li > .menu_sec').hide();
                $('#sm_menu > ul > li > span a').removeClass('selected');
            }
        })
        
        
    });//JQuery 종료