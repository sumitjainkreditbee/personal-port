console.log('js loaded')
    //projects https://run.mocky.io/v3/d1c56b67-9208-427a-839f-5c0ad71a061d
    //Experience https://run.mocky.io/v3/684f320f-faa7-4213-b5ed-9f6c4912adc5
var projects = ''
    // res
    // <tr>
    //     <th>Firstname</th>
    //     <th>Lastname</th>
    //     <th>Age</th>
    // </tr>
    // <tr>
    //     <td>Jill</td>
    //     <td>Smith</td>
    //     <td>50</td>
    // </tr>
    // <tr>
    //     <td>Eve</td>
    //     <td>Jackson</td>
    //     <td>94</td>
    // </tr>

getProjects = async() => {
    let res = await fetch('https://run.mocky.io/v3/d1c56b67-9208-427a-839f-5c0ad71a061d')
    let data = await res.json()
    return data;
}

getProjects().then(data => {
    console.log(data)
    var html = `<tr>
         <th style='width:20%'>Name</th>
         <th style='width:50%'>Description</th>
         <th style='width:30%'>Stack</th>
     </tr>`
    data.forEach(item => {
        html +=
            `<tr>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>${item.stack}</td>
        </tr>
        `
    })
    console.log(html)
    document.getElementById('projects').innerHTML = html
})

getExp = async() => {
    let res = await fetch('https://run.mocky.io/v3/d0540fe6-083a-475d-894c-528d4f230f34')
    let data = await res.json()
    return data;
}

getExp().then(data => {
    console.log(data)
    var html = `<tr>
         <th style='width:20%'>Company</th>
         <th style='width:50%'>Description</th>
         <th style='width:30%'>Date</th>
     </tr>`
    data.forEach(item => {
        html +=
            `<tr>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>${item.timezone}</td>
        </tr>
        `
    })
    console.log(html)
    document.getElementById('exp').innerHTML = html
})