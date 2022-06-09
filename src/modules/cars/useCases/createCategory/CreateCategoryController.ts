import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCases: CreateCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
