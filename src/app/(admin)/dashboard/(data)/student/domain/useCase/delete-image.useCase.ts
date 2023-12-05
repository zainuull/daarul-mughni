import { StudentRepository } from '../repository/student.repository';

export class DeleteImageUseCase {
  constructor(private masterRepo: StudentRepository) {}

  async invoke(publicId: string) {
    return this.masterRepo.deleteImage(publicId);
  }
}
