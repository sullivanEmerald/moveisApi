document.querySelector('button').addEventListener('click', getData)

async function getData(){
    try{
        const movie = document.querySelector('input').value

        const res =  await fetch(`https://simple-moviestitle-api.herokuapp.com/api/${movie}`)
        const data = await res.json()

        console.log(data)
    }catch(error){
        console.error(error)
    }
    

}
