const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
e.preventDefault();
    const girlName = document.getElementById('Girl');
    const boyName = document.getElementById('Boy');

    const l1 = boyName.value.length;
    const l2 = girlName.value.length;

    const result = Math.pow((l1 + l2), 3) % 101;

    document.querySelector('h2').textContent = `Result: ${result}%`;

    form.reset();
});