// There is a JSON file with students. Make a call to the file and get the following data from it:

// For every student log the following sentence: "FULL_NAME is comming from CITY, he is AGE years old and he is FAILING/PASSING the class" (FILING if his average greade is 1, PASSING if it's 2 or more).
// All male students that are not from Skopje
// All female students that are not under 18 years old.
// The average age of the students.
// All female students with a last name ending with A.

//https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json

fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
.then(response => response.json())
.then (students => {
    console.log(students)
   students.forEach(s => {
    //For every student log the following sentence:
       let passOrFail = s.averageGrade <= 1 ? "failing" : "passing";
       console.log(`${s.firstName} ${s.lastName} is coming from ${s.city} and is ${s.age} years old and is ${passOrFail} the class`);
        
    });

    
      // All male students that are not from Skopje

      let notSkopje = students => students.filter( students => students.gender === "Male"  && students.city !== "Skopje")
      console.log(notSkopje(students));
      // All female students that are not under 18 years old.

      let fAdultStudents = students => students.filter(students => students.gender === "Female"  && students.age >= 18)
      console.log(fAdultStudents(students))
      
      // The average age of the students.

     let averageAge = students => students.map(students => students.age).reduce((sum,avgAge) => sum + avgAge , 0 )/ students.length;
     console.log(averageAge(students))
     // All female students with a last name ending with A.

     let fStudentsA = students => students.filter (students =>students.gender === "Female" && students.lastName.endsWith(`a`))
     console.log(fStudentsA(students))

})


     