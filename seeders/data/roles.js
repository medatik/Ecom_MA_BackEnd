const rolesData = [
    {
        name: "admin",
        description: "Admin role with full access",
        permissions: ["manage_users", "manage_products", "manage_orders", "view_reports"]
    },
    {
        name: "user",
        description: "Regular user role with limited access",
        permissions: ["view_products", "create_order"]
    },
    {
        name: "comercial",
        description: "Commercial role with access to sales data",
        permissions: ["view_sales", "manage_customers"]
    }
];

module.exports = rolesData;