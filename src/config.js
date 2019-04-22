export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-mobile-programming"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://y3tgi2aog9.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_nixrHYqOl",
    APP_CLIENT_ID: "6k8tkt985qotg0ps4dpeslimam",
    IDENTITY_POOL_ID: "us-east-2:f8e1e217-5dc4-4cd4-9b4b-c113573650c3"
  }
};
