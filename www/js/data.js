let Data = function () {
    

    $(document).ready(function () {
    
        $.ajax({
          headers: { 'X-Auth-Token': '42dff9f5f0ae454e9d14a26a2c4b4a72' },
          url: 'https://api.football-data.org/v2/competitions/CL/matches',
          dataType: 'json',
          type: 'GET',
        }).done(function(response) {
            
          console.log(response); 


       
        $('#matches').show();
        $('#empty').hide();
        


        for (let i = 0; i < response.matches.length; i++){
  
           
   
               if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 1){
              
                   $('#matchday1').append("<table>" +
                   "<tbody>" + "<tr>" +
                   "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
                   "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
                   "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
                   "</tr>" + "</tbody>" +
                   "</table>");
                   
                  console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                 ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
            if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 2){
   
               $('#matchday2').append("<table>" +
               "<tbody>" + "<tr>" +
               "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
               "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
               "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
               "</tr>" + "</tbody>" +
               "</table>");
              
               console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
           if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 3){
   
               $('#matchday3').append("<table>" +
               "<tbody>" + "<tr>" +
               "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
               "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
               "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
               "</tr>" + "</tbody>" +
               "</table>");
   
              
               console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
           if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 4){
   
               $('#matchday4').append("<table>" +
                   "<tbody>" + "<tr>" +
                   "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
                   "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
                   "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
                   "</tr>" + "</tbody>" +
                   "</table>");
   
              
               console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
           if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 5){

               $('#matchday5').append("<table>" +
                   "<tbody>" + "<tr>" +
                   "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
                   "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
                   "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
                   "</tr>" + "</tbody>" +
                   "</table>");
   
              
               console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
   
           if(response.matches[i].stage === "GROUP_STAGE" && response.matches[i].status === "FINISHED" && response.matches[i].matchday === 6){
             
               $('#matchday6').append("<table>" +
                   "<tbody>" + "<tr>" +
                   "<td class='left-align'>" + response.matches[i].homeTeam.name + "</td>" +
                   "<td class='score' style='color:black'>" +  response.matches[i].score.fullTime.homeTeam + ' - ' + response.matches[i].score.fullTime.awayTeam + "</td>" +
                   "<td class='right-align' style='color:red'>" + response.matches[i].awayTeam.name + "</td>" +
                   "</tr>" + "</tbody>" +
                   "</table>");
   
              
               console.log(response.matches[i].homeTeam.name + ' ' , response.matches[i].score.fullTime.homeTeam +
                ' vs ' + response.matches[i].awayTeam.name + ' '  , response.matches[i].score.fullTime.awayTeam) 
           }
   
           }
       
       
          
        })
        .fail(function(){
            $('#matches').hide();
        $('#empty').show();
        });
    }); 

    

}();