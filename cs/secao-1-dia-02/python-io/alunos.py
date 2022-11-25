recuStudents = []
with open('alunos.txt', mode="r") as gradesFile:
    for line in gradesFile:
        student_grade = line.split(' ')
        # print(student_grade)
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")
            # print(recuStudents)
with open("recuStudents.txt", mode="w") as recuStudentsFile:
    # print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
