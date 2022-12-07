const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');




const getTime = () => {
    setTimeout(()=>{
        let newDate = new Date()
        let newHour = newDate.getHours();
        let newMin = newDate.getMinutes();
        let newSec = newDate.getSeconds();

        hour.innerHTML = newHour;
        minute.innerHTML = newMin;
        second.innerHTML = newSec;

        // document.getElementById('date').innerHTML = newDate
        getTime()
    }, 1000)

    
}

getTime()