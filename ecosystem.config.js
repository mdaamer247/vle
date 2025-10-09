module.exports = {
  apps: [
    {
      name: "vle-strapi",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
