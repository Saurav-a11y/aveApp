import { createSelector } from "reselect";

const shop = (state) => state.shop;

export const selectShop = createSelector(
  [shop],
  (shop) => shop.shopCollections
);

export const selectShopPreview = createSelector(
  [selectShop],
  (shopCollections) =>
    Object.keys(shopCollections).map((key) => shopCollections[key])
);

export const selectCollectionCategory = (collectionUrlParam) =>
  createSelector(
    [selectShop],
    (shopCollections) => shopCollections[collectionUrlParam]
  );

export const selectCollectionShopItem = createSelector(
  [selectShopPreview],
  (singleItem) =>
    singleItem.map((singleItems) =>
      Object.keys(singleItems.items).map((keys) => singleItems.items[keys])
    )
);
export const selectCollectionSingleItem = (itemId) =>
  createSelector([selectCollectionShopItem], (collectionShopItem) =>
    Object.keys(collectionShopItem).map((keys) =>
      collectionShopItem[keys].find((item) => item.id === itemId)
    )
  );
