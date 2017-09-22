//JQuery
$(document).ready(function(){
//When search button is clicked
  $('#search').click(function(){
    //Gets search input
    var searchTerm =$('#searchTerm').val();
   //API url with search term
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +searchTerm+'&format=json&callback=?';
    //ajax call to get information
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
        //clear previously input values in search bar
        $('#output').html('');
        //print items to number in first outer array (heading) in data from api
        for(var i=0; i<data[1].length; i++){
          $('#output').append("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert("Error");
      }

    });
  });
});
