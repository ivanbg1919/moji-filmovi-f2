var filmovi = [
    {
        naslov: 'A Prophet',
        godina: 2020,
        rezija: 'Jacques Audiard',
        ocena: 7.9
        		
    },    
	{
        naslov: 'Bad Boys',
        godina: 1983,
        rezija: 'Rick Rosenthal',
        ocena: 7.2
        		
    },
	{
        naslov: 'Blow Out',
        godina: 1981,
        rezija: 'Brian De Palma',
        ocena: 7.4        		
    },             
    {
        naslov: 'Borat Subsequent Moviefilm',
        godina: 2020,
        rezija: 'Jason Woliner',
        ocena: 6.7
        	
    }, 
    {
        naslov: 'Crawl',
        godina: 2019,
        rezija: 'Alexandre Aja',
		ocena: 6.2	
    },
    {
        naslov: 'Critters',
        godina: 1986,
        rezija: 'Stephen Herek',
		ocena: 6.1	
    },
    {
        naslov: 'Eurovision Song Contest The Story Of Fire Saga',
        godina: 2020,
        rezija: 'David Dobkin',
		ocena: 6.5	
    }
];
// Sortable Table Columns
$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order == 'desc') {
        $(this).data('order', 'asc')
        filmovi = filmovi.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    }else {
        $(this).data('order', 'desc')
        filmovi = filmovi.sort((a,b) => a[column] < b[column] ? 1 : -1)
       text += '&#9650'     
    }
    $(this).html(text)
    buildTable(filmovi)
});


// call search input
$('#search-input').on('keyup', function() {
    var value = $(this).val()
    /*console.log('Value:', value);*/
    var data = searchTeable(value, filmovi)
    buildTable(data)
})

buildTable(filmovi)


function searchTeable(value, data) {
    var filteredData = [];

    for (var i =0; i < data.length; i++) {
        value = value.toLowerCase()
        var naslov = data[i].naslov.toLowerCase()

        if(naslov.includes(value)) {
            filteredData.push(data[i])
        }
    }

    return filteredData
}

function buildTable (data) {    

    var table = document.getElementById('myTable')
    
    table.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                      <td>${data[i].naslov}</td>  
                      <td>${data[i].godina}</td>
                      <td>${data[i].rezija}</td>
                      <td>${data[i].ocena}</td>
                  </tr>`
        table.innerHTML += row;    
    }
 }
    


