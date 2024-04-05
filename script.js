document.addEventListener('DOMContentLoaded', () => {
    const passengerInfoItem = document.querySelector('.info.passenger .info__detail');
    if (passengerInfoItem) {
      passengerInfoItem.textContent = 'Student';
    }
  });

// // Fetch the JSON file
// fetch('sample18-22.json')
//   .then(response => response.json())
//   .then(data => {
//     // Extract the required fields and store them in a list
//     const studentList = data.map(student => {
//       return {
//         rollNo: student.RollNo,
//         studentName: student.Student_Name,
//         email: student.Email,
//         job:student.Current_Job_Position,
//         company: student.Current_Company,
//         location: student.Location


//       };
//     });

//     // Log the studentList to the console
//     console.log(studentList);
//     console.log(typeof(studentList));
//   })
//   .catch(error => console.error('Error fetching data:', error));
  
  fetch('sample18-22.json')
  .then(response => response.json())
  .then(data => {
    // Extract the required fields and store them in a list of lists
    const studentList = data.map(student => {
      return [
        student.RollNo,
        student.Student_Name,
        student.Email,
        student.Current_Job_Position,
        student.Current_Company,
        student.Location
      ];
    });

    // Log the studentList to the console
    console.log(studentList);
    console.log(typeof(studentList));
  })
  .catch(error => console.error('Error fetching data:', error));