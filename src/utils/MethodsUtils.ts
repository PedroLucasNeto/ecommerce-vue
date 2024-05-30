export const formatNumber = (field: string ) => {
  if (!field) return 0;
  return parseFloat(field.replace(/\D/g, "")).toFixed(2);
};