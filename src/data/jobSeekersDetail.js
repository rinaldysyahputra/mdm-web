
import moment from "moment-timezone";

export default [
    {
        "id" : 1 ,
        "question" : "if I have 10 balls. and between the balls there is one ball which has a heavier weight than the others. how do we find the ball that weighs more. Tools that can be used are balance scales. describe the fastest algorithm that can be used ?",
        "answers" : "by dividing the ball into 5: 5 and weighed then the most severe results are weighed again 2: 2 and weighed again, the heaviest result is weighed again 1: 1 result is the heaviest weigh back with the last 1 ball The heaviest 1: 1 result of the last ball scale is the result",
        "recomendation" : "by dividing the ball into 5: 5 and weighed then the most severe results are weighed again 2: 2 and weighed again, the heaviest result is weighed again 1: 1 result is the heaviest weigh back with the last 1 ball The heaviest 1: 1 result of the last ball scale is the result"
       } , {
         "id" : 2 ,
         "question" : "I have to design database with relation many to many Between 2 table Table Students contains ,name age  grade   and then the student have many ExtraClass contains className  classDesc  how to combine to relation many to many (with design ddl sql ) ?",
         "answers" : "CREATE TABLE Students (students_id int NOT NULL ,name varchar(225) NOT NULL,age int4 NOT NULL,grade int4 NOT NULL ,PRIMARY KEY  (student_id)) CREATE TABLE ExtraClass (extraclass_id int NOT NULL , className varchar(225) NOT NULL,classDesc  varchar(225) NOT NULL, PRIMARY KEY  (extraclass_id)) CREATE TABLE StudentClass (StudentClass_id          INT        NOT NULL, student_id int references Sudents(student_id),extraclass_id int references ExtraClass(extraclass_id),PRIMARY KEY (StudentClass_id))",
         "recomendation" : "CREATE TABLE Students (students_id int NOT NULL ,name varchar(225) NOT NULL,age int4 NOT NULL,grade int4 NOT NULL ,PRIMARY KEY  (student_id)) CREATE TABLE ExtraClass (extraclass_id int NOT NULL , className varchar(225) NOT NULL,classDesc  varchar(225) NOT NULL, PRIMARY KEY  (extraclass_id)) CREATE TABLE StudentClass (StudentClass_id          INT        NOT NULL, student_id int references Sudents(student_id),extraclass_id int references ExtraClass(extraclass_id),PRIMARY KEY (StudentClass_id))"
       
       } ,  {
         "id" : 3 ,
         "question" : `I have to design database with "relation" many to many Between 2 table Table Students contains ,name age  grade   and then the student have many ExtraClass contains className  classDesc  how to combine to relation many to many (with design ddl sql ) ?`,
         "answers" : "CREATE TABLE Students (students_id int NOT NULL ,name varchar(225) NOT NULL,age int4 NOT NULL,grade int4 NOT NULL ,PRIMARY KEY  (student_id)) CREATE TABLE ExtraClass (extraclass_id int NOT NULL , className varchar(225) NOT NULL,classDesc  varchar(225) NOT NULL, PRIMARY KEY  (extraclass_id)) CREATE TABLE StudentClass (StudentClass_id          INT        NOT NULL, student_id int references Sudents(student_id),extraclass_id int references ExtraClass(extraclass_id),PRIMARY KEY (StudentClass_id))",
         "recomendation" : 
         `CREATE TABLE Students ( 
           students_id int NOT NULL ,
           name varchar(225) NOT NULL,
           age int4 NOT NULL,
           grade int4 NOT NULL ,
         PRIMARY KEY  (student_id)
         )
         CREATE TABLE ExtraClass (
           extraclass_id int NOT NULL ,
           className varchar(225) NOT NULL,
           classDesc  varchar(225) NOT NULL,
         PRIMARY KEY  (extraclass_id)
         )
         
         CREATE TABLE StudentClass (
            StudentClass_id          INT        NOT NULL,
            student_id int references Sudents(student_id),
            extraclass_id int references ExtraClass(extraclass_id),
            PRIMARY KEY (StudentClass_id)
         );`
    }
]