export interface BerandaRepository {
  getUserByEmail(email: string): Promise<any>;
}
