import { IAbsensiDataModel, IAbsensiModel, IAbsensiQuery } from "../model/IModel";

export interface AbsensiRepository {
    getAbsensi(query?:IAbsensiQuery) : Promise<IAbsensiModel>
    getAbsensiById(id: string) : Promise<IAbsensiModel>
    getAbsensiByClass(className: string) : Promise<IAbsensiModel>
    createAbsensi(data: IAbsensiDataModel) : Promise<IAbsensiModel>
    updateAbsensi(id: string, data: IAbsensiDataModel) : Promise<IAbsensiModel>
    deleteAbsensi(id: string) : Promise<IAbsensiModel>
}