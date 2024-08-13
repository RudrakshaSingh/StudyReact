const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASER_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwritePBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
//always in string //gurantees atleast we get string value important and even if empty it will be string
export default config;
