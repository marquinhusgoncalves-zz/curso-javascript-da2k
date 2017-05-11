(function() {
    'use strict';
    var months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junh',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    var year = 2015;
    var month = months.indexOf('Janeiro');
    var day = 7;
    var hour = 10;
    var min = 10;
    var sec = 0;
    var milliseconds = 0;
    
    var date = new Date(year, month, day, hour, min, sec, milliseconds);

    console.log(date);

    //Date Object

    var date1 = new Date();

    console.log(date1.getDate()); // 0-31
    console.log(date1.getDay()); // 0-6
    console.log(date1.getFullYear()); // 2017
    console.log(date1.getYear()); // 117
    console.log(date1.getHours()); // 0-23

})();