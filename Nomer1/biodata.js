var biodata, status;
biodata = { "name"    : "Ade Isman Aji",
            "address" : "Kp. Pasir Kiara 01/08 Padamulya Majalaya Bandung Jawa Barat",
            "hobbies" : ["Sport", " Music"],
            "married" : false,
            "school"  : { "highschool" : "SMK Negeri 1 Majalaya",
                          "university" : "-"

                        },
            "skills"  : { "Programming" : [ "HTML", " CSS", " JavaScript" ],
                          "Server"      : [ "Linux", " Windows" ],
                          "Computer"    : [ "Installation", " Maintenance" ]

                        }
          }


function printBiodata(){
  document.getElementById('name').innerHTML = biodata['name'];
  document.getElementById('address').innerHTML = biodata['address'];
  document.getElementById('hobbies').innerHTML = biodata['hobbies'];

  if( biodata["married"] ){
    document.getElementById('married').innerHTML = 'Married';
  }else {
    document.getElementById('married').innerHTML = 'Not Married';
  }

  document.getElementById('highschool').innerHTML = biodata['school']['highschool'];
  document.getElementById('university').innerHTML = biodata['school']['university'];
  document.getElementById('skills').innerHTML = 'Programming = ' + biodata['skills']['Programming'];
  document.getElementById('skills2').innerHTML = 'Server = ' + biodata['skills']['Server'];
  document.getElementById('skills3').innerHTML = 'Computer = ' + biodata['skills']['Computer'];
}
printBiodata();
