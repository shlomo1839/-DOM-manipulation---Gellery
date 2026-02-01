const input = document.getElementById("sizebox");
const btn = document.getElementById("box");
const container = document.getElementById("container")

btn.addEventListener('click', function() {
    const count = input.value
    container.innerHTML = "";

    for (let i = 1; i <= 0; i++){
        const newBox = document.createElement('div');
        newBox.classList.add('box')
        newBox.innerText = i;


         const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        newBox.style.backgroundColor = randomColor;

        newBox.addEventListener('click', function() {
            newBox.remove();
        });

        container.appendChild(newBox)
    }
});