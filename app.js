fetch('http://109.236.74.74:9900/getdata')
.then(response => {return response.json()})
.then(data => {
    const main = document.querySelector('main');
    const info = {...data};
    const arrayInfo = Object.values(info);
    const sliceArray = arrayInfo.slice(1,2);
    const newArray = arrayInfo.slice(2,3);
    main.innerHTML = sliceArray.map(item =>  { return`
            <div><h3 class="title">Title: ${item.Title}</h3></div>
                <div><h3 class="description">Description: ${item.Description}</h3></div>
            <div class="keyvalues"><strong>KeyValues: </strong>
                <h3 class="keyvalues__fueltype">FuelType: ${item.KeyValues.FuelType}</h3>
                <h3>GearBox: ${item.KeyValues.GearBox}</h3>
                <h3>TrimLevel: ${item.KeyValues.TrimLevel}</h3>
            </div>
            <div> <strong>Original:</strong> 
                <h3>Make: ${item.Original.Make}</h3>
                <h3>Model: ${item.Original.Model}</h3>
            </div> 
            <div> <strong>CarOptions:</strong>
                <h3>Title: ${item.Original.CarOptions.Title} </h3>
                <h3>Code: ${item.Original.CarOptions.Code} </h3>
            </div>
        `}
    )
    main.insertAdjacentHTML('beforeend', newArray.map(item => {
        return `
                <div class="garage"> <strong>Garage: </strong>
                <div>Email: <h3 class="garage__email"> ${item.Email}</h3> </div>
                <div>Name: <h3 class="garage__name"> ${ item.Name} </h3> </div>
                <div>Owner: <h3 class="garage__owner"> ${item.Owner}</h3> </div>
                </div>
    `}));
    return newArray
} )



const button = document.querySelector('.garage__edit')
const addForm = () => {
    button.disabled = true
    const email = document.querySelector('.garage__email')
    const name = document.querySelector('.garage__name')
    const owner = document.querySelector('.garage__owner')
    const form = document.querySelector('.form')

    form.innerHTML = `<div class="form_action">
                <input class='input__email' type="email" placeholder="shev-taras@ya.ru" value="shev-taras@ya.ru" >
                <input class='input__name' type="text" placeholder="input name" value="Taras">
                <input class='input__owner' type="text" placeholder="input owner" value="fantom">
                <button id="button" class='push' type="button" >Push</button>
                </div> `

    document.querySelector('.push').addEventListener('click', (e) => {
                e.preventDefault()
                const actionForm = document.querySelector('.form_action')
                email.textContent = document.querySelector('.input__email').value
                name.textContent = document.querySelector('.input__name').value
                owner.textContent = document.querySelector('.input__owner').value
                form.removeChild(actionForm)
                button.disabled = false
        })
}
button.addEventListener('click', addForm)

