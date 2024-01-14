/// File is generated from https://studio.fabbuilder.com - category

export default (app) => {
  app.post(
    `/tenant/:tenantId/category`,
    require('./categoryCreate').default,
  );
  app.put(
    `/tenant/:tenantId/category/:id`,
    require('./categoryUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/category/import`,
    require('./categoryImport').default,
  );
  app.delete(
    `/tenant/:tenantId/category`,
    require('./categoryDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/category/autocomplete`,
    require('./categoryAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/category/count`,
    require('./categoryCount').default,
  );
  app.get(
    `/tenant/:tenantId/category`,
    require('./categoryList').default,
  );
  app.get(
    `/tenant/:tenantId/category/:id`,
    require('./categoryFind').default,
  );
};
/// File is generated from https://studio.fabbuilder.com - category
