// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(json => console.log(json))

const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')

    // show all button clickable
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden')
    }
    else {
        showAllContainer.classList.add('hidden')
    }

    console.log('is show all', isShowAll)
    if(!isShowAll){
        phones = phones.slice(0, 12)
    }
  

    // clear data
    phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone)

        // create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card w-96 bg-gray-100 `;

        // set innerHTML
        phoneCard.innerHTML = `<figure><img class="mt-5" src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="text-3xl text-center">${phone.phone_name
            }</h2>
            <p class="text-lg text-center">Price: 1000$</p>
            <div class="text-center">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>`;

        // append Child
        phoneContainer.appendChild(phoneCard)

        // hide loading Spinner
        toggleLoadingSpinner(false);
    })
}

// search bar and button clickable
const buttonClick = (isShowAll) => {
    toggleLoadingSpinner(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    console.log(searchText)
    loadPhone(searchText, isShowAll)
}

// // second search bar clickable
// const buttonClicked = () => {
//     toggleLoadingSpinner(true);
//     const inputField = document.getElementById('input-field2')
//     const searchText = inputField.value;
//     loadPhone(searchText)
// }

// loading spinner update
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

// show all button clickable
const showAll = () => {
    buttonClick(true)
}

// loadPhone()