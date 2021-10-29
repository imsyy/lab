/*
Theme by: WebThemez.com 
*/
$( function() {
        var endDate = "May 29, 2021 15:03:25";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>天</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>时</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
		
		
		
      });
   