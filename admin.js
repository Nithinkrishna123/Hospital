function view(){
    const ab = {
        method: 'POST',
        headers: {
        'x-hasura-admin-secret': 'eW2N4pYAOZqbc9eF8fxdTmhD0k7o9SqAS78y3B1SEEgO52ilun8d6URct6KFzWi1'
        },
        //getting data from hasura
        body: JSON.stringify({
        query: `query{
            admin{
              date
              time
              name
            }
          }
        `
        })
    }
    fetch("https://sensible-redbird-59.hasura.app/v1/graphql",ab)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //declaring
        var scno0 = document.getElementById("scno");
        var date0 = document.getElementById("date");
        var time0 = document.getElementById("time");
        var patient_name0 = document.getElementById("patient_name");
        //var length=data.data.admin.length;
        for(let i=0;i<1;i++){
          var scno2 = document.createElement("ul");
          var date2 = document.createElement("ul");
          var time2 = document.createElement("ul");
          var patient_name2 = document.createElement("ul");
          //from table to assign var
          //var scno1=data.data.admin[i].scno;
          var scno1=i+1;
          var date1=data.data.admin[i].date;
          var time1=data.data.admin[i].time;
          var patient_name1=data.data.admin[i].name;
          //printing
          scno2.innerHTML=scno1;
          date2.innerHTML=date1;
          time2.innerHTML=time1;
          patient_name2.innerHTML=patient_name1;
          //another list
    scno0.appendChild(scno2);
    date0.appendChild(date2);
    time0.appendChild(time2);
    patient_name0.appendChild(patient_name2);
}
        })
        //table reltion details
        const baby = {
          method: 'POST',
          headers: {
          'x-hasura-admin-secret': 'eW2N4pYAOZqbc9eF8fxdTmhD0k7o9SqAS78y3B1SEEgO52ilun8d6URct6KFzWi1'
          },
          //getting data from hasura
          body: JSON.stringify({
          query: `query{
              admin{
                doctor_alloted{
                  name
                }
              }
            }
          `
          })
      }
      fetch("https://sensible-redbird-59.hasura.app/v1/graphql", baby)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var length=data.data.admin.length;
        var doctor_name0 = document.getElementById("doctor_name");
        for(let i=0;i<length;i++){
          var doctor_name2 = document.createElement("ul");
          var patient_name1=data.data.admin[i].doctor_alloted[0].name;
          doctor_name2.innerHTML=patient_name1;
          doctor_name0.appendChild(doctor_name2);
      }
    })
}