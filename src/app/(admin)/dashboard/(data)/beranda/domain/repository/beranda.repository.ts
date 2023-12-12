export interface BerandaRepository {
  getUserById(id: string): Promise<any>;
}
