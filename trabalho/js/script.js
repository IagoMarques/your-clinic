var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    var name = document.getElementById('username').value

    console.log(name)


})