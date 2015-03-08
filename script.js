  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <!-- Javascript de Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

    <script>
      $(function (){

                $('.carousel').carousel();


                $('blockquote a').tooltip();



                $('.btn-group .btn:nth-child(1)').click(function () {
                  $('iframe').attr('src', 'http://www.youtube.com/embed/VmnIeLmjuHA');
                })
                $('.btn-group .btn:nth-child(2)').click(function () {
                  $('iframe').attr('src', 'http://www.youtube.com/embed/fRAG4T-iqqY');
                })
                $('.btn-group .btn:nth-child(3)').click(function () {
                  $('iframe').attr('src', 'http://www.youtube.com/embed/yua4jzecCIE');
                })

      });
    </script>