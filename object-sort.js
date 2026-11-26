students =[
    {name : "vimal",mark :80},
    {name :"arun",mark:70},
    {name :"albin",mark:85},
    {name :"alex",mark :90},
    {name :"noel",mark:95}
];

console.log(students.sort((a,b)=>b.mark-a.mark));