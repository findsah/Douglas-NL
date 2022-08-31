module.exports = ({ env }) => ({
    upload: {
      provider: 'azure-storage',
      providerOptions: {
        account: 'dioremperia',
        accountKey: 'J0b03U89ACDZkBXxVrgSFP2dnUkUK6/ECTXnsTrbrosX0lhDixEoz058korChm1h3wyYMxO9JTM5+ASte3FHog==',
        serviceBaseURL: 'https://dioremperia.blob.core.windows.net/',
        containerName: '$web',
        defaultPath: 'assets',
        maxConcurrent: 10
      }
    }
  });