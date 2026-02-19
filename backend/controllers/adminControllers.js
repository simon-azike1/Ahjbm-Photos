import createCrudController from "./crudControllerFactory.js";

export const teamController = createCrudController("teams");
export const projectController = createCrudController("projects");
export const eventController = createCrudController("events");
export const serviceController = createCrudController("services");
export const blogController = createCrudController("blogs");
export const contactController = createCrudController("contacts");
