import { Container } from 'inversify';
import 'reflect-metadata';
import TYPES from './types';

//User imports
import UserControllerInterface from './Infraestructure/Interfaces/UserControllerInterface';
import CreateUserHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/CreateUserHandlerInterface';
import DeleteUserHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/DeleteUserHandlerInterface';
import EditUserHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/EditUserHandlerInterface';

import UserController from './Application/Controllers/UserController';
import UserCreateHandler from './Domain/Handlers/User/UserCreateHandler';
import UserEditHandler from './Domain/Handlers/User/UserEditHandler';
import UserDeleteHandler from './Domain/Handlers/User/UserDeleteHandler';
import UserFindHandler from './Domain/Handlers/User/UserFindHandler';
import FindAllUsersHandler from './Domain/Handlers/User/FindAllUsersHandler';

//Erros imports
import ErrorHandler from './Infraestructure/ErrorsHandlers/ErrorHandler';

//Product imports
import ProductControllerInterface from './Infraestructure/Interfaces/ProductControllerInterface';
import ProductController from './Application/Controllers/ProductController';
import ProductCreateHandlerInterface from './Infraestructure/Interfaces/ProductCreateHandlerInterface';
import ProductCreateHandler from './Domain/Handlers/Product/ProductCreateHandler';
import ProductEditHandlerInterface from './Infraestructure/Interfaces/ProductEditHandlerInterface';
import ProductEditHandler from './Domain/Handlers/Product/ProductEditHandler';
import ProductDeleteHandlerInterface from './Infraestructure/Interfaces/ProductDeleteHandlerInterface';
import ProductDeleteHandler from './Domain/Handlers/Product/ProductDeleteHandler';
import ProductAdapter from './Application/Adapters/ProductAdapter';
import ProductAdapterInterface from './Infraestructure/Interfaces/ProductAdapterInterface';
import ProductFindHandlerInterface from './Infraestructure/Interfaces/ProductFindHandlerInterface';
import ProductFindHandler from './Domain/Handlers/Product/ProductFindHandler';
import FindUserHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/FindUserHandlerInterface';
import CreateUserAdapterInterface from './Infraestructure/Interfaces/UserInterfaces/UserAdapterInterface';
import UserAdapter from './Application/Adapters/UserAdapter';
import FindAllUsersHandlerInterface from './Infraestructure/Interfaces/UserInterfaces/FindAllUsersHandlerInterface';

var container = new Container();

// Services

// User services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);

//Product services
container.bind<ProductAdapterInterface>(TYPES.IProductAdapter).to(ProductAdapter);
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);
container.bind<ProductCreateHandlerInterface>(TYPES.IProductCreateHandler).to(ProductCreateHandler);
container.bind<ProductEditHandlerInterface>(TYPES.IProductEditHandler).to(ProductEditHandler);
container.bind<ProductDeleteHandlerInterface>(TYPES.IProductDeleteHandler).to(ProductDeleteHandler);
container.bind<ProductFindHandlerInterface>(TYPES.IProductFindHandler).to(ProductFindHandler);

//Error services

// User services
container.bind<UserControllerInterface>(TYPES.IUserController).to(UserController);
container.bind<CreateUserHandlerInterface>(TYPES.ICreateUserHandler).to(UserCreateHandler);
container.bind<DeleteUserHandlerInterface>(TYPES.IDeleteUserHandler).to(UserDeleteHandler);
container.bind<EditUserHandlerInterface>(TYPES.IEditUserHandler).to(UserEditHandler);
container.bind<FindUserHandlerInterface>(TYPES.IFindUserHandler).to(UserFindHandler);
container.bind<FindAllUsersHandlerInterface>(TYPES.IFindAllUsersHandler).to(FindAllUsersHandler);
container.bind<CreateUserAdapterInterface>(TYPES.IUserAdapter).to(UserAdapter);

// Product services
container.bind<ProductControllerInterface>(TYPES.IProductController).to(ProductController);

// Errors services
container.bind<ErrorHandler>(ErrorHandler).toSelf();

export default container;
