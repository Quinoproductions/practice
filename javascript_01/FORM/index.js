const processForm = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    if (title === '') {
        alert('campo obligatorio');
    }
    console.log(title);
}