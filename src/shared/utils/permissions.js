export const permissions = {
  Dashboard: {
    admin: true,
  },
};

export default function hasPermission(feature, userType) {
  if (permissions[feature]) {
    return permissions[feature][userType];
  }
  return true;
}
