const seats = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let seatRemain = 40;
let seatTotalPrice = 0;
let seatGrandTotal = 0;
let discountPrice = 0;

for(const seat of seats){
    seat.addEventListener('click', function(event){
        // Not Allowed more than 4 seats
        if(seatCount>=4){
            alert('You can not add more than 4 seats');
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

            //grand total
            seatGrandTotal = seatTotalPrice;
            setInnerText('grand-total', seatGrandTotal);
            
            const phone = document.getElementById('phone').value;
            const button = document.getElementById('nextButton')
            if(seatCount>0 && phone>0){
                button.removeAttribute('disabled');
            }
        }
    })

    document.getElementById('apply-btn').addEventListener('click', function(){
        const couponCode = document.getElementById('copoun').value;
        const couponDiv = document.getElementById('copoun-div');
        const discountDiv = document.getElementById('discount-disabled');
        if(couponCode === "NEW15" && seatCount === 4){
            couponDiv.classList.add('hidden');
            discountDiv.classList.remove('hidden');
            // Discount Calculate
            discountCalculate(0.15)
            setInnerText('totalDiscount', discountPrice);
            setInnerText('grand-total', seatGrandTotal);
        }
        else if(couponCode === "Couple 20" && seatCount === 4){
            couponDiv.classList.add('hidden');
            discountDiv.classList.remove('hidden');
            // Discount Calculate
            discountCalculate(0.20)
            setInnerText('totalDiscount', discountPrice);
            setInnerText('grand-total', seatGrandTotal);
        }
    })

}

document.getElementById('phone').addEventListener('keyup', function(event){
    const phone = event.target.value;
    const button = document.getElementById('nextButton')
    if(seatCount>0 && phone>0){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true);
    }
})

function discountCalculate(percent){
    discountPrice = seatTotalPrice * percent;
    seatGrandTotal = seatTotalPrice - discountPrice;
}

function setInnerText(elementName, value){
    document.getElementById(elementName).innerText = value;
}

function reload(){
    location.reload();
}