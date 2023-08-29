// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(json => console.log(json))

const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}


const displayPhones = phones => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')

    // show all button clickable
    const showAllContainer = document.getElementById('show-all-container')
    if( phones.length > 12){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }

    // display show
    phones = phones.slice(0, 12)

    // clear data
    phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone)

        // create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card w-96 bg-gray-100 `;

        // set innerHTML
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>`;
        
        // append Child
        phoneContainer.appendChild(phoneCard)
    })
}

// search bar and button clickable
const buttonClick = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    console.log(searchText)
    loadPhone(searchText)
}

const buttonClicked = () => {
    const inputField = document.getElementById('input-field2')
    const searchText = inputField.value;
    loadPhone(searchText)
}

// loadPhone()