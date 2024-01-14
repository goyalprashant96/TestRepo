/// File is generated from https://studio.fabbuilder.com - category

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('category');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CategorySchema = new Schema(
    {
      name: {
        type: String,
      },

      identifier: {
        type: String,
      },

      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  CategorySchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  CategorySchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CategorySchema.set('toJSON', {
    getters: true,
  });

  CategorySchema.set('toObject', {
    getters: true,
  });

  return database.model('category', CategorySchema);
};
/// File is generated from https://studio.fabbuilder.com - category
