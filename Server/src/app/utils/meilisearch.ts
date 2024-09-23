import { MeiliSearch } from 'meilisearch';
import { Document, Types } from 'mongoose';

import config from '../config';
import { TProduct } from '../modules/product/product.interface';
import { noImage } from '../modules/product/product.constan';

const meiliClient = new MeiliSearch({
  host: config.meilisearch_host as string,
  apiKey: config.meilisearch_master_key,
});

export async function addDocumentToIndex(
  result: Document<unknown, object, TProduct> & TProduct & { _id: Types.ObjectId },
  indexKey: string
) {
  const index = meiliClient.index(indexKey);

  const { _id, name, description, productImage } = result;
  const firstImage = productImage?.[0] || noImage;

  const document = {
    id: _id.toString(), // Ensure the ID is a string
    name,
    description,
    thumbnail: firstImage,
  };

  try {
    await index.addDocuments([document]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error adding document to MeiliSearch:', error);
  }
}

export const deleteDocumentFromIndex = async (indexKey: string, id: string) => {
  const index = meiliClient.index(indexKey);

  try {
    await index.deleteDocument(id);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error deleting resource from MeiliSearch:', error);
  }
};

export default meiliClient;