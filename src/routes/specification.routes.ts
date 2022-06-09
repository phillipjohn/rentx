import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
});

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
