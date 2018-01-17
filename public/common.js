$('document').ready(() => {

    $('.getData').click((e) => {

        e.preventDefault();

        let form = $('#weather').serialize();

        console.log(form);

        $.get(`/api/weather?${form}`, (data) => {

            console.log(data);

            let weatherData = JSON.parse(data);
            console.log(weatherData);
            let weatherTemplate = $('.town').html();
            let obj = _.pick(weatherData, ['coord',
                                           'main.temp',
                                           'wind.speed',
                                           'name',
                                           'sys.country',
                                           'sys.sunrise',
                                           'sys.sunset',
                                           'weather[0].main',
                                           'weather[0].description' ]);
            console.log(obj);
            console.log(weatherTemplate);
            let html = _.template(weatherTemplate)(obj);
            // let dom = document.createElement('div');
            //     dom.setAttribute('class', 'col col-md alert alert-info');
            //     // dom.classList.add('alert-info');
            //     dom.innerHTML = html;      
            $('.repres').html(html).addClass('alert alert-info');
        })
    })
    
})