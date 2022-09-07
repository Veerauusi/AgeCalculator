//result cards invisible by default
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('invalid').style.visibility = 'hidden';


document.getElementById('birthDate').addEventListener('input', function(e){

    //collect input value
    const inputDate = e.target.value;
    console.log(inputDate);

    //convert to string
    const stringDate = inputDate.toString();

    //get year, month and day separately
    const birthDateYear = parseInt(stringDate.substring(0,4), 10);
    const birthDateMonth = parseInt(stringDate.substring(5,7), 10);
    const birthDateDay = parseInt(stringDate.substring(8,10), 10);
    console.log('Born in year ', birthDateYear, ', in month', birthDateMonth, 'and in day ', birthDateDay);

    //get current date
    const todayDate = new Date();

    //put together birthday date
    const birthDate = new Date(birthDateYear, birthDateMonth-1, birthDateDay);
    console.log(birthDate);

    //difference of dates
    const diffInMillisecond = todayDate.valueOf() - birthDate.valueOf();

    //convert difference from milliseconds to days, hours and seconds
    const ageDays = Math.floor(diffInMillisecond / 86400000);
    console.log(ageDays,'days');

    const ageWeeks = Math.floor(diffInMillisecond / 604800000);
    console.log(ageWeeks,'weeks');

    const ageYears = Math.floor(diffInMillisecond / 31556926000);
    console.log(ageYears,'years');

    document.getElementById('daysResult').innerHTML = ageDays;
    document.getElementById('weeksResult').innerHTML = ageWeeks;
    document.getElementById('yearsResult').innerHTML = ageYears;

    if (birthDate>todayDate) {
        document.getElementById('invalid').style.visibility = 'visible';
        document.getElementById('output').style.visibility = 'hidden';
        console.log('invalid date');
    }
    else {
        document.getElementById('invalid').style.visibility = 'hidden';
        document.getElementById('output').style.visibility = 'visible';
        console.log('valid date');
    }

});