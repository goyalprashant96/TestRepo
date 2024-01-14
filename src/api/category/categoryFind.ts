/// File is generated from https://studio.fabbuilder.com - category

import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import CategoryService from '../../services/categoryService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.categoryRead,
    );

    const payload = await new CategoryService(req).findById(
      req.params.id,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
/// File is generated from https://studio.fabbuilder.com - category
