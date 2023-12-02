import { ITeacherDataModel } from "@/model/teacher";
import { ITeacherModel, ITeacherQuery } from "../model/IModel";

export interface TeacherRepository {
    getTeachers(query?:ITeacherQuery): Promise<ITeacherModel>
    getTeachersById(id:string) : Promise<ITeacherModel>
    getTeacherByPosition(positionName:string) : Promise<ITeacherModel>
    createTeacher(data:ITeacherDataModel) : Promise<ITeacherModel>
    deleteTeacher(id:string) : Promise<ITeacherModel>
    updateTeacher(id:string,data:ITeacherDataModel) : Promise<ITeacherModel>
}