const add = document.getElementById(`add`)
const cals = document.getElementById(`cals`)
const food = document.getElementById(`food`)
const total = document.getElementById(`total`)
let totalCals = 0;

const addFood = () => {
    const foodValue = food.value;
    const calsValue = parseInt(cals.value);

    if (!calsValue || isNaN(calsValue)) {
        alert(`Please Enter a calorie Value`)
    }

    if (!foodValue) {
        foodValue = `Food`
    }

    totalCals += calsValue;
    const div = document.createElement(`div`);
    div.innerHTML = `<p class='list-group-p'>${foodValue} - ${calsValue} Calories</p>`;
    div.className = `list-group-div`
    document.getElementById('div').appendChild(div);
    total.innerHTML = `Total Calories: ${totalCals}`;
    food.value = ``;
    cals.value = ``;

}

add.addEventListener(`click`, addFood);