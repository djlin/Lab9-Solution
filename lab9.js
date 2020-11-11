'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        // console.log(jsonObj[0].SY);

        // of => [], in => { }
        for(let yearObj of jsonObj) {
            // console.log(typeof yearObj);
            // console.log(yearObj.SY);
            for(let semester of yearObj.Semesters) {
                // console.log(typeof semester);
                // console.log(semester.Semester);

                for(let departmentObj of semester.Departments) {
                    // console.log(departmentObj.Department);
                    for(let classObj of departmentObj.Classes) {
                        let trTag = gen("tr");
                        appendNewTDContent(trTag, yearObj.SY);
                        appendNewTDContent(trTag, semester.Semester);
                        appendNewTDContent(trTag, departmentObj.Department);
                        
                        for(let classInfo in classObj) {
                            appendNewTDContent(trTag, classObj[classInfo]);
                        }

                        id("table").appendChild(trTag);
                    }
                }
            }
        }  
    }

    /** ---- Helper Functions  ---- */
    function appendNewTDContent(trTag, content) {
        let tdTag = gen("td");
        tdTag.textContent = content;
        trTag.appendChild(tdTag);                        
    }

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();

let jsonObj = [
    {
        "SY": 2020,
        "Semesters": [
            {
                "Semester": "Spring",
                "Departments": [
                    {
                        "Department": "CS",
                        "Classes": [
                            {
                                "ID": 220,
                                "Name": "Computer Architecture",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "12:00 pm - 1:15 pm"
                            },
                            {
                                "ID": 101,
                                "Name": "Introduction to Programming",
                                "Section": 2,
                                "Instructor": "Yun Wang",
                                "Dates": "MW",
                                "Location": "ONL",
                                "Time": "TBD"
                            }
                        ]
                    },
                    {
                        "Department": "CIS",
                        "Classes": [
                            {
                                "ID": 445,
                                "Name": "Integrative Programming and Technology",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "3:00 pm - 4:15 pm"
                            },
                            {
                                "ID": 430,
                                "Name": "Information Technology Infrastructure",
                                "Section": 1,
                                "Instructor": "Tachun",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "10:30 am - 11:45 am"
                            }                        ]
                    }
                ]
            },
            {
                "Semester": "Fall",
                "Departments": [
                    {
                        "Department": "CS",
                        "Classes": [
                            {
                                "ID": 220,
                                "Name": "Computer Architecture",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "12:00 pm - 1:15 pm"
                            },
                            {
                                "ID": 101,
                                "Name": "Introduction to Programming",
                                "Section": 2,
                                "Instructor": "Yun Wang",
                                "Dates": "MW",
                                "Location": "ONL",
                                "Time": "TBD"
                            }
                        ]
                    },
                    {
                        "Department": "CIS",
                        "Classes": [
                            {
                                "ID": 445,
                                "Name": "Integrative Programming and Technology",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "3:00 pm - 4:15 pm"
                            },
                            {
                                "ID": 430,
                                "Name": "Information Technology Infrastructure",
                                "Section": 1,
                                "Instructor": "Tachun",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "10:30 am - 11:45 am"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "SY": 2021,
        "Semesters": [
            {
                "Semester": "Spring",
                "Departments": [
                    {
                        "Department": "CS",
                        "Classes": [
                            {
                                "ID": 220,
                                "Name": "Computer Architecture",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "12:00 pm - 1:15 pm"
                            },
                            {
                                "ID": 101,
                                "Name": "Introduction to Programming",
                                "Section": 2,
                                "Instructor": "Yun Wang",
                                "Dates": "MW",
                                "Location": "ONL",
                                "Time": "TBD"
                            }
                        ]
                    },
                    {
                        "Department": "CIS",
                        "Classes": [
                            {
                                "ID": 445,
                                "Name": "Integrative Programming and Technology",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "3:00 pm - 4:15 pm"
                            },
                            {
                                "ID": 430,
                                "Name": "Information Technology Infrastructure",
                                "Section": 1,
                                "Instructor": "Tachun",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "10:30 am - 11:45 am"
                            }
                        ]
                    }
                ]
            },
            {
                "Semester": "Fall",
                "Departments": [
                    {
                        "Department": "CS",
                        "Classes": [
                            {
                                "ID": 220,
                                "Name": "Computer Architecture",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "12:00 pm - 1:15 pm"
                            },
                            {
                                "ID": 101,
                                "Name": "Introduction to Programming",
                                "Section": 2,
                                "Instructor": "Yun Wang",
                                "Dates": "MW",
                                "Location": "ONL",
                                "Time": "TBD"
                            }
                        ]
                    },
                    {
                        "Department": "CIS",
                        "Classes": [
                            {
                                "ID": 445,
                                "Name": "Integrative Programming and Technology",
                                "Section": 1,
                                "Instructor": "Tachun Lin",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "3:00 pm - 4:15 pm"
                            },
                            {
                                "ID": 430,
                                "Name": "Information Technology Infrastructure",
                                "Section": 1,
                                "Instructor": "Tachun",
                                "Dates": "TR",
                                "Location": "ONL",
                                "Time": "10:30 am - 11:45 am"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];