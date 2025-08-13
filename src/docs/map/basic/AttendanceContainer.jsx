import React, { useState } from 'react';

const AttendanceContainer = () => {

  // 1. isPresent 출석 여부
  // 화면에 모든 학생을 출력

  // attendance.name 으로 키에 접근해서 이름의 value를 모두 출력

  // 2. 출석했다면 글자색을 파란색으로 변경한다.
  // 상태변경 : useState()
  // setStyle()


  // isPresent가 true라면 e.target.value
  // 3. 출석하지 않았다면 글자크기를 10px로 변경한다.
  // isPresent가 false라면 fontSize: "10px"

  // 4. Attendance 컴포넌트로 분리

  // 먼저 컨테이너부터

  // const [style, setStyle] = useState("")
  
  //  ==================================
  // 객체들을 리스트로 쓰고 싶은 것
  // 



    const attendanceData = [
    { id: 1, name: "이승참", isPresent: true },
    { id: 2, name: "유한미", isPresent: false },
    { id: 3, name: "김정술", isPresent: true },
    { id: 4, name: "이영성", isPresent: false },
    { id: 5, name: "최무빈", isPresent: true },
    { id: 6, name: "김태희", isPresent: false },
    { id: 7, name: "최중서", isPresent: true },
    { id: 8, name: "정승훈", isPresent: false },
    { id: 9, name: "조예설", isPresent: true },
    { id: 10, name: "이현길", isPresent: true },
    { id: 11, name: "송병궁", isPresent: true },
    { id: 12, name: "배승둘", isPresent: true },
    { id: 13, name: "박응규", isPresent: true },
    { id: 14, name: "당긴철", isPresent: true },
  ];

  const [style, setStyle] = useState("")
  const [attendance, setAttendance] = useState("")

  const studentList = attendanceData.map((student) => <li>{student.name}</li>)
  console.log(studentList)



  // const onChangeStyle = (e) => {

  //   const target = e.target.value

  //   if(target === ){
  //     setStyle({color:"blue"})
  //   }
    
  //   else if(/*isPresent가 false라면*/){
  //     setStyle({fontSize: "10px"})
  //   }
 
  // }
  


  // 태그안에 중괄호 -> JSX문법 (삼항연산자)
  return (
    <li>

    </li>
  )


  return (
    <ul>
      {studentList}
    </ul>
  );
};

export default AttendanceContainer;