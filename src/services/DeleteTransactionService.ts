import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

interface Request {
  id: string;
}
class DeleteTransactionService {
  public async execute(id: Request): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    const deleteResult = await transactionsRepository.delete(id);

    if (deleteResult.affected === 0)
      throw new AppError(
        'Could not find transaction to delete. Invalid Id.',
        400,
      );
  }
}

export default DeleteTransactionService;
