const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

AdminBro.registerAdapter(AdminBroMongoose);

const { Book } = require("../src/backend/Post/BookModel");
const { User } = require("../src/backend/User/UserModel");
const { Wishlist } = require("../src/backend/Wishlist/WishlistModel");

const permissionSuperAdmin = ({ currentAdmin }) => {
  return currentAdmin && currentAdmin.role === "super-admin";
};

const permissionAdmin = ({ currentAdmin }) => {
  return currentAdmin && currentAdmin.role === "admin";
};

const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [
    {
      resource: Book,
      options: {
        parent: {
          name: "Admin"
        },
        actions: {
          delete: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          bulkDelete: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          edit: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          show: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          new: { isAccessible: [permissionAdmin, permissionSuperAdmin] }
        }
      },
      listProperties: []
    },
    {
      resource: Wishlist,
      options: {
        parent: {
          name: "Admin"
        },
        actions: {
          delete: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          bulkDelete: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          edit: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          show: { isAccessible: [permissionAdmin, permissionSuperAdmin] },
          new: { isAccessible: [permissionAdmin, permissionSuperAdmin] }
        },
        listProperties: []
      }
    },
    {
      resource: User,
      options: {
        parent: {
          name: "SuperAdmin"
        },
        actions: {
          delete: { isAccessible: permissionSuperAdmin },
          bulkDelete: { isAccessible: permissionSuperAdmin },
          edit: { isAccessible: permissionSuperAdmin },
          show: { isAccessible: permissionSuperAdmin },
          new: { isAccessible: permissionSuperAdmin }
        },
        listProperties: ["username", "firstName", "lastName"]
      }
    }
  ],
  rootPath: "/admin"
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user.role === "admin" || user.role === "super-admin") {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user;
      }
    } else if (user.role === "restrictred" || user.role === "") {
      return false;
    }
  },
  cookiePassword: "asjdaskdl34-dfsrw45-dsfsdg-sdgsdgef34trh5y"
});

module.exports = router;
