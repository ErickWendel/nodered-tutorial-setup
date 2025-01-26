module.exports = {
  editorTheme: {
    projects: {
      enabled: true,
    },
  },
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "yaferreira",
        // docker exec -it nodered-ew node-red-admin hash-pw
        // yaferreira
        password:
          "$2b$08$Dnpo9giBS99bbujPk6L/ReE3I32bNES7IqpuO3IXD2YuRZT3zun7a",
        permissions: "*",
      },
    ],
  },
  userDir: "/data",
};
