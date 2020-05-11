import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<number> {
    const transactionsRepository = getRepository(Transaction);

    const transaction = await transactionsRepository.findOne({
      where: { id },
    });

    if (!transaction) {
      throw new AppError('The transaction does not exists.', 400);
    }

    await transactionsRepository.remove(transaction);

    return 204;
  }
}

export default DeleteTransactionService;
