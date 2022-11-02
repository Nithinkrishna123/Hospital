function sp(){
    let name1=document.getElementById('name').value;
    let phno1=document.getElementById('phno').value;
    let email1=document.getElementById('email').value;
    let gender1=document.querySelector('input[name="gender"]:checked').value; 
    let slot1 =document.querySelector('input[name="timeslot"]:checked').value;
    let disease1=document.querySelector('#disease').value;  
    //connecting to hasura
    //for patient table
    const ab={
        method:'POST',
        headers:{
            'x-hasura-admin-secret': 'eW2N4pYAOZqbc9eF8fxdTmhD0k7o9SqAS78y3B1SEEgO52ilun8d6URct6KFzWi1'
        },
        body: JSON.stringify({
            query: `mutation {
                insert_patient(objects: [{ name: "${name1}", phno : "${phno1}",email : "${email1}", gender:"${gender1}", slot:"${slot1}", disease:"${disease1}" }])
            {
                returning {
                name} }
             }
            `
        })
    }
    //admin table storing data
    const bc={
        method:'POST',
        headers:{
            'x-hasura-admin-secret': 'eW2N4pYAOZqbc9eF8fxdTmhD0k7o9SqAS78y3B1SEEgO52ilun8d6URct6KFzWi1'
        },
        body: JSON.stringify({
            query: `mutation {
                insert_admin(objects: [{ name: "${name1}", phno : "${phno1}",email : "${email1}", gender:"${gender1}", slot:"${slot1}", disease:"${disease1}" }])
            {
                returning {
                name} }
             }
            `
        })
    }
    fetch("https://sensible-redbird-59.hasura.app/v1/graphql", ab);
    fetch("https://sensible-redbird-59.hasura.app/v1/graphql", bc);
    alert("successfully saved");
}