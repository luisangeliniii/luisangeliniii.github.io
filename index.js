function Experiencia(){
    document.getElementById("InfoExtra").innerHTML=("Habiendo montado tablas de bodyboard desde el inicio del deporte, Stewart es el bodyboarder con más experiencia actualmente en la gira ")
    }
    
    function Manufactura(){
        document.getElementById("InfoExtra").innerHTML=("Stewart ha estado involucrado en el diseño y fabricación de tablas de bodyboard a lo largo de su carrera, teniendo una estrecha relación desde la infancia con el inventor de la tabla de bodyboard moderna, Tom Morey Desde 1998, Stewart ha fabricado su propia línea de tablas bajo la etiqueta Science Bodyboards")
        }
        function filmografia(){
            document.getElementById("InfoExtra").innerHTML=("Stewart terminó recientemente una gira por Australia y Estados Unidos estrenando su nueva película Fire creada y dirigida por el cineasta Scott Carter. Aparece en la película Blue Crush del 2002. Aparece en la película de Zalman King de 1998 In God's Hands")
        }

        function DatosPersonales(){
            document.getElementById("InfoExtra").innerHTML=("Nombre: Mike Stewart Edad: 58 Fecha de nacimiento: 17 de Mayo de 1963 Lugar de nacimiento: Hawaii, Estados Unidos Signo: Tauro Altura: 183cm Estado civil: Casado con Lisa Miller en 1996")
        }

        
        $(document).ready(function(){
    
            $('.ir-arriba').click(function(){
                $('body, html').animate({
                    scrollTop: '0%'
                }, 300);
            });
        
            $(window).scroll(function(){
                if( $(this).scrollTop() > 0 ){
                    $('.ir-arriba').slideDown(300);
                } else {
                    $('.ir-arriba').slideUp(300);
                }
            });
        
        });
    
    