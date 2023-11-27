const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fcqp32",
  e2e: {
    baseUrl : "http://localhost:3000"
      
  },
});
