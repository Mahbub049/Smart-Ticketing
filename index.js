const seats = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let seatRemain = 40;
let seatTotalPrice = 0;

for(const seat of seats){
    seat.addEventListener('click', function(event){
        // Not Allowed more than 4 seats
        if(seatCount>=4){
            alert('Not Allowed');
            return;
        }
        else{
            // Coloring the element on click (both text and bg)
            event.target.style.backgroundColor = '#1DD100';
            event.target.style.color = 'white';
            
            //Disable the selected seat
            event.target.setAttribute("disabled", true);

            // counting seat pressed
            seatCount = seatCount + 1;
            setInnerText('totalSeat',seatCount);
            
            // Reduce seat count
            seatRemain = seatRemain - 1;
            setInnerText('seatRemain',seatRemain);

            // Set the seat names
            const seatPicked = event.target.innerText;
            const seatDisplay = document.getElementById('seatInfo');
            
            const division = document.createElement('div');
            division.classList.add('flex');
            division.classList.add('justify-between');
            division.classList.add('text-gray-800');

            const seat = document.createElement('p');
            seat.innerText = seatPicked;
            const seatClass = document.createElement('p');
            seatClass.innerText = 'Economy';
            const seatPrice = document.createElement('p');
            seatPrice.innerText = 550;

            division.appendChild(seat);
            division.appendChild(seatClass);
            division.appendChild(seatPrice);

            seatDisplay.appendChild(division);
            
            // Total seat price count
            const totalSeatCosting = document.getElementById('totalSeatPrice');
            seatTotalPrice = seatTotalPrice + 550;
            setInnerText('totalSeatPrice', seatTotalPrice);

        }

    })
}

function setInnerText(elementName, value){
    document.getElementById(elementName).innerText = value;
}

// function setBackgroundColor(elementName){
//     document.getElementById(elementName).classList.add('bg-[#1DD100]')
// }