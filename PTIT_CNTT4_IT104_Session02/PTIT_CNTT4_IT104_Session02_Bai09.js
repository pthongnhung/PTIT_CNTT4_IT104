function getStudentSummary(student) {
    const subjects = student.listMonHoc; 

    const total = subjects.reduce((sum, value) => sum + value.score, 0);
    const average = total / subjects.length.toFixed(1);

    let rank = "";
    if (average >= 8.5) {
        rank = "Học sinh giỏi";
    } else if (average >= 7) {
        rank = "Học sinh khá";
    } else if (average >= 5) {
        rank = "Học sinh trung bình";
    } else {
        rank = "Học sinh yếu";
    }
    const maxSubject = subjects.reduce((max, current) =>
        current.score > max.score ? current : max
    );

    const minSubject = subjects.reduce((min, current) =>
        current.score < min.score ? current : min
    );

    return `${student.name} có điểm trung bình ${average.toFixed(2)}, xếp loại ${rank}. 
Môn học tốt nhất là ${maxSubject.subject}, môn học kém nhất là ${minSubject.subject}.`;
}

const student = {
    name: "Dev",
    age: 20,

    listMonHoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "physics", score: 8 },
        { subject: "Literature", score: 6.5 }
    ]
};

console.log(getStudentSummary(student));