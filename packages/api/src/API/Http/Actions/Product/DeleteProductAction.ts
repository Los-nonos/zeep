import { Request, Response } from 'express';
import ProductDeleteHandlerInterface from '../../../../Infraestructure/Interfaces/Product/ProductDeleteHandlerInterface';
import DeleteProductAdapter from '../../Adapter/Product/DeleteProductAdapter';
import { inject, injectable } from 'inversify';
import ProductDeleteCommand from '../../../../Application/Commands/Product/ProductDeleteCommand';
import TYPES from '../../../../Infraestructure/DI/types';
import { HTTP_CODES } from '../../Enums/HttpCodes';

@injectable()
class DeleteProductAction {
  private handler: ProductDeleteHandlerInterface;
  private adapter: DeleteProductAdapter;
  constructor(
    @inject(TYPES.IProductDeleteHandler) handler: ProductDeleteHandlerInterface,
    @inject(DeleteProductAdapter) adapter: DeleteProductAdapter,
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(req: Request, res: Response) {
    const command: ProductDeleteCommand = await this.adapter.from(req.params);
    await this.handler.Handle(command);

    return res.status(HTTP_CODES.NO_CONTENT).end();
  }
}

export default DeleteProductAction;
