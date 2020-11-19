
        var target = {
          setcolor : function(color){
            document.querySelector('body').style.color = color;},
          setBackgroundColor : function(color){
            document.querySelector('body').style.backgroundColor = color;}
        };
        var Links = {
          setcolora : function(color){
                      var alist = document.querySelectorAll('a');
                      var i = 0;
                      while (i < alist.length) {
                        alist[i].style.color = color;
                        i = i+1;}
          }
        };

        function buttonclick(nightday){
          if(nightday.value==='night')
            {target.setBackgroundColor('gray');
              target.setcolor('white');
                nightday.value='day';
                Links.setcolora('white');
              }
              else
              {target.setBackgroundColor('white');
              target.setcolor('black');
            nightday.value='night';
            Links.setcolora('black');
              }
            };
